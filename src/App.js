import logo from './logo.svg';
import './App.css';
import fontawesome from '@fortawesome/fontawesome'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell,faBook } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

function App() {
let [start,setStart]=useState(false)
  let data=[
    {
      icon:[
        "book",
        "bell",
        "book",
        "bell"
      ]
    }
  ]
  fontawesome.library.add(faBook,faBell);
 function anmation(e){
      setStart(e)
     
 }
 
  return (
    <div className="App">
     <div class="container">
            <div class="icon-box">
                <ul>
                  {
                    data && data.map(
                      (e)=>{
                        return(
                          <>
                          {
                            e.icon.map(
                              (item,i)=>{
                                    return(
                                      <li key={i} onClick={()=>anmation(i)} >
                                      <FontAwesomeIcon id='icon' icon={item} />
                                      {console.log(item)}
                                      <span class={start===i?`border`:null} ></span>
                                  </li>
                                    )
                              }
                            )
                          }
                          </>
                        
                        )
                      }
                    )
                  }
                   
                </ul>

            </div>
        </div>
    </div>
  );
}

export default App;
