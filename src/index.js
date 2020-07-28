import React from 'react'
import ReactDOM from 'react-dom'

const tasks = ['Take out the trash','Take out the trash', 'Walk the dogs', 'Buy groceries']

const element = 
    <div>
      <h1>
        Task list!
      </h1>
      <ol>
        { tasks.map((task, index) => <li key = {index}>{task}</li>) }
      </ol>
    </div>
ReactDOM.render(element, document.getElementById('root'))