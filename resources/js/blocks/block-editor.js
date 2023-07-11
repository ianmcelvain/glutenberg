import _ from 'lodash';
// import * as blocks from './index';

export default class BlockEditor {
    constructor(wp, editorEl) {
        this.wp = wp;
        this.editorEl = editorEl;
    }

    editorSettings = {
        iso: {
            blocks: {
                disallowBlocks: [],
            },
            moreMenu: {
                editor: true,
                preview: true,
                fullscreen: true
            },
            toolbar: {
                inserter: true,
                inspector: true,
                navigation: true,
                selectorTool: true,
                toc: true,
                documentInspector: true
            },
        },
        editor: {
            mediaUpload: ({ filesList, onFileChange }) => {
                const uploadedFiles = Array.from(filesList).map(async (file) => {
                    const formData = new FormData();
                    formData.append('image', file);

                    return fetch('/api/v1/image/upload', { // doesn't exist
                        method: 'POST',
                        body: formData,
                    })
                        .then((response) => response.json())
                        .then((data) => data.image);
                });
                onFileChange(uploadedFiles);
            },
            allowedMimeTypes: ['image/png'],
            hasPermissionsToManageWidgets: true,
            hasUploadPermissions: true,
        },
    }

    /**
     * Function to register an individual block.
     *
     * @param {Object} block The block to be registered.
     *
     */
    registerBlock = (block) => {
        if (!block) {
            return;
        }
        const { settings, name } = block;
        this.wp.registerBlockType(`cardfin/${name}`, settings);
    };

    // registerFormat = (format) => {
    //     if(!format) {
    //         return;
    //     }
    //     const { type, settings } = format;
    //     this.wp.richText.registerFormatType(`cardfin/${type}`, settings);
    // };


    init = () => {
        // _.forOwn(blocks, this.registerBlock);
        // _.forOwn(formats, this.registerFormat);
        this.wp.attachEditor(this.editorEl, this.editorSettings);
    }
}
