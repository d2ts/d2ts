import typescript from 'rollup-plugin-typescript2'
import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'

export default {
  input: './src/index.ts',
  output: {
    format: 'cjs',
    file: './dist/index.js',
  },
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      typescript: require('ttypescript'),
      tsconfig: './tsconfig.json',
      tsconfigDefaults: {
        compilerOptions: {
          plugins: [
            {transform: 'typescript-transform-paths'},
            {transform: 'typescript-transform-paths', afterDeclarations: true},
          ],
        },
      },
    }),
  ],
}
