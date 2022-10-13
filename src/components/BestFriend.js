import React from 'react';

const BestFriend = (props) => {
    console.log("I am the best friend props: ", props)
 
    // let isMyFriendStingy

    // if (props.gift < 100) {
    //     isMyFriendStingy = "yes"
    // } else {
    //     isMyFriendStingy = "no"
    // }

    return (
        <div>
            <p>I am the best friend component!</p>

            {/* <p>I got this gift from my friend: {props.gift}</p>
            <p>Is my friend stingy? {isMyFriendStingy}</p> */}

            <p>Actually, my favorite color is: {props.friendsFaveColor}</p>
            <button onClick={props.changeFavoriteColorFunc}>Bite My Friends Style</button>
        </div>
    )
};

export default BestFriend; 