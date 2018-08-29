import { createStore } from 'redux';


function startRedux(){
    function todos(state = [], action) {
        switch (action.type) {
            case 'ADD_TODO':
                return state.concat([action.text])
            default:
                return state
        }
    }

    let store = createStore(todos, ['Use Redux'])
    store.subscribe(()=>{
        console.log(store.getState())
    })
    console.log("init state",store.getState());

    store.dispatch({
        type: 'ADD_TODO',
        text: 'Read the docs'
    })

// [ 'Use Redux', 'Read the docs' ]
}


export {startRedux};