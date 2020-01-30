import React from 'react';

const Content = (props) => {
    function handleEnterButton(value) {
        if (window.event.keyCode === 13) {
            // let ToDoEntryArr = document.getElementsByClassName('content')
            // for (let i = 0; i < ToDoEntryArr.length; i++) {
            //     if (!ToDoEntryArr[i].value) {
            //         ToDoEntryArr[i].focus()
            //         break;
            //     }
            // }
            
            props.toggleEntryFocus(props.index)
        }
      }

    // if(props.data) {
    //     return(
    //         <input type='text' value={props.data.content} className='content' onKeyDown={(e) => handleEnterButton(e.target.value)}></input>
    //     )
    // } else {
    //     return (
    //         <input type='text' className='content' onKeyDown={(e) => handleEnterButton(e.target.value)}></input>
    //     )
    // }
    if(props.data.onFocus === false) {
        if (props.data.isCompleted) {
            return(
                <input 
                    style={{textDecoration: 'line-through'}}
                    type='text' 
                    className='content' 
                    value={props.data.content}
                    onFocus={() => props.toggleEntryFocus(props.index)}
                    onChange={function(){}}
                    //onKeyUp={(e) => handleEnterButton(e.target.value)}
                />
            )
        } else {
            return (
                <input 
                    
                    type='text' 
                    className='content' 
                    value={props.data.content}
                    onFocus={() => props.toggleEntryFocus(props.index)}
                    onChange={function(){}}
                    //onKeyUp={(e) => handleEnterButton(e.target.value)}
                />
            )
        }
        
    } else {
        return (
            <input 
                type='text' 
                value={props.data.content} 
                className='content2' 
                onChange={(e) => props.handleAddContent(e.target.value, props.index)} 
                onKeyUp={(e) => handleEnterButton(e.target.value)} 
            />
        )
    }
    
}

export default Content;
