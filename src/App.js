import './App.css';
import { useState } from 'react';
import PicWindow from './PicWindow';
import Categories from './Categories';
import CategoryOptions from './CategoryOptions';


function App() {
    const [SelectedCategoryOption, SetSelectedCategoryOption] = useState("Ears")
    
    const [AlpacaStyles,SetAlpacaStyles] = useState({
    accessories:"alpaca/accessories/earings.png",
    backgrounds:"alpaca/backgrounds/blue50.png",
    ears:"alpaca/ears/default.png",
    eyes:"alpaca/eyes/angry.png",
    hair:"alpaca/hair/bang.png",
    leg:"alpaca/leg/bubble-tea.png",
    mouth:"alpaca/mouth/default.png",
    neck:"alpaca/neck/default.png",
    Nose:"alpaca/nose.png"
})
    //add category option and it's options here
    const options = {
    accessories:["earings","flower","glasses","headphone"],
    backgrounds:["blue50","blue60","blue70", "darkblue30","darkblue50","darkblue70","green50","green60","green70","grey40","grey70","grey80","red50","red60","red70","yellow50","yellow60","yellow70"],
    ears:["default","tilt-backward","tilt-forward"],
    eyes:["angry","default","naughty","panda","smart","star"],
    hair:["bang","curls","default","elegant","fancy","quiff","short"],
    leg:["bubble-tea","cookie","default","game-console","tilt-backward","tilt-forward"],
    mouth:["astonished","default","laugh","tongue"],
    neck:["bend-backward","bend-forward","default","thick"],
    }
    return(
        <div className="Container">
        <PicWindow Styles={AlpacaStyles} ChangeStyles={SetAlpacaStyles} options={options} />

        <Categories ChangeCategoryOptions={SetSelectedCategoryOption} SelectedCat={SelectedCategoryOption}/>

        <CategoryOptions  SelectedOption={SelectedCategoryOption} Styles={AlpacaStyles} options={options} ChangeStyles={SetAlpacaStyles} />
    </div>
    )
}

export default App;
