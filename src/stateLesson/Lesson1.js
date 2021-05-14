import React from 'react';
import PropTypes from 'prop-types';

class Lesson1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "Javohir",
            age: 17,
            job: "Frontend Developer",
            date: new Date()
        };
    }

    render() {
        // console.log(this.state);
        return (
            <>
                <h1>My name is {this.state.name}</h1>
                <p>he is {this.state.age} years old</p>
                <h2>He is {this.state.job}</h2>

                <h1>It is {this.state.date.toLocaleDateString()}</h1>
            </>
        );
    }
}

export default Lesson1;
