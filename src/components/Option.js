import React from 'react';
import Search from './Search';
import SubjectList from './SubjectList';
import AddSubjectListEntry from './AddSubjectListEntry'

const Option = (props) => (
    <div className='option'>
        {/* <Search />
        <SubjectList subjectList={props.subjectList} />
        <AddSubjectListEntry /> */}
        <Search handleSearch={props.handleSearch} />
        <SubjectList subjectList={props.subjectList} handleClickSubjectListEntry={props.handleClickSubjectListEntry} />
        <AddSubjectListEntry handleAddSubjectListEntry={props.handleAddSubjectListEntry} />
    </div>
)

export default Option;