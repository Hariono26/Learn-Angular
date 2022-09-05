import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  // name = 'Angular ' + VERSION.major;
  
  // state
  todos: string[] = []
  todoText = ''

  //lifecycle
  ngOnInit() {
    const existingTodos = localStorage.getItem('todos')
    this.todos = JSON.parse(existingTodos as string) || []
  }

  // events
  addTodo() {
    this.todos.push(this.todoText)
    localStorage.setItem('todos', JSON.stringify(this.todos))
  }
}

