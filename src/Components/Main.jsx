import React, { useState, useEffect } from "react";
import "./Main.css";
import Textarea from "./Textarea";
import { RiArrowLeftRightLine, RiArrowRightLine } from "react-icons/ri";
import bigInt from "big-integer";
/* Since JavaScript max safe integer is 2^53 - 1, I used big-integer library to ensure that
   it can convert numbers bigger than that */

const Main = () => {
    const [base, setBase] = useState("binary")
    const [inputValue, setInputValue] = useState("")
    const [outputValue, setOutputValue] = useState("")
    const cvtbin2dec = input => {
        const numbers = input.split(" ").filter(inputs => inputs !== "")
        let output = ""
        numbers.forEach(number => {
            output += `${bigInt(number, 2)} `
        })
        return output.trim()
    }
    const cvtdec2bin = input => {
        const numbers = input.split(" ").filter(inputs => inputs !== "")
        let output = ""
        numbers.forEach(number => {
            output += `${bigInt(number).toString(2)} `
        })
        return output.trim()
    }
    const baseTypes = {
        binary: {
            title: "Binary Base",
            regExp: /^[0-1 ]*$/,
        },
        decimal: {
            title: "Decimal Base",
            regExp: /^[0-9 ]*$/
        }
    }
    
    useEffect(() => {
        if (inputValue)
            setOutputValue(base === "binary" ? cvtbin2dec(inputValue) : cvtdec2bin(inputValue))
        else
            setOutputValue("")
    }, [inputValue, base])

    const onChange = e => {
        const userInput = e.target.value
        if (baseTypes[base].regExp.test(userInput))
            setInputValue(userInput)
    }

    const changeBase = e => {
        setInputValue(outputValue)
        setBase(oldBase => oldBase === "binary" ? "decimal" : "binary")
    }

    return (
        <div className="converter">
            <Textarea value={inputValue} onChange={onChange} title={baseTypes[base].title}
                copyToClipboard={() => navigator.clipboard.writeText(inputValue)} />
            <div className="controls">
                <RiArrowLeftRightLine size="40px" style={{ marginTop: "2px" }}
                    onClick={changeBase} />
                <RiArrowRightLine size="40px" />
            </div>
            <Textarea value={outputValue} readOnly={true}
                copyToClipboard={() => navigator.clipboard.writeText(outputValue)}
                title={base === "binary" ? "Decimal Base" : "Binary Base"} />
        </div>
    );
}

export default Main;