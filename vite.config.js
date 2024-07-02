// vite.config.js
import { defineConfig } from 'vite';
import injectHTML from 'vite-plugin-html-inject';

export default defineConfig({
    plugins: [injectHTML({
        tagName: 'include',
        sourceAttr: 'file',
    })],
    build: {
        rollupOptions: {
            output: {
                assetFileNames: ( assetInfo ) => {
                    let extType = assetInfo.name.split( '.' )[ 1 ];
                    let fileName = '';

                    if ( /css|scss/i.test( extType ) ) {
                        fileName = `assets/css/style.[hash][extname]`;
                    }

                    return fileName;
                },
            },
        },
    },
});