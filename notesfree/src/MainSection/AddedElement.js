import React, {useState} from 'react'
import './AddedElement.css'
import test from  './test.jpg'

export default function AddedElement(props) {
    console.log(props.is_text_note_link)
    return (
        <div className="singleAddedElem">
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
