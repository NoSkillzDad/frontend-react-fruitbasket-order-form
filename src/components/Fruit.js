import React, {useState, useEffect} from "react";
import './Fruit.css';

const Fruit = ({isReset: parentIsReset = false, id, name, counter: parentCounter = 0,}) => {

    // eslint-disable-next-line
    const [isReset, setIsReset] = useState(parentIsReset);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        setCounter(parentCounter);
    }, [parentIsReset, parentCounter]);

    // const handleToggleIsReset = () => setIsReset(!isReset); //leaving it here for individual resets if wanted in the future

    const changeAmount = (operation) => {
      switch (operation) {
          case "add": return setCounter(counter + 1);
          case "sub": return (counter > 0) ? setCounter(counter - 1) : setCounter(0);
          default: return counter;
      }
    }

    return (
        <div id={id} className={'fruit'}>
            <h2>{name}</h2>
            <button
                className={"min-button"}
                type={"button"}
                onClick={() => {changeAmount("sub")}}
            >-
            </button>
            {counter}
            <button
                className={"plus-button"}
                type={"button"}
                onClick={() => changeAmount("add")}
            >+
            </button>
            {/*<button onClick={handleToggleIsReset}>Reset All</button>*/}
        </div>
    );
}

export default Fruit;