import { useState } from "react"
import html2canvas from "html2canvas";
import { useRef } from "react";



export default PicWindow




function PicWindow({Styles, ChangeStyles, options})
{

function shuffle(){

const NewRandomStyle = {};
for (let [category, itemList] of Object.entries(options)) {//loop through option object keys ,key in category and the array in itemlist
  const randomIndex = Math.floor(Math.random() * itemList.length);//pick random index
  const chosen = itemList[randomIndex];//add the chosen random option to chosen
  NewRandomStyle[category] = `alpaca/${category}/${chosen}.png`; //add the new style with it's category
}
NewRandomStyle.Nose = "alpaca/nose.png";
ChangeStyles(NewRandomStyle)

}
  const divRef = useRef();

  const downloadImage = async () => {
    const canvas = await html2canvas(divRef.current);
    const dataURL = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = dataURL;
    link.download = "alpaca.png";
    link.click();
  };

//make sure Styles Object keys names Match
    return(
        <div  className="Container">
            <div className="glow" ref={divRef} style={{
                height:'300px',
                width:'300px',
                position:'relative'
            }}>
                    <div className="content">
            <img src={Styles.accessories} style={{
                position:'absolute',
                zIndex:'10',
               
            }}></img>
            <img src={Styles.backgrounds} style={{
                position:'absolute'
                
            }}></img>            
            <img src={Styles.ears} style={{
                position:'absolute'
            }}></img>
            <img src={Styles.eyes} style={{
                position:'absolute',
                zIndex:'10',
            }}></img>
            <img src={Styles.hair} style={{
                position:'absolute'
            }}></img>
            <img src={Styles.leg} style={{
                position:'absolute'
            }}></img>            
            <img src={Styles.mouth} style={{
                position:'absolute',
                zIndex:'10',
            }}></img>
            <img src={Styles.Nose} style={{
                position:'absolute',
                zIndex:'9',
            }}></img>
            <img src={Styles.neck} style={{
                position:'absolute'
            }}></img>    
                    </div>
            </div>
        <button id="Shuffle" onClick={shuffle}><i className="fa-solid fa-shuffle"></i>Random</button>
        <button id="Download" onClick={downloadImage}><i className="fa-solid fa-download"></i>Download</button>
        </div>
    )
}