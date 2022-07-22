import './App.css'

import laptop from './images/laptop.png'

import TypeAnimation from 'react-type-animation'

function App() {
    return (
        <div className="App">
            <div className='TopBar'>Nicol Visser</div>
            <img src={laptop} className="Laptop" alt="logo" />
            <div className='Screen'>
                <TypeAnimation
                    cursor={false}
                    sequence={['working on this site...', 1000, '']}
                    repeat={Infinity}
                />
            </div>
        </div>
    );
}

export default App;
