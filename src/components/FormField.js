/* eslint-disable */
import React, {useState} from "react";
// import {useForm} from "react-hook-form";

const FormField = ({type, label, id, minNum, maxNum, required, minLength, maxLength}) => {

    const [fieldValue, setFieldValue] = useState();

    // const {register, formState: {errors}} = useForm();

    return (
        <>
            <label htmlFor={id}>{label}<input
                id={id}
                type={type}
                // placeholder={"Enter your name here"}
                value={fieldValue}
                onChange={(e) => setFieldValue(e.target.value)}
            />
                {required ?
                    isNaN(fieldValue) ? ((fieldValue.length > maxLength || fieldValue.length < minLength) &&
                            <p className={"error-message"}>Input must be between {minLength} and {maxLength} characters</p>)
                        : (fieldValue > maxNum || fieldValue < minNum) &&
                        <p className={"error-message"}>Input must be a number between {minNum} and {maxNum}</p>
                    : <></>
                }
            </label>


            {/*this is using react-hook-form*/}
            {/*<label htmlFor={id}>*/}
            {/*    {label}*/}
            {/*    <input type={type}*/}
            {/*           {...register(id, {*/}
            {/*               required: `${label} kan niet leef gelaten worden`*/}
            {/*           })}*/}
            {/*           id={id}*/}
            {/*    />*/}
            {/*</label>*/}
        </>
    )
}

export default FormField;