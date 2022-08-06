var theContainer=document.getElementById("#hotSpotContainer"),
    theHotSpot=document.getElementById("#hotSpot");
    
    fetch("./assets/data.json")
    .then(response=>response.json())
    .then(data=>{
        var theData=data.hotspots;
        for(let i=0;i<theData.length;i++){
            theHotSpot.style.left=theData[i].x;
            theHotSpot.style.top=theData[i].y;
            theHotSpot.innerText+=theData[i].text;
            theContainer.appendChild(theHotSpot);
        }
    });
    
        
    
    