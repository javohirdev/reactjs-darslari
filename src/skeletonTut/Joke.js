import React from 'react';
import Skeleton from 'react-loading-skeleton';

const Joke = ({ joke, loading, getNewJoke }) => {
    return (
        <div className="joke">
            {loading ? <Skeleton circle={true} width={70} height={70} /> : <img src={joke.icon_url} height="60px" width="60px" />}
            <h1>{loading ? <Skeleton /> : joke.value}</h1>

            <button onClick={getNewJoke}>Get New Joke</button>
        </div>
    );
};

export default Joke;