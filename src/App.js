import React, { Component } from 'react';

/// Modifica el componente para que se puedan agregar tareas

class App extends Component {

  state = {
    todo: '',
    list:[]
  }
  

  updateTodo = (event) => {
    this.setState({
      todo: event.target.value
    });
  }

  handleKeyPress = (event) => {
    if(event.key === 'Enter'){
      event.preventDefault();
      this.setState((prevState) => ({
        list: prevState.list.concat(prevState.todo),
        todo:''
      }));
    }
  }
  
  render() {
    return (
      <div className="wrapper">
        <div className="list">
          <h3>Por hacer:</h3>
          <ul className="todo">
            <li>Sacar la ropa</li>
            <li>Hacer la cama</li>
            <li>Leer un rato</li>
            {this.state.list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
          </ul>
           <form>
             <input type="text" 
                    id="new-task"
                    value={this.state.todo}
                    onChange={this.updateTodo} 
                    onKeyPress={this.handleKeyPress} 
                    placeholder="Ingresa una tarea y oprime Enter" 
                    />
           </form>
        </div>
      </div>
    )
  }
}


export default App;
