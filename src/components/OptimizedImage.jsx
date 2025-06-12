import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * OptimizedImage Component
 * Provides lazy loading, WebP support, and responsive images
 */
const OptimizedImage = ({ 
  src, 
  alt, 
  width, 
  height, 
  className = '', 
  loading = 'lazy',
  sizes = '100vw',
  placeholder = true,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);

  // Generate WebP and responsive versions
  const generateSrcSet = (baseSrc) => {
    if (!baseSrc) return '';
    
    const extension = baseSrc.split('.').pop();
    const baseName = baseSrc.replace(`.${extension}`, '');
    
    // Generate different sizes
    const sizes = [320, 768, 1024, 1920];
    return sizes.map(size => 
      `${baseName}-${size}w.webp ${size}w`
    ).join(', ');
  };

  const generateFallbackSrcSet = (baseSrc) => {
    if (!baseSrc) return '';
    
    const extension = baseSrc.split('.').pop();
    const baseName = baseSrc.replace(`.${extension}`, '');
    
    const sizes = [320, 768, 1024, 1920];
    return sizes.map(size => 
      `${baseName}-${size}w.${extension} ${size}w`
    ).join(', ');
  };

  // Intersection Observer for lazy loading
  useEffect(() => {
    if (loading === 'eager') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px 0px',
        threshold: 0.1
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [loading]);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoaded(true);
  };

  const containerClasses = `optimized-image-container ${className} ${
    isLoaded ? 'loaded' : 'loading'
  } ${hasError ? 'error' : ''}`;

  return (
    <div 
      ref={imgRef}
      className={containerClasses}
      style={{ width, height }}
      {...props}
    >
      {placeholder && !isLoaded && (
        <div className="image-placeholder">
          <div className="placeholder-shimmer"></div>
        </div>
      )}
      
      {isInView && (
        <picture>
          {/* WebP sources with responsive sizes */}
          <source
            type="image/webp"
            srcSet={generateSrcSet(src)}
            sizes={sizes}
          />
          
          {/* Fallback sources */}
          <source
            srcSet={generateFallbackSrcSet(src)}
            sizes={sizes}
          />
          
          {/* Fallback img element */}
          <img
            src={src}
            alt={alt}
            width={width}
            height={height}
            loading={loading}
            onLoad={handleLoad}
            onError={handleError}
            className="optimized-image"
            style={{
              opacity: isLoaded ? 1 : 0,
              transition: 'opacity 0.3s ease-in-out'
            }}
          />
        </picture>
      )}
    </div>
  );
};

OptimizedImage.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  className: PropTypes.string,
  loading: PropTypes.oneOf(['lazy', 'eager']),
  sizes: PropTypes.string,
  placeholder: PropTypes.bool
};

export default OptimizedImage;
