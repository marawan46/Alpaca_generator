export default Categories




function Categories({ChangeCategoryOptions,SelectedCat}){
    //add category name here and Add it again with it's options in CategoryOptions component
    const CategoriesNames = [
        "backgrounds",
        "accessories",
        "ears",
        "eyes",
        "hair",
        "leg",
        "mouth",
        "neck"
    ]

    const CategoriesBtns = CategoriesNames.map((names)=>{
        return <button key={names+"btn"} name={names} className={SelectedCat == names ? "active":""} onClick={(e)=>{ChangeCategoryOptions(e.target.name)}}>{names}</button>
    })

    return(
        <div className="CatContainer">
            {CategoriesBtns}
        </div>
    )
}