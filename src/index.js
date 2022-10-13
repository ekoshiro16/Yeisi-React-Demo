import React, {useState} from 'react';
import ReactDOM from 'react-dom'
import BestFriend from './components/BestFriend';

const YeisiDemo = () => {
    const [faveColor, setFaveColor] = useState("red"); 
    //      GETTER     SETTER 
    
    function changeFavoriteColor() {
        setFaveColor("blue")
    }

    return (
        <div>
            <p>I am a demo component;</p>

            <BestFriend friendsFaveColor={faveColor} changeFavoriteColorFunc={changeFavoriteColor}/>

            <p>My fave color: {faveColor}</p>
            <button onClick={changeFavoriteColor}>Change My Color</button>
        </div>
    )
};

ReactDOM.render(<YeisiDemo />, document.getElementById("app"))