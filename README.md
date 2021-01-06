Deployed at http://imagepanorama360priyank.netlify.app .

This project is as an application for **NITP Web Team**.

Here, I have made a 360 degree image tour of my house terrace. This projects is for demo purpose to show that in a large scale this technique can be used for making full tour of real-estate properties, institution, monuments, etc. Since, we are still in the state of pandemic it was necessary to work towards creating virtual reality experinece for web.

For this i have used panellum-react library for rendering of images as 360 degree panaroma.
## Click below to watch it in action on youtube.

[<img src="https://img.youtube.com/vi/lp2T9C0jejo/maxresdefault.jpg" width="50%">](https://youtu.be/lp2T9C0jejo)


# Quick Start

This project was bootstrapped with,

### `npx create-react-app imagepanaroma`

Then we installed library panellum-react using,

### `npm i panellum-react`

After this we used panellum code to render image,

```javascript
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
```
This shows the image in 360 view that rotates automatically. To add position of navigation we used .hotspot feature,
```javascript
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
```
Here, handleClick function takes data from Detail array and displays the new image with new hotspot dynamically. Now to get hotspotIcon as Tooltip we need to define it. For that,

```javascript
const hotspotIcon = (hotSpotDiv) => {
  const image = document.createElement('img');
  image.classList.add('image');
  image.setAttribute('width', '60');
  image.setAttribute('height', '60');
  image.setAttribute('src',    "https://img.icons8.com/fluent/100/000000/long-arrow-up.png");
  hotSpotDiv.appendChild(image);
}
```
Data Structure that I have used in the cod eis highly dynamic as,
```javascript
export const Detail=[
    {
       id: 0,
       image: "1.jpeg",
       pitch: [184.41,165],
       yaw: [154.76,210],
       idNav:[1,2],
       yawscreen: 10,
       pitchscreen: 10,
       }
];
```
Thats, how we coded this sample app.
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.




### Deployment

This app is deployed using netlify at http://imagepanorama360priyank.netlify.app .
To deploy we use script `npm run build` to generate static site at build folder and drag and drop that to netlify.com console.


