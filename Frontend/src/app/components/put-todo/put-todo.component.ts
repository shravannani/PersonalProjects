import { Component, OnInit } from '@angular/core';
import { PutTodo } from '../../models/PutTodo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-put-todo',
  templateUrl: './put-todo.component.html',
  styleUrls: ['./put-todo.component.css']
})
export class PutTodoComponent implements OnInit {
  flag: boolean = false;

  id:number;
  todo: PutTodo;
  name: string;
  description: string;
  taskName: string;
  taskDescription: string;

  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
    this.todo = {
      id: 0,
      name: "",
      description: "",
      task: [
        {
          name: "",
          description: "",
        }
      ]
    }
  }

  toggleFlag(): void {
    this.flag = true;

    this.todo = {
      id: this.id,
      name: this.name,
      description: this.description,
      task: [
        {
          name: this.taskName,
          description: this.taskDescription,
        }
      ]
    }

    console.log(this.todo);

    this.todoService.putTodo(this.todo).subscribe();
  }

}
