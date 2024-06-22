import React from 'react';
import { useNavigate } from 'react-router-dom';

const Backbtn = () => {

    const navigate = useNavigate();
const handleClickBack = () => {
    navigate('/')
}

    return (
        <div className='backbtn '>
            <button onClick={handleClickBack}>  &larr; Back to Homepage</button>
        </div>
    );
}

export default Backbtn;
