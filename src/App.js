import React from 'react';
import './App.css';
import ShippingFormRC from "./components/ShippingFormRC";

const App = () => {

    return (
        <>
            <div className={"header"}>
                <h1>Fruitmand Bezorgservice</h1>
                <h3>Je mag toch niet naar buiten</h3>
            </div>
            <div className={"my-main"}>
                <ShippingFormRC />
            </div>
        </>
    );
}

export default App;
