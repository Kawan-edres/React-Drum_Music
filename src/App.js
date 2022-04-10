import { useState } from "react";
import Drum from "./Components/Drum";
import Sounds from "./Components/Sounds";

function App() {
  const date=new Date().getFullYear();
  const[sounds,setSouds] =useState([
    {
      key:'A',
      url:Sounds[0],
      name:'boom'
    },
    {
      key:'S',
      url:Sounds[1],
      name:'clap'
    },
    {
      key:'D',
      url:Sounds[2],
      name:'hihat'
    },
    {
      key:'F',
      url:Sounds[3],
      name:'kick'
    },
    {
      key:'G',
      url:Sounds[4],
      name:'openhat'
    },
    {
      key:'H',
      url:Sounds[5],
      name:'ride'
    },
    {
      key:'J',
      url:Sounds[6],
      name:'snare'
    },
    {
      key:'K',
      url:Sounds[7  ],
      name:'tom'
    }
  ]);
  return (
    <div className="App">
    <h1>Drum Kit Ract App 🥁</h1>

    <div className="drums">

    {
      sounds.map((sound,id)=>{
        return  <Drum  key={id} letter={sound.key} sound={sound.url} /> 

      })
    }

    </div>

   

   <footer >Kawan Idrees ❤ {date}</footer>
    </div>
  );
}

export default App;
