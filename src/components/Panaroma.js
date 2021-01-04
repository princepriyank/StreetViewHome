import { Pannellum } from "pannellum-react";
import {useState} from 'react';
import {Detail} from '../components/details';
const hotspotIcon = (hotSpotDiv) => {
  const image = document.createElement('img');
  image.classList.add('image');
  image.setAttribute('width', '60');
  image.setAttribute('height', '60');
  image.setAttribute('src',    "https://img.icons8.com/fluent/48/000000/send-letter.png");
  hotSpotDiv.appendChild(image);
}
function Panaroma() {
 const [image, setimage] = useState("1.jpeg");
 const [pitch, setpitch] = useState([184.41,165]);
 const [yaw, setyaw] = useState([154.76,210]);
 const [idnav, setidnav] = useState([1,2]);
 const [pitchscreen, setpitchscreen] = useState(10);
 const [yawscreen, setyawscreen] = useState(10);
  return (
    <div className="App">
      <Pannellum
        width="100%"
        height="100vh"
        image={image}
        pitch={pitchscreen}
        yaw={yawscreen}
        hfov={90}
        autoRotate={2}
        autoLoad
        onLoad={() => {
            console.log("panorama loaded");
        }}
    >
    {pitch.map((p, index) => (
         <Pannellum.Hotspot
         type="custom"
         pitch= {pitch[index]}
         yaw={yaw[index]}
        tooltip={hotspotIcon}
         handleClick={(evt, name) => {
           const Object = Detail[idnav[index]];
           setidnav(Object.idNav);
           setyaw(Object.yaw);
           setpitch(Object.pitch);
           setpitchscreen(Object.pitchscreen);
           setyawscreen(Object.yawscreen);
           setimage(Object.image);
        }}
      />
    ))}
     
    </Pannellum>
    
    </div>
  );
}

export default Panaroma;
