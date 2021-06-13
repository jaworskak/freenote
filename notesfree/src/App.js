import React, {useState} from 'react'
import NavBar from './Nav/NavBar'
import Dashboard from './Dashboard/Dashboard'



const App =() => {

    const [addedSection,SetAddedSection] = useState(0)

    function refreshSectionList(){ // new section added?
        SetAddedSection(sectionNum => sectionNum+1)
    }

    return (
        <div className="app-container">           
          <NavBar
           onChange={refreshSectionList}/>
          <Dashboard
           newSection={addedSection}/>
        </div>
    )
}

export default App
