import React from 'react';

const CheckBox = (props) => (
    <input type='checkbox' className='check-box' onClick={() => props.isComplete(props.index)} ></input>
)

export default CheckBox;