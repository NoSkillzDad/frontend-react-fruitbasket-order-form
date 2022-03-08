import React, {useEffect} from "react";
import {useForm} from "react-hook-form";

const FormRC = ({template, onSubmit, watchFields, validate, useLabels, children}) => {

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitSuccessful, isValid},
        reset,
        watch,
        setError,
        clearErrors,
        getValues,
        setValue
    } = useForm();
    // const {errors, isSubmitted} = formState;

    const {title, fields} = template;

    // const watchValues = watch(watchFields);
    // const watchValues = watch(['leeftijd', 'voornaam']);
    // console.log(watchValues);

    // validate(watchValues, { errors, setError, clearErrors } );

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
        // }, [formState, reset, isSubmitted]);
    }, [reset, isSubmitSuccessful]);

    const renderOptions = (options, type, name, isRequired) => {
        return options.map(option => {
                const {value, label} = option;
                switch (type) {
                    case 'select':
                        return <option value={value}>{label}</option>
                    case 'radio':
                        return (<>
                                <input type="radio" id={name} name={name} {...register(name, {
                                    required: isRequired
                                })} value={value}/>
                                <label htmlFor={name}>{label}</label>
                            </>
                        )
                    default:
                        return (
                            <div key="Error">
                                <span className={"error-message"}>Invalid Field</span>
                            </div>
                        )
                }
            }
        )
    }

    const renderFields = (fields, useLabels) => {
        return fields.map(field => {
            const {
                title,
                name,
                fieldType: {type, max, min, options},
                validationProps: {isRequired, requiredMsg}
            } = field;

            switch (type) {
                case 'text':
                    return (
                        <div key={name}>
                            {useLabels && <label htmlFor={name}>{title}</label>}
                            <input type="text" id={name} name={name} maxLength={max} minLength={min}
                                   placeholder={title} {...register(name, {
                                required: isRequired
                            })} />
                            {errors[name] && <span className={"error-message"}>{requiredMsg}</span>}
                        </div>
                    )
                case 'email':
                    return (
                        <div key={name}>
                            {useLabels && <label htmlFor={name}>{title}</label>}
                            <input type="email" id={name} name={name} placeholder={title}  {...register(name, {
                                required: isRequired
                            })} />
                            {errors[name] && <span className={"error-message"}>{requiredMsg}</span>}
                        </div>
                    )
                case 'number':
                    return (
                        <div key={name}>
                            {useLabels && <label htmlFor={name}>{title}</label>}
                            <input type="number" id={name} name={name} placeholder={title} min={min}
                                   max={max}  {...register(name, {
                                required: isRequired
                            })} />
                            {errors[name] && <span className={"error-message"}>{requiredMsg}</span>}
                        </div>
                    )
                case 'select':
                    return (
                        <div key={name}>
                            {/*{useLabels && <label htmlFor={name}>{title}</label>}*/}
                            <select id={name} name={name} placeholder={title} min={min} defaultValue={options[0].value}
                                    {...register(name, {
                                        required: isRequired
                                    })}>
                                {renderOptions(options, type, name)}
                            </select>
                            {errors[name] && <span className={"error-message"}>{requiredMsg}</span>}
                        </div>
                    )
                case 'radio':
                    return (
                        <div key={name}>
                            {renderOptions(options, type, name, isRequired)}
                        </div>
                    )
                case 'textarea':
                    return (
                        <div key={name}>
                            {/*<label htmlFor={name}>{title}</label>*/}
                            <textarea id={name} name={name} maxLength={max}
                                      placeholder={title} {...register(name, {
                                required: isRequired
                            })} />
                            {errors[name] && <span className={"error-message"}>{requiredMsg}</span>}
                        </div>
                    )
                case 'checkbox':
                    return (
                        <div key={name}>
                            <label htmlFor={name}>
                                <input type="checkbox" id={name} name={name} {...register(name, {
                                    required: isRequired
                                })} />
                                {title}
                            </label>
                            {errors[name] && <span className={"error-message"}>{requiredMsg}</span>}
                        </div>
                    )
                case 'sectionTitle':
                    return (
                        <div key={name} className={"sectionTitle"}>{title}</div>
                    )
                default:
                    return (
                        <div key="Error">
                            <span className={"error-message"}>Invalid Field</span>
                        </div>
                    )
            }
        })
    }


    return (
        <>
            <form className={"client-form"} onSubmit={handleSubmit(onSubmit)}>
                <fieldset>
                    <legend>Fruits</legend>
                    {children}
                </fieldset>
                <fieldset>
                    <legend>{title}</legend>
                    {renderFields(fields, useLabels)}

                    {/*<button className={"submit-button"} type="submit" disabled={!isValid}>*/}

                    <div className={"button-wrapper"}>
                        <button className={"submit-button"} type="submit">
                            Versturen
                        </button>
                        <button className={"reset-button"} type="button" onClick={() => reset()}>
                            Reset
                        </button>
                    </div>
                </fieldset>
            </form>

        </>
    );
}

export default FormRC;