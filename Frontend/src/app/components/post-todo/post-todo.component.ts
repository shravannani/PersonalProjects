import { Component, OnInit } from '@angular/core';
import { PostTodo } from '../../models/PostTodo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-post-todo',
  templateUrl: './post-todo.component.html',
  styleUrls: ['./post-todo.component.css']
})
export class PostTodoComponent implements OnInit {
  flag: boolean = false;
  
  todo: PostTodo;
  name: string;
  description: string;
  taskName: string;
  taskDescription: string;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {
    this.todo = {
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

    this.todoService.postTodo(this.todo).subscribe();
  }

}
