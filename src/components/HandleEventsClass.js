import React from 'react';

class HandleEventsClass extends React.Component {
    constructor() {
        super();
        this.state={
            someValue: '',
        };
    }
    // Event handlers (don't need CONST or FUNCTION in class component)
    singleClickHandler = () => alert("Single Click!");
    doubleClickHandler = () => alert("Double Clicked!");
    mouseEnterHandler = () => alert("Mouse Entered");
    // changeHandler = () => alert("Item was changed");
    // changeHandler = event => alert(event.target.value);
    changeHandler = event => {
        this.setState({someValue: event.target.value});
    };

    render() {
        console.log(this.state.someValue);
        return (
            <div style={{padding: '.5rem'}} className="App">
                <h1>Hello Class Component Handlers</h1>
                <h2>Lets build out some handler functions.</h2>
                <button onClick={this.singleClickHandler}>Click Handler Demo</button>
                <button onDoubleClick={this.doubleClickHandler}>Double Click Handler</button>
                <div style={{border: '1px solid gray', background: 'gainsboro', width: '300px'}} onMouseEnter={this.mouseEnterHandler}>Mouse Enter</div>
                <input onChange={this.changeHandler} placeholder="Change my input" />
            </div>
        )
    }
}

export default HandleEventsClass;

// For a function component, the event handlers need to have "this" removed
//            <button onClick={singleClickHandler}>Click Handler Demo</button>
//            <button onDoubleClick={doubleClickHandler}>Double Click Handler</button>
//            <div onMouseEnter={mouseEnterHandler}>Mouse Enter</div>
//            <input onChange={changeHandler} placeholder="Change my input" />