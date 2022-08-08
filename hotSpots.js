
     var theContainer=document.getElementById("hotSpotContainer"),
     theHotSpot=document.getElementById("hotSpotComponent");
     
    data={
        "hotspots":[
            {"x":'10px',"y":'30px',"link":"","text":"hello this is the text"},
            {"x":"500px","y":'300px',"link":"","text":"hello this is the text"}
        ]
    };
    var theData=data.hotspots;
    
    window.onload=()=>{
       
           
        for(let i=0;i<theData.length;i++){       
            let theClonedNode=theHotSpot.cloneNode(true);    
            theClonedNode.style.left=theData[i].x;
            theClonedNode.style.top=theData[i].y;
            theClonedNode.setAttribute("id","hotspot"+i);
            let clonedNodeText=theClonedNode.querySelector("#hotSpotText");
            clonedNodeText.innerText=theData[i].text;
            console.log(theClonedNode);
            theContainer.appendChild(theClonedNode);
        }
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
    
        
    
    