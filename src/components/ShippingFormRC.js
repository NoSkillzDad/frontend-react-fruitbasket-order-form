import React from "react";
import FormRC from "./FormRC";
import './ShippingForm.css';


const ShippingFormRC = ({ children }) => {

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
                fieldType: {
                    type: "text",
                    max: "20",
                    min: "2"
                },
                name: "voornaam",
                validationProps: {
                    isRequired: true,
                    // isRequired: false,
                    requiredMsg: 'U moet een voornaam invoelen'
                }
            },
            {
                title: "Achternaam",
                fieldType: {
                    type: "text",
                    max: "20",
                    min: "2"
                },
                name: "achternaam",
                validationProps: {
                    isRequired: true,
                    // isRequired: false,
                    requiredMsg: 'U moet een achternaam invoelen'
                }
            },
            {
                title: "Email",
                fieldType: {
                    type: "email"
                },
                name: "email",
                validationProps: {
                    // isRequired: false,
                    isRequired: true,
                    requiredMsg: 'Wij hebben uw email adres nodig'
                }
            },
            {
                title: "Leeftijd",
                fieldType: {
                    type: "number",
                    min: "0",
                    max: "110"
                },
                name: "leeftijd",
                validationProps: {
                    isRequired: true
                    // isRequired: false
                }
            },
            {
                title: "Bezorgfrequentie",
                fieldType: {
                    type: "sectionTitle"
                },
                name: "bezorgfrequentielabel",
                validationProps: {
                    isRequired: false
                }
            },
            {
                title: "Bezorgfrequentie",
                fieldType: {
                    type: 'select',
                    options: [
                        {
                            value: 'eenmalig',
                            label: 'Eenmalig',
                        },
                        {
                            value: 'wekelijks',
                            label: 'Wekelijks'
                        },
                        {
                            value: 'tweewekelijks',
                            label: 'Tweewekelijks'
                        },
                        {
                            value: 'maandelijks',
                            label: 'Maandelijks'
                        },
                        {
                            value: 'kwartaal',
                            label: 'Elke drie maanden'
                        }
                    ],
                },
                name: "bezorgfrequentie",
                validationProps: {
                    isRequired: true,
                    // isRequired: false,
                    requiredMsg: 'U moet een bezorgfrequentie kiezen'
                }
            },
            {
                title: "Bezorgtijd",
                fieldType: {
                    type: 'radio',
                    options: [
                        {
                            value: 'overdag',
                            label: 'Overdag'
                        },
                        {
                            value: 'savonds',
                            label: '\'s Avonds'
                        }
                    ],
                },
                name: "bezorgtijd",
                validationProps: {
                    isRequired: true,
                    // isRequired: false,
                    requiredMsg: 'U moet een bezorgtijd kiezen'
                }
            },
            {
                title: "Opmerking",
                fieldType: {
                    type: "sectionTitle"
                },
                name: "opmerkinglabel",
                validationProps: {
                    isRequired: false
                }
            },
            {
                title: "Opmerking",
                fieldType: {
                    type: "textarea",
                    max: "250"
                },
                name: "opmerking",
                validationProps: {
                    isRequired: false
                }
            },
            {
                title: "Ik ga akkoord met de voorwaarden",
                fieldType: {
                    type: "checkbox"
                },
                name: "voorwaarden",
                validationProps: {
                    isRequired: true,
                    // isRequired: false,
                    requiredMsg: 'U moet met de toa akkoord zijn'
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
            useLabels = {false}
        >{children}</FormRC>
    );
}

export default ShippingFormRC;
