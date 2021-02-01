class Todo {
    constructor() {
        this.list = [];
    }

    print(customList) {
        const list = customList ? [...customList] : [...this.list];
        console.table(list);
    }

    printOnlyCompleted() {
        const filteredTasks = this.list.filter(task => task.completed);
        this.print(filteredTasks);
    }

    printOnlyNotCompleted() {
        const filteredTasks = this.list.filter(task => !task.completed);
        this.print(filteredTasks);
    }

    add(task) {
        // this.list.push({
        //     completed: false,
        //     text: task
        // });

        this.list = [...this.list, {
            completed: false,
            text: task
        }];
    }

    edit(index, updatedTask) {
        this.list[index].text = updatedTask;
    }

    completed(index) {
        this.list[index].completed = true;
    }

    delete(index) {
        this.list = this.list.filter((t, i) => i !== index);
    }

    // delete(index) {
    //     const filteredTasks = [];

    //     for (const taskIndex in this.list) {
    //         if (index !== +taskIndex) {
    //             filteredTasks.push(this.list[taskIndex]);
    //         }
    //     }

    //     this.list = filteredTasks;
    // }
}

export { Todo }