import React from 'react'

const AddToDoListEntry = (props) => {
    return(
      <button className='add-to-do-list-entry' onClick={props.handleAddToDoListEntryButton}>+</button>
    )
}
    


export default AddToDoListEntry;