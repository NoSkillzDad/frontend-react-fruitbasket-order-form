// import React, {useState, useEffect} from "react";
// import './Fruit.css';
// import {useForm } from "react-hook-form";
//
// const Fruit = ({isReset: parentIsReset = false, id, name, counter: parentCounter = 0,}) => {
//
//     // eslint-disable-next-line
//     const [isReset, setIsReset] = useState(parentIsReset);
//     const [counter, setCounter] = useState(0);
//
//     const {register, control, setValue, getValues} = useForm();
//
//     useEffect(() => {
//         setCounter(parentCounter);
//     }, [parentIsReset, parentCounter]);
//
//     // const handleToggleIsReset = () => setIsReset(!isReset); //leaving it here for individual resets if wanted in the future
//     //
//     // const changeAmount = (operation) => {
//     //     switch (operation) {
//     //         case "add":
//     //             return setCounter(counter + 1);
//     //         case "sub":
//     //             return (counter > 0) ? setCounter(counter - 1) : setCounter(0);
//     //         default:
//     //             return counter;
//     //     }
//     // }
//
//
//
//     console.log(setValue(id,100));
//     return (
//         <div className={'fruit'}>
//             <h2>{name}</h2>
//             <button
//                 className={"min-button"}
//                 type={"button"}
//                 onClick={() => adjustCounter("sub")}
//             >-
//             </button>
//             {/*<input type="text" id={id} name={id} value={counter} readOnly/>*/}
//             <input type="text" id={id} name={id}/>
//             <button
//                 className={"plus-button"}
//                 type={"button"}
//                 onClick={() => adjustCounter("add")}
//                 // onClick={() => changeAmount("add")}
//             >+
//             </button>
//             {/*<button onClick={handleToggleIsReset}>Reset All</button>*/}
//         </div>
//     );
// }
//
// export default Fruit;