import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Todo } from '../models/Todo';
import { Observable } from 'rxjs';
import { PostTodo } from '../models/PostTodo';
import {PutTodo } from '../models/PutTodo';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todosURL:string = "http://localhost:8080/dev/todo";
  todosURL2:string = "http://localhost:8080/dev/GetTodoById";
  todosURL3:string = "http://localhost:8080/dev/MainTodo";

  constructor(private http:HttpClient) { }

  getTodoById(id:number):Observable<Todo>{
    const todoByIdURL = `${this.todosURL2}/${id}`;

    return this.http.get<Todo>(todoByIdURL);
  }

  getTodos():Observable<Todo[]>{
    return this.http.get<Todo[]>(this.todosURL);
  }

  deleteById(id:number):Observable<Todo>{
    const todoDeleteURL = `${this.todosURL3}/${id}`;
    
    return this.http.delete<Todo>(todoDeleteURL, httpOptions);
  }

  postTodo(todo:PostTodo):Observable<Todo>{
    return this.http.post<Todo>(this.todosURL, todo, httpOptions);
  }

  putTodo(todo:PutTodo):Observable<Todo>{
    return this.http.put<Todo>(this.todosURL, todo, httpOptions);
  }

}
