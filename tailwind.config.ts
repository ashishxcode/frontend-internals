import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			surface: {
  				DEFAULT: '#ffffff',
  				secondary: '#f8fafc',
  				code: '#0f172a'
  			},
  			ink: {
  				DEFAULT: '#171717',
  				secondary: '#525252',
  				muted: '#a3a3a3'
  			},
  			accent: {
  				DEFAULT: '#2563eb',
  				hover: '#1d4ed8',
  				light: '#eff6ff',
  				border: '#bfdbfe'
  			},
  			sidebar: {
  				DEFAULT: 'hsl(var(--sidebar-background))',
  				foreground: 'hsl(var(--sidebar-foreground))',
  				primary: 'hsl(var(--sidebar-primary))',
  				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
  				accent: 'hsl(var(--sidebar-accent))',
  				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
  				border: 'hsl(var(--sidebar-border))',
  				ring: 'hsl(var(--sidebar-ring))'
  			}
  		},
  		fontFamily: {
  			sans: [
  				'Inter',
  				'-apple-system',
  				'BlinkMacSystemFont',
  				'Segoe UI',
  				'system-ui',
  				'sans-serif'
  			],
  			mono: [
  				'JetBrains Mono',
  				'Fira Code',
  				'SF Mono',
  				'ui-monospace',
  				'monospace'
  			]
  		},
  		typography: {
  			DEFAULT: {
  				css: {
  					maxWidth: 'none',
  					code: {
  						fontFamily: 'JetBrains Mono, Fira Code, monospace',
  						fontSize: '0.8125em'
  					},
  					'code::before': {
  						content: '"'
  					},
  					'code::after': {
  						content: '"'
  					}
  				}
  			}
  		},
  		animation: {
  			'fade-in': 'fadeIn 0.2s ease-out',
  			'slide-in': 'slideIn 0.2s ease-out'
  		},
  		keyframes: {
  			fadeIn: {
  				'0%': {
  					opacity: '0'
  				},
  				'100%': {
  					opacity: '1'
  				}
  			},
  			slideIn: {
  				'0%': {
  					opacity: '0',
  					transform: 'translateY(4px)'
  				},
  				'100%': {
  					opacity: '1',
  					transform: 'translateY(0)'
  				}
  			}
  		}
  	}
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
