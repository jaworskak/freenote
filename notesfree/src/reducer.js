const reducer = (state, action) =>{
    if(action.type==='ADD_NEW_SECTION'){   
        var timestamp = new Date().getUTCMilliseconds();
        var tempState =[...state.section_list]; // kopia tablicy a nie referancja do niej
        var newItem = {section_id:parseInt(timestamp),section_name:action.section_name, parent_id:action.parent_section_id}    
        tempState.push(newItem)
        return {...state,section_list:tempState,opened_section_id:parseInt(timestamp),opened_section_name:action.section_name}
    }
    if(action.type==='TOGGLE'){
        return {...state,opened_section_id:action.opened_section_id, opened_section_name:action.opened_section_name}
    }
    if(action.type==='ADD_NEW_ELEMENT'){
        // dodanie listy elementów do konkretnej sekcji
        var elements_list =[]

       let tempSection =state.section_list.map((section)=>{
            if(section.section_id===action.section_id){
               // if(section.includes("elements")){
               //     elements_list = [...section.elements]
              //  }
                elements_list.push({element_id:action.element_id, element_value:action.element_value, element_tag:action.element_tag})

                return {...section,elements:elements_list} // dodaje liste elementów do konkretnej sekcji. inne zwracam tak jak były
            }
            return section
        })
        return{...state,section_list:tempSection} // otwarte/zamkniete elementy zostaja takie same
    }
}

export default reducer
