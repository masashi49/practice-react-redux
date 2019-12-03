import React from 'react';
import {useSelector} from 'react-redux';

function App() {
    const count = useSelector(state => state.count);
    const isLogged = useSelector(state => state.isLogged);

    return (
        <div className="App">
            test {count}
            {isLogged ? 'login!!!' : 'no-member'}
        </div>
    );
}

export default App;
