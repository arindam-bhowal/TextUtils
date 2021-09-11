import React, { useState } from 'react'

export default function Textform(props) {
    function handleOnChange(e) {
        // console.log(e.target.value);
        setText(e.target.value);
    }
    function handleUpClick() {
        // console.log("Button is clicked", text);
        setText(text.toUpperCase());
        props.showAlert('Converted to uppercase!','success')
    }
    function handleLowClick() {
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase!", "success");
    }
    function handleClear() {
        setText('');
        props.showAlert('TextBox cleared','success');
    }
    function handleCopy() {
        let text = document.getElementById('exampleFormControlTextarea1');
        text.select();
        navigator.clipboard.writeText(text.value)
        props.showAlert('Copied to clipboard!!','success');
    }

    // const[text, setText]= useState('Enter your text here');
    const [text, setText] = useState('');
    // text = "I am Arindam Bhowal"; Wrong way to update text
    // setText("I am Arindam Bhowal"); Correct way to update text

    return (
        <>
            <div className="container my-3">
                <div className="mb-3">
                    <h2 style= {{color: props.mode==='light'? 'black': 'white'}}>{props.Heading}</h2>
                    <textarea className="form-control" style={{ backgroundColor: props.mode ==='dark'? 'Grey': 'white', color: props.mode=== 'dark'?'white': 'black'}}
                    value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="10" placeholder="Enter your text here"></textarea>
            </div>
            <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert to UpperCase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleLowClick}>Convert to LowerCase</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleClear}>Clear</button>
            <button className="btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>
            <div className="contsiner my-3" style= {{color: props.mode==='light'? 'black': 'white'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <h3>Preview:</h3>
                <p>{text.length > 0 ? text : 'Enter text in the text-box to preview here'}</p>
            </div>
        </div>
        </>
    )
}
