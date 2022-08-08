
     var theContainer=document.getElementById("hotSpotContainer"),
     theHotSpot=document.getElementById("hotSpotComponent");
    var handleClick=(event)=>{

    alert("hi");
    
     let sibling =event.target.parentNode.firstChild;
     console.log(sibling)
     while(sibling){
        sibling.show();
        sibling=sibling.nextSibling;
     }
     
     }
    
    data={
        "hotspots":[
            {"x":'300px',"y":'50px',"link":"","text":"hello this is the text1", "direction":"up-left","backgroundColor":"#00aabb"},
            {"x":"500px","y":'300px',"link":"","text":"hello this is the text2",  "direction":"up-right","backgroundColor":"#ffffff"},
            {"x":"300px","y":'200px',"link":"","text":"hello this is the text3",  "direction":"down-right","backgroundColor":"#ffff00"},
            {"x":"700px","y":'200px',"link":"","text":"hello this is the text4",  "direction":"down-left","backgroundColor":"#00aabb"}
        ]
    };
    var theData=data.hotspots;
    
    window.onload=()=>{
       
           
        for(let i=0;i<theData.length;i++){       
            let theClonedNode=theHotSpot.cloneNode(true);    
            theClonedNode.style.left=theData[i].x;
            theClonedNode.style.top=theData[i].y;
            
            let clonedNodeText=theClonedNode.querySelector("#hotSpotText");
            clonedNodeText.style.backgroundColor=theData[i].backgroundColor;
            let clonedNodeHotSpot=theClonedNode.querySelector(".hotSpot");
            clonedNodeHotSpot.addEventListener("click",handleClick)
            let clonedNodeLine=theClonedNode.querySelector(".hotSpotLine");
            clonedNodeLine.style.zIndex=i;
            let clonedNodePath=theClonedNode.querySelector("path");
            let clonedNodeCircle=theClonedNode.querySelector("circle");
            switch (theData[i].direction){
                case "up-left":
                    clonedNodePath.setAttribute("d","M50 50 L40 40 L20 40");
                    clonedNodeCircle.setAttribute("cx",50);
                    clonedNodeText.style.left="-205px"
                    clonedNodeLine.style.left="4px";
                break;
                case "down-right":
                    clonedNodePath.setAttribute("d","M53 55 L60 70 L78 70");
                    clonedNodeCircle.setAttribute("cx",50);
                    clonedNodeText.style.left="37px"
                    clonedNodeText.style.top="10px"
                    clonedNodeLine.style.left="4px";
                break;
                case "down-left":
                    clonedNodePath.setAttribute("d","M50 50 L40 40 L20 40");
                    clonedNodeCircle.setAttribute("cx",50);
                    clonedNodeText.style.left="-205px"
                    clonedNodeLine.style.left="4px";
                break;
                case "up-right":
                default:
                break;
            }
            clonedNodeText.innerText=theData[i].text;
            console.log(theClonedNode);
            theContainer.appendChild(theClonedNode);
        }
        theHotSpot.remove();
    }
    // fetch("./assets/data.json")
    // .then(response=>response.json())
    // .then(data=>{
    //     var theData=data.hotspots;
    //     for(let i=0;i<theData.length;i++){
    //         theHotSpot.style.left=theData[i].x;
    //         theHotSpot.style.top=theData[i].y;
    //         theHotSpot.innerText+=theData[i].text;
    //         theContainer.appendChild(theHotSpot);
    //     }
    // });
    
        
    
    