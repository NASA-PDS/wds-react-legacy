import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import tsConfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve('src-package', 'index.ts'),
      formats: [ 'cjs', 'es', 'umd' ],
      fileName: (format) => `${format}/pds-wds-react.${format}.js`,
      name: 'pds-wds-react',
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React'
        }
      }
    }
  },
  plugins: [ 
    react(),
    tsConfigPaths(),
    dts({
      include: ['src-package/components/'],
  })]
})