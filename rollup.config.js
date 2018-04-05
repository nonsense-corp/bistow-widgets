import uglify from 'rollup-plugin-uglify';

// rollup.config.js
export default [
    {
        input: 'src/type1.js',
        output: {
        file: 'dist/type1-min.js',
        format: 'cjs'
        },
        plugins: [
            uglify()
        ]
    }
];