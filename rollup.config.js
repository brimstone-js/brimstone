import commonjs from '@rollup/plugin-commonjs'
import nodeResolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import { terser } from 'rollup-plugin-terser'
import { resolve } from 'path'
import { name, dependencies } from './package.json'

const input = resolve(__dirname, './src/index.ts')
const globals = {
  react: 'React',
}
const external = Object.keys(dependencies)

const development = {
  input,
  output: [
    {
      dir: resolve(__dirname, './dist'),
      format: 'esm',
      sourcemap: false
    },
    {
      file: resolve(__dirname, `./dist/${name}.js`),
      format: 'umd',
      name,
      sourcemap: false,
      globals
    }
  ],
  plugins: [
    typescript(),
    nodeResolve(),
    commonjs()
  ],
  external
}

const production = {
  input,
  output: {
    file: resolve(__dirname, `./dist/${name}.min.js`),
    format: 'umd',
    name,
    sourcemap: false,
    globals
  },
  plugins: [
    typescript({
      declaration: false,
      removeComments: true
    }),
    nodeResolve(),
    commonjs(),
    terser()
  ],
  external
}

export default [
  development,
  production
]
