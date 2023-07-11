export default class BlockEditor {
    constructor(wp, editorEl) {
        this.wp = wp;
        this.editorEl = editorEl;
    }

    editorSettings = {
        iso: {
            blocks: {
                disallowBlocks: [
                    'core/gallery',
                    // 'core/list',
                    // 'core/quote',
                    'core/shortcode',
                    'core/archives',
                    'core/audio',
                    // 'core/button',
                    'core/buttons',
                    'core/calendar',
                    'core/categories',
                    'core/code',
                    // 'core/columns',
                    // 'core/column',
                    'core/cover',
                    'core/embed',
                    'core/file',
                    'core/group',
                    'core/freeform',
                    // 'core/html',
                    'core/media-text',
                    'core/latest-comments',
                    'core/latest-posts',
                    'core/missing',
                    'core/more',
                    'core/nextpage',
                    'core/preformatted',
                    // 'core/pullquote',
                    'core/rss',
                    'core/search',
                    'core/separator',
                    'core/block',
                    'core/social-links',
                    'core/social-link',
                    'core/spacer',
                    'core/subhead',
                    // 'core/table',
                    'core/tag-cloud',
                    'core/text-columns',
                    'core/verse',
                    'core/video',
                    'core/page-list',
                    'core/page-list',
                    'core/navigation',
                    'core/site-logo',
                    'core/site-tagline',
                    'core/site-title',
                    'core/query',
                    'core/avatar',
                    'core/template-part',
                    'core/posts-list',
                    'core/post-title',
                    'core/post-excerpt',
                    'core/post-featured-image',
                    'core/post-content',
                    'core/post-author',
                    'core/post-date',
                    'core/post-terms',
                    'core/read-more',
                    'core/comments',
                    'core/post-comments-form',
                    'core/loginout',
                    'core/next-post', // doesnt seem to work, unsure what the code name is for this block...!!
                    'core/previous-post', // doesnt seem to work, unsure what the code name is for this block...!!
                    'core/comments-query-loop',
                    'core/term-description',
                    'core/archive-title', // doesnt seem to work, unsure what the code name is for this block...!!
                    'core/post-author-biography',
                    'core/navigation-link',
                    'core/post-navigation-link',
                    'core/query-title',
                ],
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
        // editor: {
            // mediaUpload: ({ filesList, onFileChange }) => {
            //     const uploadedFiles = Array.from(filesList).map(async (file) => {
            //         const formData = new FormData();
            //         formData.append('image', file);
            //
            //         return fetch('/api/v1/image/upload', {
            //             method: 'POST',
            //             body: formData,
            //         })
            //             .then((response) => response.json())
            //             .then((data) => data.image);
            //     });
            //     onFileChange(uploadedFiles);
            // },
        //     allowedMimeTypes: ['image/png'],
        //     hasPermissionsToManageWidgets: true,
        //     hasUploadPermissions: true,
        // },
    }

    /**
     * Function to register an individual block.
     *
     // * @param {Object} block The block to be registered.
     *
     */
    // registerBlock = (block) => {
    //     if (!block) {
    //         return;
    //     }
    //     const { settings, name } = block;
    //     this.wp.registerBlockType(`cardfin/${name}`, settings);
    // };
    //
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
