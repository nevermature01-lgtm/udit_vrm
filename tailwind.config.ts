import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ['Poppins', 'sans-serif'],
        headline: ['"Great Vibes"', 'cursive'],
        code: ['monospace'],
      },
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
        sidebar: {
          DEFAULT: 'hsl(var(--sidebar-background))',
          foreground: 'hsl(var(--sidebar-foreground))',
          primary: 'hsl(var(--sidebar-primary))',
          'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
          accent: 'hsl(var(--sidebar-accent))',
          'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
          border: 'hsl(var(--sidebar-border))',
          ring: 'hsl(var(--sidebar-ring))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        'background-pan': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'scale-bounce': {
          '0%': { transform: 'scale(0)', opacity: '0' },
          '60%': { transform: 'scale(1.1)', opacity: '1' },
          '100%': { transform: 'scale(1)' },
        },
        'glow-pop': {
          '0%': { transform: 'scale(0.8)', opacity: '0', boxShadow: '0 0 0px hsl(var(--primary))' },
          '70%': { transform: 'scale(1.05)', opacity: '1', boxShadow: '0 0 40px hsl(var(--primary) / 0.7)' },
          '100%': { transform: 'scale(1)', opacity: '1', boxShadow: '0 0 20px hsl(var(--primary) / 0.5)' },
        },
        'cursor-trail': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '100%': { transform: 'scale(0)', opacity: '0' },
        },
        'float-heart': {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '1' },
          '100%': { transform: 'translateY(-100vh) scale(0.5)', opacity: '0' },
        },
        'heart-pulse': {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.08)' },
          '100%': { transform: 'scale(1)' },
        },
        'float-up-down': {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-8px)' },
        },
        'slow-spin': {
            'from': { transform: 'rotate(0deg)' },
            'to': { transform: 'rotate(360deg)' },
        },
        'sparkle': {
          '0%': { transform: 'translate(-50%, -50%) scale(0) rotate(0deg)', opacity: '0.5' },
          '50%': { transform: 'translate(-50%, -50%) scale(1) rotate(180deg)', opacity: '1' },
          '100%': { transform: 'translate(-50%, -50%) scale(0) rotate(360deg)', opacity: '0.5' },
        },
        'subtle-glow': {
            '0%, 100%': { opacity: '0.7' },
            '50%': { opacity: '1' },
        },
        'aurora-one': {
            '0%': { transform: 'translate(40%, -20%) scale(0.8)' },
            '100%': { transform: 'translate(-40%, 20%) scale(1.2)' },
        },
        'aurora-two': {
            '0%': { transform: 'translate(-40%, 40%) scale(1.2)' },
            '100%': { transform: 'translate(40%, -40%) scale(0.8)' },
        },
        'aurora-three': {
            '0%': { transform: 'translate(0%, 50%) scale(1)' },
            '100%': { transform: 'translate(50%, 0%) scale(1.3)' },
        },
        'glow': {
          '0%, 100%': { textShadow: '0 0 10px hsl(var(--primary) / 0.5), 0 0 20px hsl(var(--primary) / 0.3)' },
          '50%': { textShadow: '0 0 20px hsl(var(--primary) / 0.8), 0 0 40px hsl(var(--primary) / 0.5)' },
        },
        'explode': {
          '0%': { transform: 'scale(0)', opacity: '1' },
          '100%': { transform: 'scale(1.5)', opacity: '0' },
        },
        'fade-in': {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'background-pan': 'background-pan 20s ease infinite',
        'shimmer': 'shimmer 4s infinite linear',
        'float-up-down': 'float-up-down 4s ease-in-out infinite',
        'scale-bounce': 'scale-bounce 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'glow-pop': 'glow-pop 1s ease-out forwards',
        'cursor-trail': 'cursor-trail 0.5s linear forwards',
        'float-heart': 'float-heart 10s linear infinite',
        'heart-pulse': 'heart-pulse 2.5s ease-in-out infinite',
        'slow-spin': 'slow-spin 20s linear infinite',
        'sparkle': 'sparkle 3s ease-in-out infinite',
        'subtle-glow': 'subtle-glow 5s ease-in-out infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'explode': 'explode 0.7s ease-out forwards',
        'fade-in': 'fade-in 1s ease-out forwards',
        'fade-in-up': 'fade-in-up 1s ease-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
