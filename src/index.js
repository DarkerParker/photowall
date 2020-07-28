import React, {Component} from 'react'
import ReactDOM from 'react-dom'


class List extends Component{

  render(){
    return (<ol>
              { this.props.tasks.map((task, index) => <li key = {index}>{task}</li>) }
            </ol>)
  }

}

class Title extends Component{
  render(){
  return (<h1>{this.props.title}</h1>)
  }
}

class Main extends Component{
  render(){
    return (<div>
      <Title title = {"Todos:"}/>
      <List tasks = {['Mow the lawn','Feed fish','Clean aquarium']}/>
      <List tasks = {['Hose the driveway','Finish the laundry']}/>
    </div>)
  }
}

ReactDOM.render(<Main/>, document.getElementById('root'))