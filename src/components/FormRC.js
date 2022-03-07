import React, {useEffect} from "react";
import {useForm} from "react-hook-form";

const FormRC = ({template, onSubmit, watchFields, validate}) => {

    const {register, handleSubmit, formState: { errors, isSubmitSuccessful }, reset, watch, setError, clearErrors, getValues, setValue } = useForm();
    // const {errors, isSubmitted} = formState;

    const {title, fields} = template;

    // const watchValues = watch(watchFields);
    // const watchValues = watch(['leeftijd', 'voornaam']);
    // console.log(watchValues);

    // validate(watchValues, { errors, setError, clearErrors } );

    // const onSubmit = async (data) => {  //
    //     console.log(JSON.stringify(data));
    //     // alert(JSON.stringify(data));
    // };
    // console.log(errors);

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    // }, [formState, reset, isSubmitted]);
    }, [reset, isSubmitSuccessful]);

    const renderFields = (fields) => {
        return fields.map(field => {
            const {title, type, name, validationProps: {isRequired, requiredMsg} } = field;

            switch (type) {
                case 'text':
                    return (
                        <div key={name}>
                            {/*<label htmlFor={name}>{title}</label>*/}
                            <input type="text" id={name} name={name} placeholder={title}  {...register(name, {
                                required: isRequired
                            })} />
                            {errors[name] && <span className={"error-message"} >{requiredMsg}</span>}
                        </div>
                    )
                case 'email':
                    return (
                        <div key={name}>
                            {/*<label htmlFor={name}>{title}</label>*/}
                            <input type="email" id={name} name={name} placeholder={title}  {...register(name, {
                                required: isRequired
                            })} />
                            {errors[name] && <span className={"error-message"} >{requiredMsg}</span>}
                        </div>
                    )
                case 'number':
                    return (
                        <div key={name}>
                            {/*<label htmlFor={name}>{title}</label>*/}
                            <input type="number" id={name} name={name} placeholder={title}  {...register(name, {
                                required: isRequired
                            })} />
                            {errors[name] && <span className={"error-message"} >{requiredMsg}</span>}
                        </div>
                    )
                default:
                    return (
                        <>
                            <span className={"error-message"}>Invalid Field</span>
                        </>
                    )
            }


        })
    }


    return (
        <>
            <form className={"client-form"} onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <legend>{title}</legend>
                    {renderFields(fields)}

                    <button className={"submit-button"} type="submit">
                        Versturen
                    </button>
                    <button className={"reset-button"} type="button" onClick={() => reset()}>
                        Reset
                    </button>
                </fieldset>
            </form>

        </>
    );
}

export default FormRC;