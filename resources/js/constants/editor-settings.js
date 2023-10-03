import * as selectors from '@wordpress/preferences/build-module/store/selectors';
import * as actions from '@wordpress/preferences/build-module/store/actions';
import reducer from '@wordpress/preferences/build-module/store/reducer';
import { store as blockEditorStore } from '@wordpress/block-editor';

export const editorSettings = {
    iso: {
        // footer: true,
        // header: true,
        // allowApi: false,
        // blocks: {
        //     allowBlocks: [],
        // },
        // linkMenu: [{
        //     title: 'Cardinal Financial',
        //     url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
        // }],
        // customStores: [
        //     {
        //         name: 'core/block-editor',
        //         config: {
        //             reducer: reducer,
        //             selectors: selectors,
        //             actions: actions,
        //         },
        //     },
        // ],
        // customStores: [
        //     blockEditorStore,
        // ],
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