import React from 'react'

const AddToDoListEntry = (props) => {
    function handleAddToDoButton() {
        if (document.getElementsByClassName('input-title').length) {
            let title = document.getElementsByClassName('input-title')
            if (title[0].value === '') {
                title[0].focus()
                return;
            }
        }
        let ToDoEntryArr = document.getElementsByClassName('content')
        for (let i = 0; i < ToDoEntryArr.length; i++) {
          if (!ToDoEntryArr[i].value) {
            ToDoEntryArr[i].focus()
            return;
          }
        }
      }
    // return(
    //     <button onClick={handleAddToDoButton} className='add-to-do-list-entry'>+</button>
    // )
    return(
      <button className='add-to-do-list-entry' onClick={props.handleAddToDoListEntryButton}>+</button>
    )
}
    


export default AddToDoListEntry;