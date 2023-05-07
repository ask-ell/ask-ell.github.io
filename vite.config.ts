import { defineConfig } from 'vite';
import { dirname, join } from 'path'

function getFolderAbsolutePath(pathFromProjectRootPath: string) {
    const projectRootPath = dirname(__filename);
    return join(projectRootPath, pathFromProjectRootPath);
}

export default defineConfig({
    root: getFolderAbsolutePath('src'),
    publicDir: getFolderAbsolutePath('public'),
    server: {
        host: '0.0.0.0',
        port: 3000
    },
    build: {
        outDir: getFolderAbsolutePath('docs'),
        emptyOutDir: true,
        copyPublicDir: true
    }
});