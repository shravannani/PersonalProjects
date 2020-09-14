import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-delete-todo',
  templateUrl: './delete-todo.component.html',
  styleUrls: ['./delete-todo.component.css']
})
export class DeleteTodoComponent implements OnInit {
  message:string;
  id:number;
  flag:boolean;
  constructor(private todoService:TodoService) { }

  ngOnInit(): void {
  }

  deleteById():void{

    // delete todo by Id using service 
    this.todoService.deleteById(this.id).subscribe();
    
    // update flag for success message
    this.flag = true;
  }

}
