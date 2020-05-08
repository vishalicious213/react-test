import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightBright } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const SyntaxHighlighterTest = () => {
    const codeString = '(num) => num + 1';

    // const codeString = `
    //     <div>
    //         <div>Count: {count}</div>
    //         <button onClick={() => dispatch({ type: 'INCREMENT'})}>increment</button>
    //         <button onClick={() => dispatch({ type: 'DECREMENT'})}>decrement</button>
    //     </div>
    // `

    return (
        <SyntaxHighlighter 
            language='javascript' 
            showLineNumbers='true'
            style={tomorrowNightBright}
        >
            {codeString}
        </SyntaxHighlighter>
    )
}

export default SyntaxHighlighterTest;

// https://www.npmjs.com/package/react-syntax-highlighter
// demo: https://conorhastings.github.io/react-syntax-highlighter/demo/