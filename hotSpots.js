
     var theContainer=document.getElementById("hotSpotContainer"),
     theHotSpot=document.getElementById("hotSpot");
     theHotSpotLabel=document.getElementById("hotSpotComponent");
    var handleClick=(event)=>{

    
        i=parseInt (event.target.getAttribute("number"));
        let hotSpotText=theHotSpotLabel.querySelector("#hotSpotText");
        hotSpotText.style.backgroundColor=theData[i].backgroundColor; 
        hotSpotText.innerHTML=theData[i].text;
        hotSpotText.style.color=theData[i].textColor;
        let labelOutlines=theHotSpotLabel.querySelector(".hotSpotLine");
        
        let outlinesPath=theHotSpotLabel.querySelector("path");
        let outlinesCircle=theHotSpotLabel.querySelector("circle");
        outlinesCircle.setAttribute("fill",theData[i].backgroundColor)
        theHotSpotLabel.style.left=theData[i].x;
        theHotSpotLabel.style.top=theData[i].y;
        switch (theData[i].direction){
            case "up-left":
                outlinesPath.setAttribute("d","M50 50 L40 40 L20 40");
                outlinesCircle.setAttribute("cx",50);
                hotSpotText.style.left="-205px"
                hotSpotText.style.top="-40px"
                labelOutlines.style.left="4px";
            break;
            case "down-right":
            outlinesPath.setAttribute("d","M53 55 L60 70 L78 70");
                outlinesCircle.setAttribute("cx",50);
                hotSpotText.style.left="37px"
                hotSpotText.style.top="10px"
                labelOutlines.style.left="4px";
            break;
            case "down-left":
                outlinesPath.setAttribute("d","M50 50 L40 40 L20 40");
                outlinesCircle.setAttribute("cx",50);
                hotSpotText.style.left="-205px"
                hotSpotText.style.top="-40px"
                labelOutlines.style.left="4px";
            break;
            case "up-right":
            default:
            break;
        }
        theHotSpotLabel.style.visibility="visible";
     }
    
    data={
        
        "hotspots":[
            {"x":'300px',"y":'50px',"link":"","text":"hello this is the text1", "direction":"up-left","backgroundColor":"#00aabb","textColor":"black"},
            {"x":"500px","y":'300px',"link":"","text":"hello this is the text2",  "direction":"up-right","backgroundColor":"#ffffff","textColor":"black"},
            {"x":"300px","y":'200px',"link":"","text":"hello this is the text3",  "direction":"down-right","backgroundColor":"#ffff00","textColor":"white"},
            {"x":"700px","y":'200px',"link":"","text":"hello this is the text4",  "direction":"down-left","backgroundColor":"#00aabb","textColor":"white"}
        ]
    };
    var theData=data.hotspots;
    
    window.onload=()=>{
       
           
        for(let i=0;i<theData.length;i++){       
            let theClonedNode=theHotSpot.cloneNode(true); 
            theClonedNode.setAttribute("number",i);
            theClonedNode.setAttribute("id","hotSpot"+i);   
            theClonedNode.style.left=theData[i].x;
            theClonedNode.style.top=theData[i].y;
            theClonedNode.addEventListener("click",handleClick)
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
    
        
    
    