import React from 'react';

class Nimadir extends React.Component {

    constructor(){
        super();
        console.log("Constructor is working...")
    }

    componentDidMount(){
        console.log("ComponentDidMount is working...")
    }

    componentWillMount(){
        console.log("ComponentWillMount is working...")
    }

    render() {
        console.log("Render is working...")
        return (
            <div>
                
            </div>
        );
    }
}

export default Nimadir;