import React from "react";
import './views.css';

interface InputFieldProps {
    title?: string,
    inputType: "number" | "text" | "password",
    value: string | number,
    placeholder: string | null,
    setValueCallBack: Function
}

export default function InputField({ title, inputType, value, setValueCallBack, placeholder }: InputFieldProps) {

    function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
        const inputValue = e.target.value
        if (inputType === "number") {
            if (Number(inputValue) && Number(inputValue) >= 0) {
                setValueCallBack(inputValue)
            } else {
                setValueCallBack("")
            }
        } else if (inputType === "text" || inputType === "password") {
            setValueCallBack(String(inputValue))
        } else {
            alert("Invalid value...");
        }
    }

    return (
        <div>
            {title && <span>{title}</span> }
            <input 
                type={inputType === "password" ? "password" : "text"}
                onChange={e => handleOnChange(e)}
                value={value}
                placeholder={placeholder || ""}
            />
        </div>
    );
}


