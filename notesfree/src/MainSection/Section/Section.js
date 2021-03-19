import React from 'react'
import './Section.css'

const Section = (props) =>{

   const Toggle = () =>{
        console.log('toggle')
    }

    return (
        <div onClick={Toggle}> 
             { props.open &&     
        <div className="section road active">
            <p>Donec sed risus lectus. Nulla dignissim et augue et finibus. Nulla volutpat commodo odio et consequat. Integer interdum id diam a lacinia. 
                Nulla lobortis est non est fermentum, in mollis magna pharetra. Cras vel sagittis enim, pulvinar dapibus neque. Vivamus vel leo at orci condimentum vestibulum nec sed nisi.
                 Fusce ipsum arcu, egestas sed odio sed, euismod imperdiet urna. Etiam vestibulum eget risus quis volutpat. Integer feugiat aliquet ipsum, vitae mattis lectus varius a.
                  Integer nec dictum nibh. Donec sed lorem vel ante sodales molestie ac in ligula. Suspendisse potenti. Nunc consequat neque at nisl bibendum dignissim. 
                  Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
        </div>
            }
            { !props.open &&
            <div className="section road">
              <p>Filmy</p>
            </div>           
            }
          </div>
    )
}

export default Section