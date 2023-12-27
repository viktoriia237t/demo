export default {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        colors: {

            'action': 'var(--action)',
            'primary-30': 'var(--primary-30)',
            'primary-40': 'var(--primary-40)',
            'primary-90': 'var(--primary-90)',
            'primary-100': 'var(--primary-100)',
            'red': 'var(--red)',
            'orange': 'var(--orange)',
            'green': 'var(--green)',
            'white': 'var(--white)',
            'transparent': 'transparent',
        },

        gridTemplateColumn: {
            2: 'repeat(2, minmax(0, 1fr))',
            4: 'repeat(4, minmax(0, 1fr))',
            5: 'repeat(5, minmax(0, 1fr))',
            6: 'repeat(6, minmax(0, 1fr))',
            12: 'repeat(12, minmax(0, 1fr))',
        },
        backgroundImage: {
            'aside': 'linear-gradient(90deg, var(--primary-100) 0%, var(--primary-80) 100%)',
        },
        screens: {
            tablet: '576px',
            'tablet-sm': '768px',
            desktop: '1024px',
            'desktop-sm': '1366px',
        },
        fontSize: {
            'xs': '0.625rem', //10px
            'sm': '0.75rem', //12px
            'md': '0.875rem', //14px
            'lg': '1rem', //16px
            'xl': '1.25rem', //20px
            '1-1/2': '1.5rem', //24px
            '1-3/4': '1.75rem', //28px
            '2': '2rem', //32px
            '2-1/4': '2.25rem', //36px
        },
        fontFamily: {
            'primary': "var(--font-primary)",
            'base': "var(--font-base)",
        },
        fontWeight: {
            'light': 400,
            'normal': 400,
            'bold': 700
        },
        lineHeight: {
            1: 1
        },
        spacing: {
            '0': '0',
            '1/4': '0.25rem', //4px
            '1/2': '0.5rem', //8px
            '3/4': '0.75rem', //12px
            '1': '1rem', //16px
            '1-1/4': '1.25rem', //20px
            '1-1/2': '1.5rem', //24px
            '2': '2rem', //32px
            '3': '3rem', //48px
            '4': '4rem', //64px
        },
        height: {
            8: '8px',
            16: '16px',
            24: '24px',
            32: '32px',
            68: '68px',
            'auto': 'auto',
            'full': '100%',
            'screen': '100vh',
            'inherit': 'inherit',
            'dynamic-screen': '100dvh',
            'fit-content': 'fit-content',
        },
        maxHeight: {
            'auto': 'auto',
            'full': '100%'
        },
        minHeight: {
            68: '68px',
            'auto': 'auto',
        },
        width: {
            0: '0px',
            8: '8px',
            16: '16px',
            24: '24px',
            32: '32px',
            50: '50px',
            88: '88px',
            200: '200px',
            290: '290px',
            'full': '100%',
            'fit-content': 'fit-content',
        },
        minWidth:{
            8: '8px',
            16: '16px',
            24: '24px',
            32: '32px',
            50: '50px',
            88: '88px',
            200: '200px',
            290: '290px',
            'full': '100%'
        },
        maxWidth: {

        },
        borderWidth: {
            0: '0',
            1: '1px',
            2: '2px'
        },
        boxShadow: {
            '0': '0',
            'sm': '0px 1px 3px 0px rgba(0, 0, 0, 0.06)',

        },
        transitionDuration: {
            300: '300ms',
            400: '400ms',
            700: '700ms',
        },
        translate: {
            '-half': '-50%',
        },
        zIndex: {
            0: 0,
            1: 1,
            2: 2,
            3: 3,

        },
        inset: {
            '0': '0',
            '1': '1rem', //16px
        },
        divideWidth: {
            0: '0px',
            1: '1px'
        },
        gridColumn: {
            'span-7': 'span 7 / span 7',
        },
        borderRadius: {
            '0': '0',
            'full': '9999px',
            '1/4': '0.25rem',
            '1/2': '0.5rem',
        },

    },
    extend:
        {
            transition: {
                width: 'width, min-width',
            },
            opacity: {
                30: '0.3',
                50: '0.5',
                100: '1',
            },
            backgroundOpacity: {
                6: '0.06',
                50: '0.5',
            }

        },
    plugins: [],
}

