import React from 'react';
import Search from './Search';
import SubjectList from './SubjectList';
import AddSubjectListEntry from './AddSubjectListEntry'

const Option = (props) => (
    <div className='option'>
        {/* <Search />
        <SubjectList subjectList={props.subjectList} />
        <AddSubjectListEntry /> */}
        <Search />
        <SubjectList subjectList={props.subjectList} />
        <AddSubjectListEntry />
    </div>
)

export default Option;