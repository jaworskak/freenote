import React, {useState} from 'react'
import './Element.css'
import FileUpload from './FileUpload'
import axios from 'axios';


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


const [elementValue,setElementValue] = useState("");
const [tag, setTag] = useState("")



const SaveElem = () =>{

  const newElem ={
      text_note : elementValue,
      is_text_note_link:validURL(elementValue),
      photo_url:"photo_url",
      photo_name:"photo_name",
      tag:tag,
      section_id: props.section_id
  }
   axios.post('http://localhost:5000/notedElements/add', newElem)
        .then(res => console.log(res.data));
}

  const updateUploadedFiles = (files) =>{
    console.log('w tym miejscu zapis zdjęcia do pliku')
  };

    return ( // todo: albo przeciaganie elementu / wrzucenie z dysku albo wrzucanie tekstu - jak to zrobic?
        <div className="element-container">
            <label className="elemInstruction"><b><br/>Wklej tekst/link/zadanie lub obraz:<br/></b></label>
            <div className="elemInputContainer">
            <div className="elemInputText">
                  <textarea text="text" placeholder="Notatki - ważny tekst / link do strony/ zadanie 'to-do'"  onChange={(e)=>setElementValue(e.target.value)}></textarea>
            </div>          
            <div className="elemInputPhoto">
              <FileUpload
                  accept=".jpg,.png,.jpeg"
                  label="Profile Image(s)"
                  multiple
                  updateFilesCb={updateUploadedFiles}
              />
            </div>
            <div className="elemInputTag">
              <input  text="" placeholder="#tag..." onChange={(e)=>setTag(e.target.value)}></input>
              <br/>
               <button className="elemSaveBtn" onClick={SaveElem}>Zapisz do sekcji {props.section_name}</button>
            </div>                   
            </div>
        </div>
    )
}

export default Element