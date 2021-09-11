import React from 'react'

function Alert(props) {

    function capitalize(word){
        const lower= word.toLowerCase();
        return lower.charAt(0).toUpperCase()+ lower.slice(1);
    }

    return (
        props.alertMsg && <div class={`alert alert-${props.alertMsg.Type} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alertMsg.Type)}</strong> {props.alertMsg.msg}
        </div>
    )
}

export default Alert


// If props.alert is null then the code written after && won’t be shown otherwise the code inside <div></div> tag will be displayed.