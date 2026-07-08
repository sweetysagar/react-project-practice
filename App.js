const parent = React.createElement('div', {id: 'parent'},
    [React.createElement('div', {id: 'child1'}, 
        [React.createElement('h1', {id: 'h1', className: 'h1'}, 'Hello World'),
         React.createElement('h2', {id: 'h2', className: 'h1'}, 'Hello World from H2 tag')   
        ]
    ),
    React.createElement('div', {id: 'child2'}, 
        [React.createElement('h1', {id: 'h1-child2', className: 'h1'}, 'Hello World from child 2'),
         React.createElement('h2', {id: 'h2-child2', className: 'h1'}, 'Hello World from H2 tag')   
        ]
    )
]
 )
 const root = ReactDOM.createRoot(document.getElementById('root'));
 root.render(parent);