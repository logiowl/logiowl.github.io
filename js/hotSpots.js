
    var theContainer=document.getElementById("hotspotContainer"),
    theSubjectImage=document.getElementById("theSubjectImage"),
    thehotspot=document.getElementById("hotspot"),
    sizeRateToOriginal=1,
    thehotspotComponent=document.getElementById("hotspotComponent"),
    hotspotTextTitle=thehotspotComponent.querySelector("#hotspotTextTitle"),
    hotspotTextBody=thehotspotComponent.querySelector("#hotspotTextBody"),
    hotspotsList=[],
    hotspotNumber=0,
    theData=data.hotspots,
    correctionValue=20;
     
    var handleHotspotClick=(event)=>{
       
       
        hotspotNumber=parseInt (event.target.getAttribute("number"));
        handleResize();
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
        
        thehotspotComponent.style.left=hotspotsList[hotspotNumber].style.left;
        thehotspotComponent.style.top=hotspotsList[hotspotNumber].style.top;
        
        switch (theData[hotspotNumber].direction){
            case "left":
                hotspotTextTitle.style.borderRadius="0 10px 0 0";
                hotspotHandle.setAttribute("class","hotspotHandle");
                hotspotTextTitle.style.left=hotspotTextBody.style.left="-222px";
                
                hotspotHandle.style.left="-77px";
            break;
        
            case "right":
                hotspotTextTitle.style.borderRadius="10px 0 0 0"
                hotspotHandle.setAttribute("class","hotspotHandle hFlip");
                hotspotTextTitle.style.left=hotspotTextBody.style.left="95px";
                
                hotspotHandle.style.left="-6px";
            default:
            break;
        }
       
        
        thehotspotComponent.style.visibility="visible";
         if (data.autoHide==true) 
         { let hotspotTimeout=setTimeout(()=>{
            thehotspotComponent.style.visibility="hidden";
            hotspotTextBody.style.visibility="hidden";
            clearTimeout(hotspotTimeout);
        }, 6000)
        }
     }
    
   
    
    var handleResize=()=>{
        sizeRateToOriginal=theSubjectImage.width/theSubjectImage.naturalWidth;
        
        for(let i=0;i<theData.length;i++){
            hotspotsList[i].style.left=((theData[i].x*sizeRateToOriginal)-correctionValue)+"px";
            hotspotsList[i].style.top=((theData[i].y*sizeRateToOriginal)-correctionValue)+"px";
            
        }
        thehotspotComponent.style.left=hotspotsList[hotspotNumber].style.left;
        thehotspotComponent.style.top=hotspotsList[hotspotNumber].style.top;
        theContainer.style.height=theSubjectImage.style.height
    }
    window.onload=()=>{
        theSubjectImage.setAttribute("src",data.theSubjectImage);
        theSubjectImage.addEventListener("load",()=>{handleResize();})
        
        var sizeRateToOriginal=theSubjectImage.width/theSubjectImage.naturalWidth   
        for(let i=0;i<theData.length;i++){       
            let theClonedNode=thehotspot.cloneNode(true); 
            theClonedNode.setAttribute("number",i);
            theClonedNode.setAttribute("id","hotspot"+i);   
            
            theClonedNode.addEventListener("click",handleHotspotClick)
            theContainer.appendChild(theClonedNode);
            let currentHotspot=theContainer.querySelector("#hotspot"+i)
            hotspotsList[i]=  currentHotspot;
            
            currentHotspot.style.left=((theData[i].x*sizeRateToOriginal)-correctionValue)+"px";
            currentHotspot.style.top=((theData[i].y*sizeRateToOriginal)-correctionValue)+"px";
            
           
        }   
        thehotspot.remove(); 
        handleResize();
        window.addEventListener('resize',handleResize)
        
       
     }
 
    
        
    
    