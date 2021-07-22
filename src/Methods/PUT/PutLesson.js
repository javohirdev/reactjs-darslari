import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PutLesson = () => {

    const [updatedAt, setUpdatedAt] = useState(null);

    useEffect(() => {
        axios.put('https://reqres.in/api/articles/1')
            .then((response) => {
                setUpdatedAt(response.data.updatedAt);
                console.log(response);
            })
    }, []);
    
    return (
        <div>
            <div className="card">
                <div className="header">
                    PUT Request
                </div>
                <div className="body">
                    Returned update date: {updatedAt}
                </div>
            </div>
        </div>
    );
};

export default PutLesson;