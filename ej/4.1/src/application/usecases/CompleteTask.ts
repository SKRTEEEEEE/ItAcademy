import TaskRepository from "../../domain/ports/TaskRepository";

export default class CompleteTask {
    private taskRepository: TaskRepository;

    constructor(taskRepository: TaskRepository) {
        this.taskRepository = taskRepository;
    }

    execute(id: number): void {
        this.taskRepository.complete(id)
    }
}