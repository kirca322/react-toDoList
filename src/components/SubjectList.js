import React from 'react';
import SubjectListEntry from './SubjectListEntry'

const SubjectList = (props) => (
    <div>
        <div className='title-list'>Title List</div>
        {props.subjectList.map(function(x) {
            return (   
            <SubjectListEntry 
            key={props.subjectList.indexOf(x)} 
            subject={x.title}
            handleClickSubjectListEntry={props.handleClickSubjectListEntry}
            />)
        })}
    </div>
)

export default SubjectList;