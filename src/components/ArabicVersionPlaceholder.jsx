import React from 'react';
import '../styles/ArabicVersionPlaceholder.css';
import Button from '../components/Button';

const ArabicVersionPlaceholder = () => {
  return (
    <section id="arabic-version" className="arabic-version-section" aria-labelledby="arabic-version-title">
      <div className="arabic-version-container">
        <h2 id="arabic-version-title" className="arabic-version-title">برنامج المنتور</h2>
        <p className="arabic-version-subtitle" dir="rtl">
          النسخة العربية قادمة قريباً
        </p>
        
        <div className="arabic-version-coming-soon">
          <div className="coming-soon-content">
            <h3 className="coming-soon-title">🚀 قريباً</h3>
            <p className="coming-soon-text" dir="rtl">
              نحن نعمل على تطوير النسخة العربية الكاملة من موقع برنامج المنتور.
              سيتم إطلاقها قريبًا بكافة المزايا والمحتوى المتوفر في النسخة الإنجليزية، مع إضافة محتوى مخصص للناطقين بالعربية.
            </p>
            
            <div className="youtube-embed-container">              <iframe 
                title="فيديو تعريفي لبرنامج المنتور" 
                width="560" 
                height="315" 
                src="https://www.youtube.com/embed/hZ2oxrJg2Cc" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>            <div className="arabic-features-preview">
              <h3 className="arabic-features-title">ما الذي يمكنك توقعه</h3>
              <ul className="arabic-features-list">
                <li>مقدمة عن برنامج المنتور</li>
                <li>معلومات عن الفعاليات والأنشطة</li>
                <li>نظام الدوائر المعرفية لبرنامج المنتور</li>
                <li>أخبار البرنامج</li>
                <li>فرص التواصل والمشاركة</li>
              </ul>
            </div>
            
            <div className="arabic-version-cta">              <Button 
                variant="primary" 
                size="large"
                onClick={() => window.location.href = "./index.html"}
                aria-label="الإنتقال للنسخة الإنجليزية"
              >
                الإنتقال للنسخة الإنجليزية
              </Button>
              <Button 
                variant="secondary" 
                size="large"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                aria-label="تواصل معنا لمزيد من المعلومات"
              >
                تواصل معنا
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArabicVersionPlaceholder;
