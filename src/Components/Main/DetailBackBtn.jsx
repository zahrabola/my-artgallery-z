import React from 'react';
import { useNavigate } from 'react-router-dom';

const DetailBackBtn = () => {

    const navigate = useNavigate();
    const handleClickgallery = () => {
        navigate('/gallery')
    }
    return (
       
             <div className='backbtn '>
            <button onClick={handleClickgallery}>  &larr; Back to Gallery</button>
        </div>
        
    );
}

export default DetailBackBtn;
