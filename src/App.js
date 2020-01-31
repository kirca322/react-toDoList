import React from 'react';
import './css/App.css';
import Option from './components/Option';
import ToDoList from './components/ToDoList';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      subjectList: [],
      currentToDoList: {
        title: '',
        titleToggle: true,
        index: 0,
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
    this.handleAddSubjectListEntry = this.handleAddSubjectListEntry.bind(this)
    this.handleClickSubjectListEntry = this.handleClickSubjectListEntry.bind(this)
    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(value) {
    let tempSubjectList = this.state.subjectList.slice()
    let allContentArr = []
    for (let i = 0; i < tempSubjectList.length; i++) {
      for (let j = 0; j < tempSubjectList[i].entryList.length; j++) {
        allContentArr.push(tempSubjectList[i].entryList[j].content)
      }
    }
    let tempArr = allContentArr.filter(function(x) {
      return x.indexOf(value) !== -1
    })

    let resultArr = []
    for (let i = 0; i < tempArr.length; i++) {
      resultArr.push({content: tempArr[i], isCompleted: false, onFocus: false})
    }


    this.setState({
      currentToDoList: {
        // eslint-disable-next-line
        title: "'" + value + "'" + "에 대한 검색결과",
        titleToggle: false,
        index: 100,
        entryList: resultArr
      }
    })
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

  handleClickSubjectListEntry(title) {
    console.log(title)
    let tempSubjectList = this.state.subjectList.slice()
    for (let i = 0; i < tempSubjectList.length; i++) {
      if(tempSubjectList[i].title === title) {
        this.setState({
          currentToDoList: tempSubjectList[i]
        })
      }
    }
  }

  toggleTitleFocus() {
    
    let tempSubjectList = this.state.subjectList.slice()
    let tempCurrentToDoList = Object.assign({}, this.state.currentToDoList, {
      
      titleToggle: !this.state.currentToDoList.titleToggle,
      
    })
    
    
    for(let i = 0; i < tempSubjectList.length; i++) {
      if (tempSubjectList[i].index === this.state.currentToDoList.index) {
        tempSubjectList.splice(i, 1, tempCurrentToDoList)
      } 
    }
    
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
    let inputDuring = document.getElementsByClassName('content2')
    if (inputDuring[0]) {
      inputDuring[0].focus()
      return;
    }
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
    let tempCurrentToDoList = Object.assign({}, this.state.currentToDoList, {
      title: str,
      titleToggle: this.state.currentToDoList.titleToggle
    })
    this.setState({
      currentToDoList: tempCurrentToDoList
    })
  }

  handleAddSubjectListEntry() {
    let tempSubjectList = this.state.subjectList.slice()
    let tempCurrentToDoList = {
      title: '',
      titleToggle: true,
      index: this.state.subjectList.length,
      entryList: []
    }
    tempSubjectList.push(tempCurrentToDoList)
    this.setState({
      subjectList: tempSubjectList,
      currentToDoList: tempCurrentToDoList
    })
  }

  saveSubjectTitle() {
    let tempSubjectList = this.state.subjectList.slice()
    let tempCurrentToDoList = Object.assign({}, this.state.currentToDoList, {
      
      titleToggle: !this.state.currentToDoList.titleToggle,
      
    })
    if (tempSubjectList.length === 0) {
      tempSubjectList.push(tempCurrentToDoList)
    }
    for(let i = 0; i < tempSubjectList.length; i++) {
      if (tempSubjectList[i].index === this.state.currentToDoList.index) {
        tempSubjectList.splice(i, 1, tempCurrentToDoList)
      } 
    }

    
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
        <Option 
          subjectList={this.state.subjectList} 
          handleAddSubjectListEntry={this.handleAddSubjectListEntry} 
          handleClickSubjectListEntry={this.handleClickSubjectListEntry}
          handleSearch={this.handleSearch}
        />
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
