import React from 'react';


function ButtonLink(props){
    return (
        
        <a href={props.href} className={props.className}>
            novo video
        </a>
    )
}

export default ButtonLink;