import React, { useState } from 'react';

function HandleEvents() {
    const [someValue, setSomeValue] = useState('');

    // Event handlers (need CONST or FUNCTION in function component)
    const singleClickHandler = () => alert("Single Click!");
    const doubleClickHandler = () => alert("Double Clicked!");
    const mouseEnterHandler = () => alert("Mouse Entered");
    // const changeHandler = () => alert("Item was changed");
    // const changeHandler = event => alert(event.target.value);
    const changeHandler = event => {
        setSomeValue(event.target.value);
    };

    return (
        console.log(someValue),
        <div style={{padding: '.5rem'}} className="App">
            <h1>Hello Function Component Handlers</h1>
            <h2>Lets build out some handler functions.</h2>
            <button onClick={singleClickHandler}>Click Handler Demo</button>
            <button onDoubleClick={doubleClickHandler}>Double Click Handler</button>
            <div style={{border: '1px solid gray', background: 'gainsboro', width: '300px'}} onMouseEnter={mouseEnterHandler}>Mouse Enter</div>
            <input onChange={changeHandler} placeholder="Change my input" />
        </div>
    )
}

export default HandleEvents;

// For a class component, the event handlers need to be binded to the event with "this"
//            <button onClick={this.singleClickHandler}>Click Handler Demo</button>
//            <button onDoubleClick={this.doubleClickHandler}>Double Click Handler</button>
//            <div onMouseEnter={this.mouseEnterHandler}>Mouse Enter</div>
//            <input onChange={this.changeHandler} placeholder="Change my input" />