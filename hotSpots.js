
    var theContainer=document.getElementById("hotspotContainer"),
     thehotspot=document.getElementById("hotspot");
     thehotspotComponent=document.getElementById("hotspotComponent");
    var handleClick=(event)=>{

    
        i=parseInt (event.target.getAttribute("number"));
        let hotspotTextTitle=thehotspotComponent.querySelector("#hotspotTextTitle");
        let hotspotTextBody=thehotspotComponent.querySelector("#hotspotTextBody");
        hotspotTextTitle.style.backgroundColor=theData[i].backgroundColor; 
        hotspotTextTitle.innerHTML=theData[i].textTitle;
        if (theData[i].textBody && theData[i].textBody.length>0) {
            hotspotTextBody.innerHTML=theData[i].textBody;
            hotspotTextBody.style.visibility="visible";
            }
            else{
                hotspotTextBody.style.visibility="hidden";
            }
        hotspotTextTitle.style.color=theData[i].textColor;
        let hotspotHandle=thehotspotComponent.querySelector(".hotspotHandle");
        
        switch (theData[i].direction){
            case "up-left":
                hotspotTextTitle.style.borderRadius="10px 0 0 0"
                hotspotHandle.setAttribute("class","hotspotHandle");
            break;
            case "down-right":
                hotspotTextTitle.style.borderRadius="0 0 10px 0"
                hotspotHandle.setAttribute("class","hotspotHandle hFlip Vflip");
                
            break;
            case "down-left":
                hotspotTextTitle.style.borderRadius="0 0 0 10px"
                hotspotHandle.setAttribute("class","hotspotHandle Vflip");
            break;
            case "up-right":
                hotspotTextTitle.style.borderRadius="0 10px 0 0"
                hotspotHandle.setAttribute("class","hotspotHandle hFlip");
            default:
            break;
        }
        thehotspotComponent.style.left=theData[i].x;
        thehotspotComponent.style.top=theData[i].y;
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
            theClonedNode.addEventListener("click",handleClick)
            theContainer.appendChild(theClonedNode);
        }   
        thehotspot.remove(); 
     }
 
    
        
    
    