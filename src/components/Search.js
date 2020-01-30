import React from 'react';

const Search = (props) => (
    <div className='search-box'>
        <button className='search-button'>V</button>
        <input onKeyUp={(e) => props.handleSearch(e.target.value)} className='search-input' type='text' placeholder='검색' />
    </div>
)

export default Search;