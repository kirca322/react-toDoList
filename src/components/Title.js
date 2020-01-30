import React from 'react';
import AddToDoListEntry from './AddToDoListEntry';
import Subject from './Subject';

const Title = (props) => (
    <div className='title'>
        <Subject 
            title={props.title} 
            titleToggle={props.titleToggle} 
            handleAddSubjectTitle={props.handleAddSubjectTitle}
            toggleTitleFocus={props.toggleTitleFocus}
            saveSubjectTitle={props.saveSubjectTitle}
        />
        <AddToDoListEntry handleAddToDoListEntryButton={props.handleAddToDoListEntryButton}/>
    </div>
)

export default Title;