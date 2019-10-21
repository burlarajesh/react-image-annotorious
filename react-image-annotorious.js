import anno from 'annotorious';

import React, { Component } from 'react';

import './react-image-annotorious.css'





var globalStoreAdd = [];
var globalStoreSelectedCategory = [];
var globalAddIndex = 0;
var contextSource = [];



export class AnnoReact extends Component {

    
    constructor(props) {
        super(props);
        console.log("props", props);
        contextSource = props.contextSource;
        window.anno.addHandler('onEditorShown', function (annotation) {            
            var imageId = window.event.target.closest(".annotorious-annotationlayer").getElementsByClassName("annotatable")[0].getAttribute("imageid");
            document.getElementsByClassName("annotorious-editor")[imageId].style.display = "none";
            //Remove existing selectors
            var element = document.getElementById("select-container");
            console.log("element", element);
            if (element != undefined) {
                element.parentNode.removeChild(element);
            }

            //Generate the floating dropdown list	
            var iDiv = document.createElement('div');
            iDiv.id = 'select-container';
            iDiv.className = 'select-container';
            iDiv.style.display = "block";
            document.getElementsByTagName('body')[0].appendChild(iDiv);

            var newDiv = document.createElement('div');


            newDiv.style.position = 'absolute';
            newDiv.style.width = '0 auto';
            
            
            console.log(window.event.currentTarget);
            newDiv.style.left = window.event.clientX + "px";
            newDiv.style.top = window.event.clientY + "px";
            var html = '<select class="categories">', dates = AnnoReact.prototype.generateCategories(), i;
            for (i = 0; i < dates.length; i++) {
                if (i == 0) {
                    html += "<option selected disabled>" + dates[0] + "</option>"
                } else {
                    html += "<option value='" + dates[i] + "'>" + dates[i] + "</option>";
                }

            }
            html += '</select>';
            newDiv.innerHTML = html;

            iDiv.appendChild(newDiv);
            var selectedCategory = "N/A";
            var selectedSubCategory = "N/A";

            document.getElementsByClassName("categories")[0].addEventListener("change", function (e) {
                var selectElement = document.getElementsByClassName("categories")[0];

                selectedCategory = selectElement.options[selectElement.selectedIndex].value;                
                globalStoreSelectedCategory[globalAddIndex] = selectedCategory;
                selectedSubCategory = "N/A";

                if (iDiv.childElementCount == 2) {
                    //iDiv.removeChild(iDiv.childNodes[1]);
                }

                var editorLength = document.getElementsByClassName("annotorious-editor-text").length - 1;
                document.getElementsByClassName("annotorious-editor-text")[imageId].value = selectedCategory;
                document.getElementsByClassName("annotorious-editor-button-save")[imageId].click();
                if (document.getElementById("select-container") != null) {
                    iDiv.parentElement.removeChild(iDiv);
                }                                
            });           
        });
        window.anno.addHandler('onAnnotationCreated', function (annotation) {                        

            //This is needed due to a Annotorious bug
            globalStoreAdd[globalAddIndex] = annotation;
            globalAddIndex = globalAddIndex + 1;

            if (document.getElementById('select-container') != null) {
                document.getElementById('select-container').remove();
            }
            //this.onSelectionCompletedFired = false;

        });
    }
        
    render() {
        return (<div></div>);
    }
    

    generateCategories() {
        var categoriesArray = contextSource;
        return categoriesArray;
    }
    
}
var imageSource;
var  imageId;
export class AnnoImage extends Component {
    
    constructor(props) {
        console.log(props);
        imageSource = props.imageSource;
        imageId = props.imageid;
        super(props);
    }

    render() {
        console.log("anno image return");
        return (
            <img src={imageSource} imageid={imageId} className='annotatable'></img>
        );
    }  
}