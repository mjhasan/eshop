import React from 'react';
import { Link } from 'react-router-dom';

const Headers = () => {
    return (
        <>
            <div className="ui fixed menu">
                <div className="ui container center">
                    <Link to="/">
                        <h2>E-shop</h2>
                    </Link>
                </div>
            </div>
            <br />
            <br />
            <br />
        </>
    );
};

export default Headers;