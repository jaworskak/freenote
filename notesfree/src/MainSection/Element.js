import React, {useState} from 'react'
import './Element.css'

const Element = () =>{

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

const [elementValue,setElementValue] = useState("");
const [tag, setTag] = useState("")

const SaveElem = () =>{
  console.log(elementValue)
  console.log(tag)

  // czy jest linkiem?
  if(validURL(elementValue)){
    console.log('link')
  }
}

    return (
        <div className="element-container">
            <label>Element:</label>
            <br/>
            <input text="text" placeholcer="informacje..."  onChange={(e)=>setElementValue(e.target.value)}></input>
            <br/>
            <input text="" placeholder="#tag..." onChange={(e)=>setTag(e.target.value)}></input>
            <br/>
            <button onClick={SaveElem}>Zapisz</button>
        </div>
    )
}

export default Element