import React from 'react';

const Component1 = (props) => {
    return (
        <div>
            <h1>Hello, {props.name}</h1>
            <h2>He is {props.age} years old</h2>
        </div>
    );
};

export default Component1;