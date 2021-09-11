import React from 'react'

export default function About(props) {
    const myStyle={
        color: props.mode==='light'? 'black': 'white'
    }
    return (
        <div className='container my-3' style={myStyle}>
        <h1>About</h1>
        <hr/><hr />
        <p className='my-3'>This is app is built in react app. This is basically does is it takes your text, manupulates it and gives back the text to you. It is a very basic app.
         <p><br />
        Designed and maintained by- Arindam Bhowal. <br /> Inspired by- Code with Harry. <br />
        <br />
        This is my first app using React built while learing react. I hope you will like my app and support me. I promise to make more such wonderfull apps with better functionility in the future.

        </p>
        </p>
            
        </div>
    )
}
