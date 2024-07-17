import TaskRepository from "../../domain/ports/TaskRepository";


export default class DeleteTask {
    private taskRepository: TaskRepository

    constructor(taskRepository: TaskRepository){
        this.taskRepository = taskRepository
    }

    execute(id: number): void {
        return this.taskRepository.delete(id)
    }
}