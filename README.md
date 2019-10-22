# react-image-annotorious
React library to annotate the images

## Getting Started
```shell
npm i react-image-annotorious
```

# Import the react components
Import AnnoReact , AnnoImage component from react-image-annotorious.
    
```js
import { AnnoReact, AnnoImage } from 'react-image-annotorious'
```
# Generate context menu
Generate a context menu to diplay the options when you annonate.
    
```js
getContextSource() {
      return ["Select a category", "Car", "Bus", "autorickshaw", "Bike"];
}
```
# How to use AnnoReact tag
Write AnnoReact tag and pass context source from above created method
    
```js
<AnnoReact contextSource={this.getContextSource()}/>
```
# How to use AnnoImage tag
Write AnnoImage tag and give source of the image url to `imageSource` attribute and give some unique id to `imageId` attribute i.e., no two images should have same image id
```js
<AnnoImage imageSource="https://st2.depositphotos.com/1915171/8651/v/950/depositphotos_86518008-stock-illustration-transport-icons-car-bike-bus.jpg" imageid="0"></AnnoImage>
```
# Still confused on how to use?
Please `src` folder in the following reop https://github.com/burlarajesh/react-image-annotorious-demo/tree/master

# Need help or found any issue?
You are free to bug me at burla.rajesh2k8@gmail.com :)
   
    
