import React from 'react';

const Content = (props) => {
    function handleEnterButton(value) {
        if (window.event.keyCode === 13) {
            props.toggleEntryFocus(props.index)
        }
      }

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
