import React, { useState, useEffect } from 'react'
import Section from './Section'
import axios from 'axios'

const Dashboard = (props) => {
  const [sectionList, setSectionList] = useState([]) // sections list
  const [openedSectionId, setOpenedSectionId] = useState(0) // currently opened section
  const [openedSectionName, setOpenedSectionName] = useState('') // currently opened section name

  const OpenSection = (section_id, section_name) => {
    // is section open?
    setOpenedSectionId(section_id)
    setOpenedSectionName(section_name)
  }

  const timer = (ms) => new Promise((res) => setTimeout(res, ms)) // delay in showing sections list
  async function loadElements() {
    const sectionList = document.querySelectorAll('.sectionListItem')

    for (var i = 0; i < sectionList.length; i++) {
      sectionList[i].classList.add('visible')
      await timer(30)
    }
  }

  useEffect(async () => {
    // get all saved sections
    const result = await axios.get('http://localhost:5000/sections/')
    setSectionList(result.data)

    loadElements()
  }, [props.newSection]) // get new sections list if new section is added

  return (
    <div className='dashboard'>
      {sectionList.length > 0 && (
        <div className='sectionList'>
          {sectionList.map((section) => {
            const { _id, section_name, elements_count } = section
            return (
              <div
                className={`sectionListItem ${
                  section_name.length > 9 ? 'importantItem' : ''
                } ${elements_count !== '0' ? 'elements_inside' : ''}`}
                onClick={() => OpenSection(_id, section_name)}
                key={_id}
              >
                <p>{section_name}</p>
              </div>
            )
          })}
        </div>
      )}
      {openedSectionId !== 0 && ( // show current opened section
        <div>
          <div className='currentSection'>
            <Section
              key={openedSectionId}
              section_id={openedSectionId}
              section_name={openedSectionName}
            />
          </div>
          <div className='modalSection_overlay'>
            <div className='currentSectionModal'></div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Dashboard
