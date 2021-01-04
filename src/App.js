import { Pannellum } from "pannellum-react";
import {useState} from 'react';
import {Detail} from '../src/details';
const hotspotIcon = (hotSpotDiv) => {
  const image = document.createElement('img');
  image.classList.add('image');
  image.setAttribute('width', '60');
  image.setAttribute('height', '60');
  image.setAttribute('src',    "https://img.icons8.com/fluent/100/000000/long-arrow-up.png");
  hotSpotDiv.appendChild(image);
}
function App() {
 const [image, setimage] = useState("1.jpeg");
 const [pitch1, setpitch1] = useState(184.41);
 const [pitch2, setpitch2] = useState(165);
 const [yaw1, setyaw1] = useState(154.76);
 const [yaw2, setyaw2] = useState(210);
 const [id1, setid1] = useState(1);
 const [id2, setid2] = useState(2);
  return (
    <div className="App">
      <Pannellum
        width="100%"
        height="100vh"
        image={image}
        pitch={10}
        yaw={10}
        hfov={110}
        autoRotate={2}
        autoLoad
        onLoad={() => {
            console.log("panorama loaded");
        }}
    >
      <Pannellum.Hotspot
   type="custom"
   pitch={pitch1}
   yaw={yaw1}
  tooltip={hotspotIcon}
   handleClick={(evt, name) => {
     const Object = Detail[id1];
     setid1(Object.id1);
     setid2(Object.id2);
     setyaw1(Object.yaw1);
     setyaw2(Object.yaw2);
     setpitch1(Object.pitch1);
     setpitch2(Object.pitch2);
     setimage(Object.image);
  }}
/>
<Pannellum.Hotspot
   type="custom"
   pitch={pitch2}
   yaw={yaw2}
   tooltip={hotspotIcon}
   handleClick={(evt, name) => {
    const Object = Detail[id2];
     setid1(Object.id1);
     setid2(Object.id2);
     setyaw1(Object.yaw1);
     setyaw2(Object.yaw2);
     setpitch1(Object.pitch1);
     setpitch2(Object.pitch2);
     setimage(Object.image);
  }}
/>
    </Pannellum>
    
    </div>
  );
}

export default App;
