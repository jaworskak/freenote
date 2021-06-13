import React, { useState } from 'react'
import FileUpload from './FileUpload'
import axios from 'axios'

const Element = (props) => {
  // check if added elem is valid url
  function validURL(str) {
    var pattern = new RegExp(
      '^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$',
      'i'
    ) // fragment locator
    return !!pattern.test(str)
  }

  const [elementValue, setElementValue] = useState('')
  const [tag, setTag] = useState('')
  const [fileName, setFileName] = useState('')

  const SaveElem = () => {
    // new element added

    const newElem = {
      text_note: elementValue,
      is_text_note_link: validURL(elementValue),
      photo_url: 'photo_url',
      photo_name: fileName,
      tag: tag,
      section_id: props.section_id,
      text_length: elementValue.length,
    }
    console.log(newElem)
    axios
      .post('http://localhost:5000/notedElements/add', newElem)
      .then((res) => console.log(res.data))

    props.onChange()
  }

  const updateUploadedFiles = (files) => {
    setFileName(files[0].name)
    console.log('to do - save photo')
  }

  return (
    // adding new element 
    <div className='addelement'>
      <label className='add_element__label'>
        <b>
          <br />
          Wklej tekst/link/zadanie lub obraz:
          <br />
        </b>
      </label>
      <div className='add_element__container'>
        <div className='add_element__container_text'>
          <textarea
            text='text'
            placeholder="Notatki - ważny tekst / link do strony/ zadanie 'to-do'"
            onChange={(e) => setElementValue(e.target.value)}
          ></textarea>
        </div>
        <div className='add_element__container_photo'>
          <FileUpload
            accept='.jpg,.png,.jpeg'
            label='Profile Image(s)'
            multiple
            updateFilesCb={updateUploadedFiles}
          />
        </div>
        <div className='add_element__container_tag'>
          <input
            text=''
            placeholder='#tag...'
            onChange={(e) => setTag(e.target.value)}
          ></input>
          <br />
          <button className='add_element__container_addbtn' onClick={SaveElem}>
            Zapisz do sekcji <span>{props.section_name}</span>{' '}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Element
