import React, { useState } from 'react';

function ButtonMaker() {
    const [color, setColor] = useState('#FFFFFF');

    const changeColor = array => {
        setColor(array[Math.floor(Math.random() * array.length)]);
    }

    return (
        <div className='ButtonMaker'
            style={{display: "flex", justifyContent: "center"}}>
            <Button color={color} changeColor={changeColor} />
        </div>
    )
}

const Button = props => {
    const colors = [
        "#FFBAAA",
        "#27576B",
        "#D47F6A",
        "#AA7539",
        "#003D19",
        "#6E91A1",
        "#552D00"
    ];

    return (
        <button
            style={{ background: props.color, height: "3rem", width: "12rem", marginTop: "1rem"}}
            onClick={() => props.changeColor(colors)}
        >
            Click Me!
        </button>
    )
}

export default ButtonMaker;