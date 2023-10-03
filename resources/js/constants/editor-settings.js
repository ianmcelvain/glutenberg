import * as selectors from '@wordpress/preferences/build-module/store/selectors';
export const editorSettings = {
    iso: {
        footer: true,
        header: true,
        blocks: {
            allowBlocks: [],
        },
        toolbar: {
            inserter: true,
            inspector: true,
            navigation: true,
            documentInspector: true,
            toc: true,
            undo: true,            selectorTool: true,
        },
        moreMenu: {
            editor: true,
            fullscreen: true,
            preview: true,
        },
        sidebar: {
            inserter: true,
            inspector: true
        }
    },
    editor: {
        codeEditingEnabled: true,
        hasUploadPermissions: true,
        allowedMimeTypes: [],
        allowedBlockTypes: [],
        hasFixedToolbar: true,
        template: null,
        templateLock: null,
        reusableBlocks: [],
        styles: [],
        defaultEditorStyles: [],
        bodyPlaceholder: 'Glutenberg Module',
        // __experimentalBlockPatterns: window.wp.__experimentalBlockPatterns ?? [],
        // __experimentalBlockPatternCategories: window.wp.__experimentalBlockPatternCategories ?? []
    },
};