(function () {
    'use strict';

    class Task{
        constructor(info){
            this.info = info;
        }
        run(){
            console.log(this.info);
        }
    }

    class User{
        constructor(Task){
            this.Task = Task;
        }
        do(){
            this.Task.run();
        }
    }

    const task = new Task('hello');
    const user = new User(task);
    user.do();

})();
