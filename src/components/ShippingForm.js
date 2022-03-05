/* eslint-disable */
import React, {useCallback, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import "./ShippingForm.css";

export default function ShippingForm() {
    // const {register, handleSubmit, formState: {errors, isSubmitSuccessful}, reset} = useForm({defaultValues: {  }});
    const {register, handleSubmit, formState, reset} = useForm();

    const  {errors, isSubmitted} = formState;

    const onSubmit = data => {
        console.log(data);
        // console.log(isSubmitted);
    };
    console.log(errors);

    useEffect(() => {
        if (isSubmitted) {
            reset();
        }
    }, [formState, reset]);

    return (
        <form className={"client-form"} onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Voornaam" {...register("Voornaam", {required: true, maxLength: 15})} />
            <input type="text" placeholder="Achternaam" {...register("Achternaam", {required: true, maxLength: 20})} />
            <input type="number" placeholder="Leeftijd" {...register("Leeftijd", {
                required: true,
                max: 100,
                min: 15
            })} />
            <input type="text" placeholder="Postcode" {...register("Postcode", {required: true, maxLength: 8})} />
            <p>Bezorgfrequentie</p>
            <select {...register("Frequency", {required: true})}>
                <option value="Wekelijks">Wekelijks</option>
                <option value=" Tweewekelijks"> Tweewekelijks</option>
                <option value=" Maandelijks"> Maandelijks</option>
                <option value=" Elke drie maanden"> Elke drie maanden</option>
            </select>
            <div className={"dual-radio-buttons"}>
                <label htmlFor={"overdag"}>
                    <input {...register("Bezorgtijd", {required: true})} type="radio" value="Overdag" id={"overdag"}/>
                    Overdag
                </label>
                <label htmlFor={"savonds"}>
                    <input {...register("Bezorgtijd", {required: true})} type="radio" value=" 's Avonds"
                           id={"savonds"}/>
                    's Avonds
                </label>
            </div>
            <textarea {...register("Opmerking", {maxLength: 250})} rows={4} cols={33}/>
            <label id={"label-ak-toa"} htmlFor={"akkoord-toa"}>
            <input type="checkbox" placeholder="akkoord-toa" {...register("akkoord-toa", {required: true})} id={"akkoord-toa"}/>
                Ik gaa akkoord met de voorwaarden
            </label>
            <button className={"submit-button"} type="submit">
                Versturen
            </button>
            <button className={"reset-button"} type="button" onClick={() => reset()}>
                Reset
            </button>
        </form>
    );
}