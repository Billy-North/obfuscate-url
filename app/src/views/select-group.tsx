import React from "react";
import './views.css';

interface SelectGroupProps {
    title: string,
    options: string[],
    defaultOption: string,
    value: string,
    setValueCallBack: Function
}

export default function SelectGroup({ title, options, defaultOption, value, setValueCallBack }: SelectGroupProps) {

    const  handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const inputValue = e.target.value
        setValueCallBack(inputValue)
    }

    return (
        <div>
            <span>{title}</span>
            <select  value={value} onChange={e => handleOnChange(e)}>
                <option value={defaultOption}>
                    {defaultOption}
                </option>
                {options.map(optionValue => (
                    <option key={optionValue}
                        value={optionValue}>
                        {optionValue}
                    </option>
                ))}
            </select>
        </div>
    );
}


