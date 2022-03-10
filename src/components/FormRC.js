import React, {useEffect, useState} from "react";
import {useForm} from "react-hook-form";

const FormRC = ({template, template2, onSubmit, watchFields, validate, useLabels, children}) => {

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
    } = useForm({
        defaultValues: {
            aardbeien: 0,
            appels: 0,
            kiwis: 0,
            bananas: 0
        }
    });

    const {title, fields} = template;
    const {title: title2, fields: fields2} = template2;

    const [isReset, setIsReset] = useState(false);
    // eslint-disable-next-line
    const [counter, setCounter] = useState(0);

    const handleToggleIsReset = () => setIsReset(!isReset);

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
                case 'fruit': {

                    const adjustCounter = (operation) => {
                        // !getValues(id).parseInt ? getValues(id).parseInt() : 0;
                        switch (operation) {
                            case "add":
                                return setValue(name, getValues(name).parseInt + 1);
                            case "sub":
                                return (getValues(name) > 0) ? setValue(name, getValues(name) - 1) : 0
                            default:
                                return getValues(name)
                        }
                    }

                    return (
                        <div key={name} className={'fruit'}>
                            <h2>{title}</h2>
                            <button
                                className={"min-button"}
                                type={"button"}
                                onClick={() => adjustCounter("sub")}
                            >-
                            </button>
                            {/*<input type="text" id={id} name={id} value={counter} readOnly/>*/}
                            <input type="number" id={name} name={name} {...register(name, {
                                required: isRequired
                            })}
                            />
                            <button
                                className={"plus-button"}
                                type={"button"}
                                onClick={() => adjustCounter("add")}
                                // onClick={() => changeAmount("add")}
                            >+
                            </button>
                        </div>
                    )
                }
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
                    <legend>{title2}</legend>
                    {renderFields(fields2, useLabels)}
                    <div className={"button-wrapper"}>
                        {/*<button className={"reset-button"} type={"button"} onClick={handleToggleIsReset}>Reset All</button>*/}
                        <button className={"reset-button"} type="button" onClick={() => reset({aardbeien: 0, bananas: 0, kiwis: 0, appels: 0})}>
                            Reset All
                        </button>
                    </div>
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