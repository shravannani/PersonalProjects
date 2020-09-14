package com.todo.rest.repository;

import com.todo.rest.model.Tasks;
import com.todo.rest.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface TodoRepository extends JpaRepository<Todo, Long> {
    List<Tasks> findByName(String name);
}
