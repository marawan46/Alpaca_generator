import { useState } from "react";

export default CategoryOptions






function CategoryOptions({SelectedOption, Styles ,ChangeStyles, options}){
    const [SelectedStyle, SetSelectedStyle] = useState("");//to make selectd btn active


    function EditStyle(e){
        SetSelectedStyle(e.target.name);
        const NewStyle = {
            ...Styles,
            [SelectedOption]: "alpaca/" + SelectedOption + '/' + e.target.name + '.png'
        }
        console.log(NewStyle)
        ChangeStyles(NewStyle);
    }

    const SelectedOptionBtns = options[SelectedOption]?.map((item,index)=>{
        return(
            <button key={index} name={item} className={SelectedStyle == item ? "active":""} onClick={EditStyle}>{item}</button>
        )
    })
    return(
        <div className="CatOptionContainer">
            {SelectedOptionBtns}
        </div>
    )
}