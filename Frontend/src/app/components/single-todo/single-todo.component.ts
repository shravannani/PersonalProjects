import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.css']
})
export class SingleTodoComponent implements OnInit {
  todo:Todo;
  id:number;
  flag:Boolean = false;

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  getTodoById():void{
    console.log(this.id);

    this.todoService.getTodoById(this.id).subscribe(todo =>{
      this.todo = todo;
      console.log(todo);
    });
    

    this.flag = true;
  }

}
