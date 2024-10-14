import { FC, InputHTMLAttributes } from "react"

interface IFileInput 
extends InputHTMLAttributes<HTMLInputElement> {
    ref?: HTMLInputElement | undefined
}

export const FileInput: FC<IFileInput> = ({
    id,
    onChange,
    ...restProps
}) => {

    return (
        <input
            type='file' 
            accept=".xlsx"
            id={id}
            onInputCapture={onChange}
            {...restProps}
            className="opacity-0"
        />
    )
}