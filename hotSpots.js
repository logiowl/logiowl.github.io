
    var theContainer=document.getElementById("hotspotContainer"),
     thehotspot=document.getElementById("hotspot");
     thehotspotComponent=document.getElementById("hotspotComponent");
    var handleHotspotClick=(event)=>{
    
    
        hotspotNumber=parseInt (event.target.getAttribute("number"));
        let hotspotTextTitle=thehotspotComponent.querySelector("#hotspotTextTitle");
        let hotspotTextBody=thehotspotComponent.querySelector("#hotspotTextBody");
        hotspotTextTitle.style.backgroundColor=theData[hotspotNumber].backgroundColor; 
        hotspotTextTitle.innerHTML=theData[hotspotNumber].textTitle;
        if (theData[hotspotNumber].link && theData[hotspotNumber].link.length>0) hotspotTextTitle.onclick=()=>{ window.location.href=theData[hotspotNumber].link};
        if (theData[hotspotNumber].textBody && theData[hotspotNumber].textBody.length>0) {
            hotspotTextBody.innerHTML=theData[hotspotNumber].textBody;
            hotspotTextBody.style.visibility="visible";
            }
            else{
                hotspotTextBody.style.visibility="hidden";
            }
        hotspotTextTitle.style.color=theData[hotspotNumber].textColor;
        let hotspotHandle=thehotspotComponent.querySelector(".hotspotHandle");
        
        switch (theData[hotspotNumber].direction){
            case "left":
                hotspotTextTitle.style.borderRadius="0 10px 0 0";
                hotspotHandle.setAttribute("class","hotspotHandle");
                hotspotTextTitle.style.left=hotspotTextBody.style.left="-275px";
                hotspotHandle.style.left="-78px"
            break;
        
            case "right":
                hotspotTextTitle.style.borderRadius="10px 0 0 0"
                hotspotHandle.setAttribute("class","hotspotHandle hFlip");
                hotspotTextTitle.style.left=hotspotTextBody.style.left="95px";
                hotspotHandle.style.left="-5px"
            default:
            break;
        }
        thehotspotComponent.style.left=theData[hotspotNumber].x;
        thehotspotComponent.style.top=theData[hotspotNumber].y;
        thehotspotComponent.style.visibility="visible";
     }
    
   
    var theData=data.hotspots;
    
    window.onload=()=>{
       
           
        for(let i=0;i<theData.length;i++){       
            let theClonedNode=thehotspot.cloneNode(true); 
            theClonedNode.setAttribute("number",i);
            theClonedNode.setAttribute("id","hotspot"+i);   
            theClonedNode.style.left=theData[i].x;
            theClonedNode.style.top=theData[i].y;
            theClonedNode.addEventListener("click",handleHotspotClick)
            theContainer.appendChild(theClonedNode);
        }   
        thehotspot.remove(); 
     }
 
    
        
    
    