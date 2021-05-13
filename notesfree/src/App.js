import React, {useState} from 'react'
import NavBar from './Nav/NavBar'
import Dashboard from './Dashboard/Dashboard'



const App =() => {

    const [addedSection,SetAddedSection] = useState(0)

    function refreshSectionList(){ // navbar zwraca informacje, ze dodal nowa sekcje 
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
