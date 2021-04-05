import React, {useState} from 'react'
import './Element.css'
import {useGlobalContext} from '../context'

const Element = (props) =>{

  // dopiero po dodaniu tagu sprawdzamy czy element jest linkiek
function validURL(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  return !!pattern.test(str);
}

const {AddNewElement} = useGlobalContext()

const [elementValue,setElementValue] = useState("");
const [tag, setTag] = useState("")

const SaveElem = () =>{
  console.log(elementValue)
  console.log(tag)

  // czy jest linkiem?
  if(validURL(elementValue)){
    console.log('link')
  }

  AddNewElement(props.section_id,1,elementValue,tag,1);
}

    return ( // todo: albo przeciaganie elementu / wrzucenie z dysku albo wrzucanie tekstu - jak to zrobic?
        <div className="element-container">
            <label className="elemInstruction"><b>Wklej tekst/link/zadanie lub obraz:</b></label>
            <div className="elemInputContainer">
            <div className="elemInputText">
                  <input text="text" placeholcer="informacje..."  onChange={(e)=>setElementValue(e.target.value)}></input>
            </div>          
            <div className="elemInputPhoto">
              <label>Przeciągnij element lub wybierz z dysku</label>
              <br/>
              <input type="file"></input>
            </div>
            <div className="elemInputTag">
              <input text="" placeholder="#tag..." onChange={(e)=>setTag(e.target.value)}></input>
              <br/>
               <button className="elemSaveBtn" onClick={SaveElem}>Zapisz</button>
            </div>                   
            </div>
        </div>
    )
}

export default Element