const devmode = (process.env.NODE_ENV === 'development')
console.log(`${devmode ? 'development' : 'production'} mode bundle`)

export default [
    {
        input: 'src/index.js',
        output: {
            file: 'dist/index.js',
            format: 'es',
            sourcemap: devmode ? 'inline' : false,
            plugins: [

            ]
        }
    }
]