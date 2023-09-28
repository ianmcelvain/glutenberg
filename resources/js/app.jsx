import React from 'react';
import ReactDOM from 'react-dom/client'
import IsolatedBlockEditor, { EditorLoaded, ToolbarSlot, CollaborativeEditing } from '@automattic/isolated-block-editor';

import './bootstrap';
import '../sass/editor.scss';
import '@automattic/isolated-block-editor/build-browser/core.css';
import '@automattic/isolated-block-editor/build-browser/isolated-block-editor.css';

const settings = {
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

const collabSettings = {};

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
      settings={settings}
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
        <CollaborativeEditing settings={collabSettings} />
    </IsolatedBlockEditor>
  </React.StrictMode>,
)