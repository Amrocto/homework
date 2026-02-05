
export class User{
    constructor(Task){
        this.Task = Task;
    }
    do(){
        Task.run();
    }
}