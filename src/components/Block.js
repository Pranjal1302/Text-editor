import React, { useState } from 'react'

export default function Block(props) {
    const caponclick = () => {
        let newtext = text.toUpperCase();
        setText(newtext);
        props.showalert('Text has been converted to uppercase', 'success');
    }
    const lowonclick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showalert('Text has been converted to lowercase', 'success');
    }
    const textOnchange = (event) => {
        setText(event.target.value);
    }
    const clearit = () => {
        setText("");
        props.showalert('Text has been cleared', 'warning');
    }
    const [text, setText] = useState('Enter text here');
    return (
        <>
        <div style={{color:props.mode===`dark`?`white`:`black`}} >
            <div className="container" style={{backgroundColor: props.mode === `dark` ? `light` : `dark`}}>
                <div className="md-3">
                    <h1>{props.heading}</h1>
                    <h1>&#128526;</h1>
                    <textarea className="form-control" value={text} onClick={clearit} onChange={textOnchange} id="box" rows="8"></textarea>
                </div>
                <button type="button" className="btn btn-primary my-2 mx-1" onClick={caponclick}>UpperCase</button>
                <button type="button" className="btn btn-primary my-2 mx-1" onClick={lowonclick}>LowerCase</button>
                <button type="button" className="btn btn-primary my-2 mx-1" onClick={clearit}>Clear</button>
                <div className="container">
                    <h2>Text Counter</h2>
                    <h6>{text.split(" ").length} word/s and {text.length} characters </h6>
                    <h2>Preview</h2>
                    <h6>{text}</h6>
                </div>
            </div>
            </div>
        </>
    )
}
