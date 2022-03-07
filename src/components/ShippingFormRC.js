import React from "react";
import FormRC from "./FormRC";

const ShippingFormRC = () => {

    const onSubmit = async (data, e) => {  //
        e.target.reset();
        console.log(JSON.stringify(data));
        // alert(JSON.stringify(data));
    };

    // const validate = (watchValues, {errors, setError, clearErrors}) => {
    const validate = (watchValues, errorMethods) => {
        let {errors, setError, clearErrors} = errorMethods;

        // if (watchValues['leeftijd'] < 15) {
        //     if (!errors['leeftijd']) {
        //         setError('leeftijd', {
        //             type: 'manual',
        //             message: 'Jij moet oudere te bestellen'
        //         })
        //     }
        // }
        //
        // if (watchValues['voornaam'] === 'Admin') {
        //     if (!errors['voornaam']) {
        //         setError('voornaam', {
        //             type: 'manual',
        //             message: 'U kan niet Admin gebruiken als voornaam'
        //         })
        //     }
        // }

        if (watchValues[0] < 15) {
            if (!errors['leeftijd']) {
                setError('leeftijd', {
                    type: 'manual',
                    message: 'Jij moet oudere te bestellen'
                });
            }
        } else {
            if (errors['leeftijd'] && errors['leeftijd']['type'] === 'manual') {
                clearErrors('leeftijd');
            }
        }

        if (watchValues[1] === 'Admin') {
            if (!errors['voornaam']) {
                setError('voornaam', {
                    type: 'manual',
                    message: 'U kan niet Admin gebruiken als voornaam'
                });
            }
        } else {
            if (errors['voornam'] && errors['voornam']['type'] === 'manual') {
                clearErrors('voornaam');
            }
        }

    }

    const template = {
        title: "Klantgegevens",
        fields: [
            {
                title: "Voornaam",
                type: "text",
                name: "voornaam",
                validationProps: {
                    isRequired: true,
                    requiredMsg: 'U moet een voornaam invoelen'
                }
            },
            {
                title: "Achternaam",
                type: "text",
                name: "achternaam",
                validationProps: {
                    isRequired: true,
                    requiredMsg: 'U moet een achternaam invoelen'
                }
            },
            {
                title: "Email",
                type: "email",
                name: "email",
                validationProps: {
                    isRequired: true,
                    requiredMsg: 'Wij hebben uw email adres nodig'
                }
            },
            {
                title: "Leeftijd",
                type: "number",
                name: "leeftijd",
                validationProps: {
                    isRequired: false
                }
            }
        ]
    }

    return (
        <FormRC
            template={template}
            // watchFields={["leeftijd", "voornaam"]}
            validate={validate}
            onSubmit={onSubmit}
        />
    );
}

export default ShippingFormRC;
