// src/application/usecases/CreateUser.js

import Task from "../../domain/entities/Task";
import TaskRepository from "../../domain/ports/TaskRepository";


export default class AddTask {
  private taskRepository: TaskRepository

  constructor(taskRepository: TaskRepository) {
    this.taskRepository = taskRepository;
  }

  execute(description: string): number {
    const id = this.taskRepository.generateUniqueId()
    const task = new Task(id, description, false)
    this.taskRepository.add(task)
    return task.id;
  }
}


