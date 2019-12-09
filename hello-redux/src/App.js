import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions'
import { signIn } from './actions/signin'

function App() {
    const count = useSelector(state => state.count);
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <div style={{ background: '#ddd' }}>>
                test {count}
                <button onClick={() => dispatch(increment(10))}>+10</button>
                <button onClick={() => dispatch(increment(5))}>+5</button>
                <button onClick={() => dispatch(decrement(1))}>-1</button>
            </div>

            <div style={{ background: '#ccc' }}>
                <p>isLogged:{isLogged ? 'true' : 'false'}</p>
                <button onClick={() => dispatch(signIn(isLogged))}>{isLogged ? 'logout' : 'login'}</button>
            </div>

        </div>
    );
}

export default App;
