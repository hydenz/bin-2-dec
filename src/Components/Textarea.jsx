import React, { useState } from "react";
import "./Textarea.css"
import { RiClipboardFill, RiCheckLine } from "react-icons/ri"

const Textarea = props => {
    const defaultIcon = <RiClipboardFill size="19px" />
    const copiedIcon = <RiCheckLine size="19px" />
    const [pText, setpText] = useState("Copy to clipboard")
    const [clipIcon, setclipIcon] = useState(defaultIcon)
    const copyToClipboard = () => {
        setpText("Copied!")
        setclipIcon(copiedIcon)
        props.copyToClipboard()
        setTimeout(() => {
            setpText("Copy to clipboard")
            setclipIcon(defaultIcon)
        }
            , 3000)
    }
    return (
        <div className="put">
            <h2>
                {props.title}
            </h2>
            <textarea value={props.value} onChange={props.onChange} readOnly={props.readOnly} />
            <p onClick={copyToClipboard}>{clipIcon}<span>{pText}</span></p>
        </div>
    );
}

export default Textarea;