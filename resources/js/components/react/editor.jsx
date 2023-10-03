import { useEffect } from '@wordpress/element';
import IsolatedBlockEditor, { EditorLoaded, ToolbarSlot, CollaborativeEditing } from '@automattic/isolated-block-editor';
import { editorSettings } from '@constants/editor-settings';
import { registerBlockType } from '@wordpress/blocks';
import * as blocks from '@blocks';

import '@sass/editor.scss'
import '@automattic/isolated-block-editor/build-browser/core.css';
import '@automattic/isolated-block-editor/build-browser/isolated-block-editor.css';

export default function Editor() {
    function saveContent(html) {
        console.log("🚀 ~ file: App.jsx:12 ~ saveContent ~ html:", html)
    }
    
    function onLoad(content, parser, rawHandler) {
        // Does the content contain blocks?
        if ( content.indexOf( '<!--' ) !== -1 ) {
            // Parse the blocks
            return parser( content );
        }
        
        // Raw HTML - do our best
        return rawHandler( { HTML: content } );
    }
    
    useEffect(() => {
        // Register blocks from custom blocks module
        Object.keys(blocks)
            .forEach((key) => {
                const { name, settings } = blocks[key];
                registerBlockType(`cardinal-financial/${name}`, settings)
            });
    }, []);

    return (
        <IsolatedBlockEditor
            settings={editorSettings}
            onSaveContent={(html) => saveContent(html)}
            onLoad={(parser, rawHandler) => onLoad('', parser, rawHandler)}
            onError={() => document.location.reload()}
        >
        </IsolatedBlockEditor>
    );
}