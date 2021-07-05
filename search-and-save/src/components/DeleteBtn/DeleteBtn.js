import React from 'react'; 
import './DeleteBtn.css'; 

//...props to pass all props all at once 
function DeleteBtn(props) {
    return(
        <span className='delete-btn' {...props} role='button' tabIndex='0'>
              ✗
        </span>
    ); 
}

export default DeleteBtn; 