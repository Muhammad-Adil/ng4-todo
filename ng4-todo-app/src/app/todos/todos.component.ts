import { Component, OnInit, NgModule } from '@angular/core';
import { TodoService } from "../todo.service";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css'],
  providers : [ TodoService ]
})
export class TodosComponent implements OnInit {

  todos;
  text;

  constructor( private _todoService: TodoService) { }

  ngOnInit() {
    this.todos = this._todoService.getTodos();
  }

  addTodo(){
    let newTodo = {
      text: this.text
    }
    //console.log(this.text);
    this.todos.push(newTodo);
      this._todoService.addTodo(newTodo);

  }

  deleteTodo(todoText){
    for(var i = 0; i < this.todos.length; i++ ) {
      if(this.todos[i].text == todoText){
        this.todos.splice(i , 1);
      }
    }

    this._todoService.deleteTodo(todoText);
  }
}
