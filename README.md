# react-image-annotorious
React library to annotate the images

# Steps to use the library
  # Step1 
    Install the package from npm 
    
    ```shell
    npm i react-image-annotorious
    ```        
  # Step2
    Import AnnoReact , AnnoImage component from react-image-annotorious.
    ```shell
    import { AnnoReact, AnnoImage } from 'react-image-annotorious'
    ```
  # Step 3
    Generate a context menu to diplay the options when you annonate.
    ```js
    getContextSource() {
        return ["Select a category", "Car", "Bus", "autorickshaw", "Bike"];
    }
    ```
  # Step 4
    Write AnnoReact tag and pass context source from above created method
    ```js
    <AnnoReact contextSource={this.getContextSource()}/>
    ```
  # Step 5
     Write AnnoImage tag and give source of the image url to #imageSource attribute and give some unique id to imageId attribute i.e., no two images should have same image id
     ```js
     <AnnoImage imageSource="https://st2.depositphotos.com/1915171/8651/v/950/depositphotos_86518008-stock-illustration-transport-icons-car-bike-bus.jpg" imageid="0"></AnnoImage>
     ``` 
  # Need help or found any issue?
    You are free to bug me at burla.rajesh2k8@gmail.com
   
    
