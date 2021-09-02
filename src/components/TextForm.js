import React from 'react'

export default function Textform(props) {
    return (
        <>
            <div className="container my-3">
                <div className="mb-3">
                    <h2>{props.Heading}</h2>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="10"></textarea>
                </div>
                <button className="btn btn-primary">Convert to UpperCase</button>
            </div>
        </>
    )
}
