package com.todo.rest.controller;

import com.todo.rest.model.TaskDel;
import com.todo.rest.model.Todo;
import com.todo.rest.model.Tasks;
import com.todo.rest.repository.TasksRepository;
import com.todo.rest.repository.TodoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/dev")
public class TodoController {
    @Autowired
    private TodoRepository todoRepository;
    @Autowired
    private TasksRepository taskRepository;

    @GetMapping("/todo")
    public List<Todo> getAlltodos() {
        return todoRepository.findAll();
    }

    @GetMapping("/GetTodoById/{id}")
    public Todo getTodoById(@PathVariable Long id) throws Exception {
        Todo todo = todoRepository.findById(id).orElse(null);
        return todo;
    }

    @PostMapping("/todo")
    public Todo postTodo(@RequestBody Todo todoList) throws Exception {
        Todo _todo = new Todo();
        _todo.name = todoList.name;
        _todo.description = todoList.description;
        List<Tasks> taskList = todoList.task;
        List<Tasks> Alltasks = new ArrayList<Tasks>();
        for(Tasks myTask : taskList){
            myTask = taskRepository.save(myTask);
            Alltasks.add(myTask);
        }
        _todo.task = Alltasks;
        _todo = todoRepository.save(_todo);
        return _todo;
    }

    @PutMapping("/todo")
    public Todo putTodo(@RequestBody Todo taskAdd){
        Todo todo = todoRepository.findById(taskAdd.id).orElse(null);
        todo.name = taskAdd.name;
        todo.description = taskAdd.description;
        List<Tasks> MainTaskList = todo.task;
        List<Tasks> taskList = taskAdd.task;
        for(Tasks myTask : taskList){
            myTask = taskRepository.save(myTask);
            MainTaskList.add(myTask);
        }
        todo.task = MainTaskList;
        todo = todoRepository.save(todo);
        return todo;
    }

    @DeleteMapping("/todo")
    public Todo delTodo(@RequestBody TaskDel taskDel){
        Todo todo = todoRepository.findById(taskDel.id).orElse(null);
        List<Tasks> taskList = todo.task;
        List<Tasks> newList = new ArrayList<Tasks>();
        Tasks delTask = null;
        for(Tasks task : taskList){
            if(task.id == taskDel.Sid){
                delTask = task;
                continue;
            }
            newList.add(task);
        }
        if(delTask == null) return todo;
        todo.task = newList;
        todo = todoRepository.save(todo);
        return todo;
    }

    @DeleteMapping("/MainTodo/{id}")
    public String delMainTask(@PathVariable Long id) throws Exception{
        todoRepository.deleteById(id);
        return "success";
    }
}

