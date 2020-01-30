import React from 'react';
import Title from './Title'
import ToDoListEntry from './ToDoListEntry';

const ToDoList = (props) => (
    <div className='to-do-list'>
        <table className='table'>
            <thead>
                <tr>
                    <td>
                        {/* <Title subject={props.currentToDoList.title} handleAddSubjectTitle={props.handleAddSubjectTitle}/> */}
                        <Title 
                        handleAddToDoListEntryButton={props.handleAddToDoListEntryButton} 
                        title={props.currentToDoList.title} 
                        titleToggle={props.currentToDoList.titleToggle}
                        handleAddSubjectTitle={props.handleAddSubjectTitle} 
                        toggleTitleFocus={props.toggleTitleFocus}
                        saveSubjectTitle={props.saveSubjectTitle}
                        />
                    </td>
                </tr>
            </thead>
            <tbody>
                {props.currentToDoList.entryList.length ? 
                props.currentToDoList.entryList.map(function(x) {
                        return <ToDoListEntry 
                                    key={props.currentToDoList.entryList.indexOf(x)} 
                                    data={x} 
                                    handleAddContent={props.handleAddContent} 
                                    index={props.currentToDoList.entryList.indexOf(x)} 
                                    toggleEntryFocus={props.toggleEntryFocus}
                                    isComplete={props.isComplete}
                                /> 
                     }) : null }
            </tbody>
        </table>
    </div>
)

export default ToDoList;