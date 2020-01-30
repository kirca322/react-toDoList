import React from 'react';
import './css/App.css';
import Option from './components/Option';
import ToDoList from './components/ToDoList';

/*
state 구조
this.state = {
  subjectList: [currentToDoList1, currentToDoList2, currentToDoList3],
  currentToDoList: {
    title: '',
    titleToggle: true,
    entryList: [{content: '~~~', isCompleted: false}, {content: '~~~', isCompleted: false}]
  }
}

1. 초기화면에서 제목을 입력한후 엔터를 치면,
    state : 
        1) currentToDoList의 title값이 입력한값으로 바뀌고, entryList에 더미데이터({content: '', isCompleted: fase})가 들어간다.
        2) currentToDoList가 subjectList로 push된다.

    view : 
        1) SubjectList에 S.L.Entry가 추가된다 (state.subjectList[0].title 을 가져와서 표시)
        2) Title에 Subject가 input이 아닌 div로 바뀌어서 (state.currentToDoList.title)값으로 바뀐다.
        3) T.D.L.Entry가 state.currentToDoList.entryList를 받아와 mapping하여 조건문으로 분기한다. 조건문(content==='' ? input태그 : checkBox와 input태그)
        
2. 할일을 입력하고 엔터(할일칸 밖으로 커서이동)를 치면 
    state: state.currentToDoList.entryList[key].content를 입력받은값으로 바꾸어서 setState실행

3. 입력을 완료한 할일을 클릭하면,
    1-view-3)의 input태그를 가져와 다시 입력받음

4. checkBox를 체크표시로 바꾸면,
    state: 
        1) state.currentToDoList.entryList[key].isCompleted = true로 바꾸어서 setState 실행
        2) 이때, isCompleted가 true이면 특정 스타일을 적용시키기
*/



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      subjectList: [],
      currentToDoList: {
        title: '',
        titleToggle: true,
        entryList: []
      }
    }
    this.forIndexNumber = 0;
    this.handleAddSubjectTitle = this.handleAddSubjectTitle.bind(this)
    this.handleAddContent = this.handleAddContent.bind(this)
    this.handleAddToDoListEntryButton = this.handleAddToDoListEntryButton.bind(this)
    this.toggleEntryFocus = this.toggleEntryFocus.bind(this)
    this.toggleTitleFocus = this.toggleTitleFocus.bind(this)
    this.saveSubjectTitle = this.saveSubjectTitle.bind(this)
    this.isComplete = this.isComplete.bind(this)
  }

  isComplete(index) {
    let tempSubjectList = this.state.subjectList.slice()
    let tempEntryList = this.state.currentToDoList.entryList.slice()
    tempEntryList.splice(index, 1, {
      content: tempEntryList[index].content,
      isCompleted: !this.state.currentToDoList.entryList[index].isCompleted,
      onFocus: tempEntryList[index].onFocus
    })
    let tempCurrentToDoList = Object.assign({}, this.state.currentToDoList, {
      entryList: tempEntryList
    })
    for (let i = 0; i < tempSubjectList.length; i++) {
      if (tempCurrentToDoList.title === tempSubjectList[i].title) {
        tempSubjectList.splice(i, 1, tempCurrentToDoList)
        this.setState({
          subjectList: tempSubjectList,
          currentToDoList: tempCurrentToDoList
        })
      }
    }
  }

  componentDidUpdate() {
    let content2Arr = document.getElementsByClassName('content2')
    let contentArr = document.getElementsByClassName('content')
    let titleArr = document.getElementsByClassName('input-title2')
    if (titleArr[0]) {
      titleArr[0].focus()
    }
    if(content2Arr[0]) {
      content2Arr[0].focus()
    }
    for (let i = 0; i < contentArr.length; i++) {
      if (contentArr[i].value === '') {
        contentArr[i].focus()
      }
    }
  }

  toggleTitleFocus() {
    
    let tempSubjectList = this.state.subjectList.slice()
    let tempCurrentToDoList = Object.assign({}, this.state.currentToDoList, {
      
      titleToggle: !this.state.currentToDoList.titleToggle,
      
    })
    tempSubjectList.push(tempCurrentToDoList)
    this.setState({
      subjectList: tempSubjectList,
      currentToDoList: tempCurrentToDoList
    })
  }

  toggleEntryFocus(index) {
    let tempSubjectList = this.state.subjectList.slice()
    let tempEntryList = this.state.currentToDoList.entryList.slice()
    tempEntryList.splice(index, 1, {
      content: tempEntryList[index].content,
      isCompleted: false,
      onFocus: !tempEntryList[index].onFocus
    })
    let tempCurrentToDoList = Object.assign({}, this.state.currentToDoList, {
      entryList: tempEntryList
    })
    for (let i = 0; i < tempSubjectList.length; i++) {
      if (tempCurrentToDoList.title === tempSubjectList[i].title) {
        tempSubjectList.splice(i, 1, tempCurrentToDoList)
        this.setState({
          subjectList: tempSubjectList,
          currentToDoList: tempCurrentToDoList
        })
      }
    }
  }

  handleAddToDoListEntryButton() {
    let tempSubjectList = this.state.subjectList.slice()
    let tempEntryList = this.state.currentToDoList.entryList.slice()
    tempEntryList.push({content: '', isCompleted: false, onFocus: false})
    let tempCurrentToDoList = Object.assign({}, this.state.currentToDoList, {
      entryList: tempEntryList
    })
    for (let i = 0; i < tempSubjectList.length; i++) {
      if (tempCurrentToDoList.title === tempSubjectList[i].title) {
        tempSubjectList.splice(i, 1, tempCurrentToDoList)
        this.setState({
          subjectList: tempSubjectList,
          currentToDoList: tempCurrentToDoList
        })
      }
    }
  }

  handleAddSubjectTitle(str) {
    let tempSubjectList = this.state.subjectList.slice()
    let tempCurrentToDoList = Object.assign({}, this.state.currentToDoList, {
      title: str,
      titleToggle: this.state.currentToDoList.titleToggle
    })
    tempSubjectList.push(tempCurrentToDoList)
    this.setState({
      //subjectList: tempSubjectList,
      currentToDoList: tempCurrentToDoList
    })
  }

  saveSubjectTitle() {
    let tempSubjectList = this.state.subjectList.slice()
    let tempCurrentToDoList = Object.assign({}, this.state.currentToDoList, {
      
      titleToggle: !this.state.currentToDoList.titleToggle,
      
    })

    tempSubjectList.push(tempCurrentToDoList)
    this.setState({
      subjectList: tempSubjectList,
      currentToDoList: tempCurrentToDoList
    })
  }

  handleAddContent(str, index) {
    let tempSubjectList = this.state.subjectList.slice()
    let tempEntryList = this.state.currentToDoList.entryList.slice()
    tempEntryList.splice(index, 1, {
      content: str,
      isCompleted: false,
      onFocus: tempEntryList[index].onFocus
    })
    let tempCurrentToDoList = Object.assign({}, this.state.currentToDoList, {
      entryList: tempEntryList
    })
    for (let i = 0; i < tempSubjectList.length; i++) {
      if (tempCurrentToDoList.title === tempSubjectList[i].title) {
        tempSubjectList.splice(i, 1, tempCurrentToDoList)
        this.setState({
          subjectList: tempSubjectList,
          currentToDoList: tempCurrentToDoList
        })
      }
    }
    
  }

  render() {
    return(
      <div>
        {/* <Option subjectList={this.state.subjectList} />
        <ToDoList hadleAddContent={this.hadleAddContent} currentToDoList={this.state.currentToDoList} handleAddSubjectTitle={this.handleAddSubjectTitle}/> */}
        <Option subjectList={this.state.subjectList} />
        <ToDoList 
          currentToDoList={this.state.currentToDoList} 
          handleAddSubjectTitle={this.handleAddSubjectTitle} 
          handleAddContent={this.handleAddContent}
          handleAddToDoListEntryButton={this.handleAddToDoListEntryButton} 
          toggleEntryFocus={this.toggleEntryFocus} 
          toggleTitleFocus={this.toggleTitleFocus}
          saveSubjectTitle={this.saveSubjectTitle}
          isComplete={this.isComplete}
        />
      </div>
    )
  }
}

export default App;
