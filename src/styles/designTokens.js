/**
 * El Mentor Design System - Design Tokens
 * 
 * Comprehensive design tokens following atomic design principles
 * and OODA loop analysis recommendations
 */

export const designTokens = {
  // Spacing System (8px grid)
  spacing: {
    none: '0',
    xs: '4px',    // 0.25rem
    sm: '8px',    // 0.5rem
    md: '16px',   // 1rem
    lg: '24px',   // 1.5rem
    xl: '32px',   // 2rem
    '2xl': '48px', // 3rem
    '3xl': '64px', // 4rem
    '4xl': '96px', // 6rem
    '5xl': '128px' // 8rem
  },

  // Professional Color Palette
  colors: {
    // Primary Brand Colors
    primary: {
      50: '#EBF4FF',
      100: '#DBEAFE', 
      200: '#BFDBFE',
      300: '#93C5FD',
      400: '#60A5FA',
      500: '#3B82F6', // Main primary
      600: '#2563EB',
      700: '#1D4ED8',
      800: '#1E40AF',
      900: '#1E3A8A'
    },

    // Secondary Colors (Professional Gray)
    secondary: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563', // Main secondary
      700: '#374151',
      800: '#1F2937',
      900: '#111827'
    },

    // Success/Accent Colors
    success: {
      50: '#ECFDF5',
      100: '#D1FAE5',
      200: '#A7F3D0',
      300: '#6EE7B7',
      400: '#34D399',
      500: '#10B981', // Main success
      600: '#059669',
      700: '#047857',
      800: '#065F46',
      900: '#064E3B'
    },

    // Warning Colors
    warning: {
      50: '#FFFBEB',
      100: '#FEF3C7',
      200: '#FDE68A',
      300: '#FCD34D',
      400: '#FBBF24',
      500: '#F59E0B', // Main warning
      600: '#D97706',
      700: '#B45309',
      800: '#92400E',
      900: '#78350F'
    },

    // Error Colors
    error: {
      50: '#FEF2F2',
      100: '#FEE2E2',
      200: '#FECACA',
      300: '#FCA5A5',
      400: '#F87171',
      500: '#EF4444', // Main error
      600: '#DC2626',
      700: '#B91C1C',
      800: '#991B1B',
      900: '#7F1D1D'
    },

    // Special Colors
    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent'
  },

  // Typography System
  typography: {
    fontFamily: {
      sans: [
        'Inter',
        '-apple-system',
        'BlinkMacSystemFont',
        'Segoe UI',
        'Roboto',
        'Oxygen',
        'Ubuntu',
        'Cantarell',
        'sans-serif'
      ],
      mono: [
        'Fira Code',
        'Monaco',
        'Cascadia Code',
        'Segoe UI Mono',
        'Roboto Mono',
        'monospace'
      ]
    },

    fontSize: {
      xs: ['12px', { lineHeight: '16px' }],
      sm: ['14px', { lineHeight: '20px' }],
      base: ['16px', { lineHeight: '24px' }],
      lg: ['18px', { lineHeight: '28px' }],
      xl: ['20px', { lineHeight: '32px' }],
      '2xl': ['24px', { lineHeight: '36px' }],
      '3xl': ['30px', { lineHeight: '40px' }],
      '4xl': ['36px', { lineHeight: '48px' }],
      '5xl': ['48px', { lineHeight: '56px' }],
      '6xl': ['60px', { lineHeight: '72px' }]
    },

    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800'
    }
  },

  // Border Radius
  borderRadius: {
    none: '0',
    sm: '4px',
    base: '8px',
    md: '12px',
    lg: '16px',
    xl: '24px',
    '2xl': '32px',
    full: '9999px'
  },

  // Shadows
  boxShadow: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    base: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
    inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'
  },

  // Z-Index Scale
  zIndex: {
    hide: -1,
    auto: 'auto',
    base: 0,
    docked: 10,
    dropdown: 1000,
    sticky: 1100,
    banner: 1200,
    overlay: 1300,
    modal: 1400,
    popover: 1500,
    skipLink: 1600,
    toast: 1700,
    tooltip: 1800
  },

  // Transition Durations
  transitionDuration: {
    none: '0ms',
    fast: '150ms',
    base: '300ms',
    slow: '500ms',
    slower: '700ms'
  },

  // Transition Timing Functions
  transitionTimingFunction: {
    linear: 'linear',
    in: 'cubic-bezier(0.4, 0, 1, 1)',
    out: 'cubic-bezier(0, 0, 0.2, 1)',
    'in-out': 'cubic-bezier(0.4, 0, 0.2, 1)'
  },

  // Breakpoints (Mobile-First)
  breakpoints: {
    mobile: '320px',
    tablet: '768px',
    desktop: '1024px',
    wide: '1200px',
    ultrawide: '1440px'
  },

  // Component-Specific Tokens
  components: {
    // Button specifications
    button: {
      height: {
        sm: '32px',
        base: '44px', // Touch-friendly minimum
        lg: '56px'
      },
      padding: {
        sm: '8px 16px',
        base: '12px 24px',
        lg: '16px 32px'
      }
    },

    // Card specifications
    card: {
      padding: {
        sm: '16px',
        base: '24px',
        lg: '32px'
      },
      borderRadius: '12px',
      shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
    },

    // Navigation specifications
    nav: {
      height: '64px',
      zIndex: 1100
    }
  }
};

// CSS Custom Properties Export
export const cssVariables = {
  // Colors
  '--color-primary': designTokens.colors.primary[500],
  '--color-primary-hover': designTokens.colors.primary[600],
  '--color-secondary': designTokens.colors.secondary[600],
  '--color-success': designTokens.colors.success[500],
  '--color-warning': designTokens.colors.warning[500],
  '--color-error': designTokens.colors.error[500],

  // Spacing
  '--spacing-xs': designTokens.spacing.xs,
  '--spacing-sm': designTokens.spacing.sm,
  '--spacing-md': designTokens.spacing.md,
  '--spacing-lg': designTokens.spacing.lg,
  '--spacing-xl': designTokens.spacing.xl,

  // Typography
  '--font-family-sans': designTokens.typography.fontFamily.sans.join(', '),
  '--font-size-base': designTokens.typography.fontSize.base[0],
  '--line-height-base': designTokens.typography.fontSize.base[1].lineHeight,

  // Border Radius
  '--border-radius-sm': designTokens.borderRadius.sm,
  '--border-radius-base': designTokens.borderRadius.base,
  '--border-radius-lg': designTokens.borderRadius.lg,

  // Shadows
  '--shadow-sm': designTokens.boxShadow.sm,
  '--shadow-base': designTokens.boxShadow.base,
  '--shadow-lg': designTokens.boxShadow.lg,

  // Transitions
  '--transition-base': `all ${designTokens.transitionDuration.base} ${designTokens.transitionTimingFunction['in-out']}`
};

export default designTokens;
