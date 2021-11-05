import React from 'react';
import {Link} from "react-router-dom";

const Error = ({error}) => (
    <div className="container">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={() => <Link to="/"/>}>Try again</button>
    </div>
);

export default Error;