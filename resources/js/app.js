import './bootstrap';
// import React from 'react';
// import ReactDOM from 'react-dom';
// import BlockEditor from './components/BlockEditor';
//
// const blockEditor = new BlockEditor(wp, document.querySelector('#editor'));
// blockEditor.init();

// import IsolatedBlockEditor, {
//     EditorLoaded,
//     DocumentSection,
//     ToolbarSlot, initializeEditor,
//     // CollaborativeEditing
// } from '@automattic/isolated-block-editor';

// import '@automattic/isolated-block-editor/build-browser/isolated-block-editor.css';

// const settings = {
//     //
// }

// const root = ReactDOM.createRoot( document.querySelector( '#editor' ) );

// root.render(
//     <IsolatedBlockEditor
//         settings={ settings }
//         onSaveContent={ ( html ) => saveContent( html ) }
//         onLoad={ ( parse ) => loadInitialContent( parse ) }
//         onError={ () => document.location.reload() }
//     >
//     </IsolatedBlockEditor>
// );

// initializeEditor();

// function attachEditor( textarea, userSettings = {} ) {
//     // Check it's a textarea
//     if ( textarea.type.toLowerCase() !== 'textarea' ) {
//         return;
//     }
//
//     // Create a node after the textarea
//     const editor = document.createElement( 'div' );
//     editor.classList.add( 'editor' );
//
//     // Insert after the textarea, and hide it
//     // @ts-ignore
//     textarea.parentNode.insertBefore( editor, textarea.nextSibling );
//     textarea.style.display = 'none';
//
//     // Render the editor
//     editor.render(
//         <IsolatedBlockEditor
//             settings={ { ...settings, ...userSettings } }
//             onLoad={ ( parser, rawHandler ) => onLoad( textarea.value, parser, rawHandler ) }
//             onSaveContent={ ( content ) => saveBlocks( content, textarea ) }
//             onError={ () => document.location.reload() }
//         ></IsolatedBlockEditor>
//     );
// }
//
// attachEditor(document.querySelector( '#editor' ), settings);
