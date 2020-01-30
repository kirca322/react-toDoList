import React from 'react';

const AddSubjectListEntry = (props) => (
    <div className='add-subject-list-entry'>
        <button onClick={props.handleAddSubjectListEntry} className='add-subject-button'>+</button>
        <span className='add-subject-button-explain'>목록추가</span>
    </div>
)

export default AddSubjectListEntry;