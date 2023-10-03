// import React from 'react';
// import ReactDOM from 'react-dom/client'
import { StrictMode, createRoot } from '@wordpress/element';
import Editor from '@components/react/editor';

/**
 * Not sure the best way of hooking into Laravel blade with React yet
 * because I need to see more use-cases of React interacting with blade
 * 
* This effectively is the same as @wordpress/element.render()
 */
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <Editor />
//   </React.StrictMode>,
// );

/**
 * Wordpress method is identical to React on what it does under the hood.
 * The benefit of using @wordpress/element is feeling confident on React
 * version compatibility
 */
createRoot(document.getElementById('root'))
  .render(
    <StrictMode>
      <Editor />
    </StrictMode>
  );