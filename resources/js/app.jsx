import React from 'react';
import ReactDOM from 'react-dom/client'
import IsolatedBlockEditor, { EditorLoaded, ToolbarSlot, CollaborativeEditing } from '@automattic/isolated-block-editor';
import editorSettings from '@constants/editor-settings';

import '@/bootstrap';
import '@sass/editor.scss'
import '@automattic/isolated-block-editor/build-browser/core.css';
import '@automattic/isolated-block-editor/build-browser/isolated-block-editor.css';

const saveContent = (html) => {
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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IsolatedBlockEditor
      settings={editorSettings}
      onSaveContent={(html) => saveContent(html)}
      onLoad={(parser, rawHandler) => onLoad('', parser, rawHandler)}
      onError={() => document.location.reload()}
    >
        <EditorLoaded
            onLoaded={() => { console.log('LOADED') }}
            onLoading={() => { console.log('LOADING') }}
        />
        <ToolbarSlot>
            <button onClick={() => alert('You did it, congratulations...')}>Click me</button>
        </ToolbarSlot>
      <CollaborativeEditing settings={{}} />
    </IsolatedBlockEditor>
  </React.StrictMode>,
)