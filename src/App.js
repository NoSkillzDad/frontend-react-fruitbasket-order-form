/* eslint-disable */
import React, {useState} from 'react';
// import {useForm} from "react-hook-form";
import './App.css';
import Fruit from "./components/Fruit";
import ShippingFormRC from "./components/ShippingFormRC";

const App = () => {

    // const [nameValue, setNameValue] = React.useState('');
    // const [lastnameValue, setLastnameValue] = React.useState('');
    // const [ageValue, setAgeValue] = React.useState({});
    // const [postcodeValue, setPostcodeValue] = React.useState('');

    // const {handleSubmit, formState: {errors}} = useForm();

    const [isReset, setIsReset] = useState(false);
    // eslint-disable-next-line
    const [counter, setCounter] = useState(0);

    const handleToggleIsReset = () => setIsReset(!isReset);

    const onFormSubmit = (data) => {
        console.log(data);
    }

    return (
        <>
            <div className={"header"}>
                <h1>Fruitmand Bezorgservice</h1>
                <h3>Je mag toch niet naar buiten</h3>
                {/*<img src={fruitLogo} alt="fruit bezorg" width={"100%"}/>*/}
            </div>
            <div className={"my-main"}>
                {/*<div className={"fruit-container"}>*/}
                {/*    <Fruit*/}
                {/*        id={'aardbeien'}*/}
                {/*        name={'🍓 Aarbeien'}*/}
                {/*        isReset={isReset}*/}
                {/*        counter={counter}*/}
                {/*    />*/}
                {/*    <Fruit*/}
                {/*        id={'banana'}*/}
                {/*        name={'🍌 Bananas'}*/}
                {/*        isReset={isReset}*/}
                {/*        counter={counter}*/}
                {/*    />*/}
                {/*    <Fruit*/}
                {/*        id={'apple'}*/}
                {/*        name={'🍏 Apples'}*/}
                {/*        isReset={isReset}*/}
                {/*        counter={counter}*/}
                {/*    />*/}
                {/*    <Fruit*/}
                {/*        id={'kiwi\'s'}*/}
                {/*        name={'🥝 Kiwi\'s'}*/}
                {/*        isReset={isReset}*/}
                {/*        counter={counter}*/}
                {/*    />*/}
                {/*    <button className={"reset-button"} onClick={handleToggleIsReset}>Reset All</button>*/}
                {/*</div>*/}

                <ShippingFormRC>
                        <Fruit
                            id={'aardbeien'}
                            name={'🍓 Aarbeien'}
                            isReset={isReset}
                            counter={counter}
                        />
                        <Fruit
                            id={'banana'}
                            name={'🍌 Bananas'}
                            isReset={isReset}
                            counter={counter}
                        />
                        <Fruit
                            id={'apple'}
                            name={'🍏 Apples'}
                            isReset={isReset}
                            counter={counter}
                        />
                        <Fruit
                            id={'kiwi\'s'}
                            name={'🥝 Kiwi\'s'}
                            isReset={isReset}
                            counter={counter}
                        />

                    <div className={"button-wrapper"}>
                        <button className={"reset-button"} type={"button"} onClick={handleToggleIsReset}>Reset All</button>
                    </div>
                </ShippingFormRC>


            </div>
        </>
    );
}

export default App;
