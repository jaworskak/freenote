import React, {  useContext, useReducer } from 'react'
import reducer from './reducer'

const AppContext = React.createContext()

const sections ={
    section_list: [], // na poczatku psuta lista
    opened_section_id: 0, // chyba latwiej bedzie przechodzic przez zagniezdzenia posiadajac indywidualne id otwartego? jesli to nie ta sekcja ma takie id to nei jest otwarta
    opened_section_name: "", // jak cos tam jest napsiane to znaczy, ze dodajemy nizej niz do widoku głównego
    parent_section_id: 0,
    parent_section_name: "", // nazwa sekcji z której przyszliśmy 

}

const AppProvider = ({children}) =>{

 
    const [state,dispatch] = useReducer(reducer,sections)


    const Toggle = (section_id,section_name) =>{
        dispatch({type:'TOGGLE',opened_section_id:section_id, opened_section:section_name})
    }

    const AddNewSection = (parent_section_id,opened_section_id, section_name) =>{
        dispatch({type:'ADD_NEW_SECTION',opened_section_id:opened_section_id, section_name:section_name,parent_section_id:parent_section_id})
    }

    const AddNewElement = (section_id,elemId,elemValue,elemTag,elemType) =>{
        dispatch({type:'ADD_NEW_ELEMENT',section_id:section_id,element_id:elemId,element_value:elemValue,element_tag:elemTag,element_type:elemType})
    }


    return (
        <AppContext.Provider
            value={{...state,Toggle,AddNewSection,AddNewElement}}>
                {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () =>{
    return useContext(AppContext)
}

export {AppContext, AppProvider}