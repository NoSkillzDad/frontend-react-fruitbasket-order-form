// eslint-disable-next-line
import React, {useState} from 'react';
import './App.css';
import Fruit from "./components/Fruit";

const App = () => {

    const [isReset, setIsReset] = useState(false);
    // eslint-disable-next-line
    const [counter, setCounter] = useState(0);

    const handleToggleIsReset = () => setIsReset(!isReset);

    return (
        <>
            <h1>Fruitmand bezorgservice</h1>
            <Fruit
                id={'banana'}
                name={'Bananas'}
                isReset={isReset}
                counter={counter}
            />
            <Fruit
                id={'apple'}
                name={'Apples'}
                isReset={isReset}
                counter={counter}
            />
            <Fruit
                id={'kiwi\'s'}
                name={'Kiwi\'s'}
                isReset={isReset}
                counter={counter}
            />

            <button onClick={handleToggleIsReset}>Reset All</button>
        </>
    );
}

export default App;
