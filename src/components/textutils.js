import React, { useState } from 'react';
import './textutils.css';

export default function TextUtils(props){
    const convertUpper=()=>{
        let newtext=text;
        setText(newtext.toUpperCase());
                props.showAlert("Converted to uppercase!");

    }
    const convertLower=()=>{
        let newtext=text;
        setText(newtext.toLowerCase());
        props.showAlert("Converted to lowerccase!");

    }
    const copyClipboard=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("copied successfully!");

    }
    const removeSpace=()=>{
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "));
        props.showAlert("extra spaces removed!");

    }
    const clearText=()=>{
        setText('');
        props.showAlert("text cleared!");

    }
    const [text,setText]=useState('');
    return (

        <>
        <div className="container">
            <h1>TextUtils</h1>
            <div className="mb-3">
                <textarea className="form-control tex" id="myBox" rows="8" value={text} onChange={(e)=>{setText(e.target.value)}}></textarea>
            </div>
        </div>
        <div className="container">
            <button className="btn mx-1 my-1 btn-success"  onClick={convertUpper} disabled={text.length===0}>Convert to Uppercase</button>
            <button className="btn mx-1 my-1 btn-success" onClick={convertLower} disabled={text.length===0}>Convert to Lowercase</button>
            <button className="btn mx-1 my-1 btn-success" onClick={copyClipboard} disabled={text.length===0}>Copy to clipboard</button>
            <button className="btn mx-1 my-1 btn-success" onClick={removeSpace} disabled={text.length===0}>Remove Extra Space</button>
            <button className="btn mx-1 my-1 btn-success" onClick={clearText} disabled={text.length===0}>Clear Text</button>
        </div>

        <div className="container tex2 my-3">
            <h2 className="my-2">About your text</h2>
            <p><strong>Words : </strong> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}  </p>
            <p><strong>Characters : </strong> {text.length} </p>
            <p><strong>Read time : </strong> {0.008 *  text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}