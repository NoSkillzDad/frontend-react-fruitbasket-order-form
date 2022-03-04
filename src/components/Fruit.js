import React, {useState, useEffect} from "react";

const Fruit = ({isReset: parentIsReset = false, id, name, counter: parentCounter = 0,}) => {

    // eslint-disable-next-line
    const [isReset, setIsReset] = useState(parentIsReset);
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        setCounter(parentCounter);
    }, [parentIsReset, parentCounter]);

    // const handleToggleIsReset = () => setIsReset(!isReset);

    return (
        <div id={id} className={'fruit'}>
            <h2>{name}</h2>
            <button
                className={"min-button"}
                type={"button"}
                onClick={() => {
                    (counter > 0) ? setCounter(counter - 1) : setCounter(0);
                }}
            >-
            </button>
            {counter}
            <button
                className={"plus-button"}
                type={"button"}
                onClick={() => (setCounter(counter + 1))}
            >+
            </button>
            {/*<button onClick={handleToggleIsReset}>Reset All</button>*/}
        </div>
    );
}

export default Fruit;