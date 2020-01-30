import React from 'react';
import CheckBox from './CheckBox';
import Content from './Content';

const ToDoListEntry = (props) => {
    if (props.data.onFocus === true) {
        return (
            <tr className='entry-tr'>
                <td>
                    <Content 
                    data={props.data} 
                    toggleEntryFocus={props.toggleEntryFocus} 
                    index={props.index} 
                    handleAddContent={props.handleAddContent} 
                    />
                </td>
            </tr>
        )
    } else {
        return (
            <tr className='entry-tr'>
                <td>
                    <CheckBox index={props.index} isComplete={props.isComplete} />
                    <Content 
                        toggleEntryFocus={props.toggleEntryFocus} 
                        index={props.index} 
                        data={props.data} 
                        handleAddContent={props.handleAddContent} 
                    />
                </td>
            </tr>
        )
    }
}
export default ToDoListEntry;