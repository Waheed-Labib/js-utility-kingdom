import terser from '@rollup/plugin-terser';

const devmode = (process.env.NODE_ENV === 'development')
console.log(`${devmode ? 'development' : 'production'} mode bundle`)

export default [
    {
        input: 'src/index.js',
        output: {
            file: 'dist/index.js',
            format: 'es',
            sourcemap: devmode ? 'inline' : false,
        },
        plugins: [
            terser({
                compress: {
                    drop_console: true, // Removes console.log statements
                },
                mangle: {
                    properties: true, // Mangle property names for smaller output
                },
            })
        ]
    }
]