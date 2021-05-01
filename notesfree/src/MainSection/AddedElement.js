import React, {useState} from 'react'
import './AddedElement.css'
import test from  './test.jpg'

export default function AddedElement(props) {
   const text_len = props.text_note.length
   
    console.log(text_len)
    return (
        <div className={`singleAddedElem ${text_len>20? "long_text": ""}`}>
            <h3 className="singleTag">{props.tag}</h3>
            {props.is_text_note_link===false &&
            <p className="singleText">{props.text_note}</p> }
            {props.is_text_note_link &&
            <a href={props.text_note}>{props.text_note}</a>
            }
            {props.photo_name &&
            <img className="singlePhoto" src={test} alt="test"></img>
            }
        </div>
    )
}
