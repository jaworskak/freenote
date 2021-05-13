import React from 'react'
import test from  './test.jpg'

export default function AddedElement(props) {
   const text_len = props.text_note.length
   
    return (
        <>
        <div className="addedElem__tag">{props.tag}</div>
         <div className={`addedElem ${text_len>20? "long_text": ""}`}>
            {props.is_text_note_link===false &&
            <p className="addedElem__text">{props.text_note}</p> }
            {props.is_text_note_link &&
            <a href={props.text_note}>{props.text_note}</a>
            }
            {props.photo_name &&
            <img className="addedElem__photo" src={test} alt="test"></img>
            }
        </div>
        </>
    )
}
