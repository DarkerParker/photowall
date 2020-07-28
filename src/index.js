import React, {Component} from 'react'
import ReactDOM from 'react-dom'

const tasks = ['Take out the trash','Take out the trash', 'Walk the dogs', 'Buy groceries']

class List extends Component{

  render(){
    return (<ol>
              { tasks.map((task, index) => <li key = {index}>{task}</li>) }
            </ol>)
  }

}

class Title extends Component{
  render(){
    return (<h1>Task list!</h1>)
  }
}

class Main extends Component{
  render(){
    return (<div>
      <Title/>
      <List/>
      <List/>
      <List/>
    </div>)
  }
}

ReactDOM.render(<Main/>, document.getElementById('root'))