import { FC, LabelHTMLAttributes, ReactNode } from "react";
import { IClassname } from "../interfaces";

interface IButton
extends IClassname, LabelHTMLAttributes<HTMLLabelElement> {
    children: ReactNode
} 


export const LabelFile: FC<IButton> = ({
    htmlFor,
    children,
    ...restProps
}) => {
    return (
        <label
            className="pointer-events-auto cursor-pointer bg-black text-white px-[25px] py-[10px] rounded-md hover:bg-slate-900 transition-all"
            htmlFor={htmlFor}
            {...restProps}
        >
            {children}
        </label>
    )
}