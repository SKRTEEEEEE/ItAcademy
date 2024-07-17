import Task from "../../domain/entities/Task";
import TaskRepository from "../../domain/ports/TaskRepository";

export default class ListTasks {
    private taskRepository: TaskRepository

    constructor(taskRepository: TaskRepository) {
        this.taskRepository = taskRepository
    }

    public execute(): Task[] {
        return this.taskRepository.list()
    }
}