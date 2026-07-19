import React from "react";
import ReactDOM from "react-dom/client";



// const parent = React.createElement('div', {id: 'parent', key: 'child-7'},
//     [React.createElement('div', {id: 'child1', key: 'child-1'}, 
//         [React.createElement('h1', {id: 'h1', className: 'h1', key: 'child-3'}, 'Hello World'),
//          React.createElement('h2', {id: 'h2', className: 'h1', key: 'child-4'}, 'Hello World from H2 tag')   
//         ]
//     ),
//     React.createElement('div', {id: 'child2', key: 'child-2'}, 
//         [React.createElement('h1', {id: 'h1-child2', className: 'h1', key: 'child-5'}, 'Hello World from child 2'),
//          React.createElement('h2', {id: 'h2-child2', key: 'child-6'}, 'Hello World ABH')   
//         ]
//     )
// ]
//  )
//  const root = ReactDOM.createRoot(document.getElementById('root'));
//  root.render(parent);

const jsxHeading = <h1>Hello from JSX</h1>
const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(jsxHeading);

// React Functional Comp
const title = (<h2>hello from Title</h2>)

const HeadingComponent = () => (  
    <div>  
    {title}
     <h1>hello HeadingComponent</h1>
     </div>)

root.render(<HeadingComponent />);