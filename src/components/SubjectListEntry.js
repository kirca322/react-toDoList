import React from 'react';

const SubjectListEntry = (props) => (
    
    <div onClick={() => props.handleClickSubjectListEntry(props.subject)} className='subject-entry'>{props.subject}</div>
    
)

export default SubjectListEntry