export const editorSettings = {
    iso: {
        footer: true,
        header: true,
        allowApi: false,
        linkMenu: [{
            title: 'Cardinal Financial',
            url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
        }],
        toolbar: {
            inserter: true,
            inspector: true,
            navigation: true,
            documentInspector: true,
            toc: true,
            undo: true,
            selectorTool: true,
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