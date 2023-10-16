export const editorSettings = {
    iso: {
        // footer: true,
        // header: true,
        blocks: {
            disallowBlocks: ['core/paragraph']
        },
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
        hasFixedToolbar: false,
        template: null,
        templateLock: null,
        reusableBlocks: [],
        styles: [],
        defaultEditorStyles: [],
        bodyPlaceholder: 'Glutenberg Module',
        // __experimentalBlockPatterns: window.wp.__experimentalBlockPatterns ?? [],
        // __experimentalBlockPatternCategories: window.wp.__experimentalBlockPatternCategories ?? [],
        mediaUpload: ({ filesList, onFileChange }) => {
            setTimeout(() => {
                const uploadedFiles = Array.from(filesList).map(file => {
                    return {
                        id: file.name,
                        name: file.name,
                        url: `https://dummyimage.com/600x400/000/fff&text=${file.name}`
                    }
                })
                onFileChange(uploadedFiles)
            }, 1000)
        },
    },
};