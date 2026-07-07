
function PersonalAssistant(name){
    this.name = name; 
    this.tasks = [];
    this.mood = null;
}

PersonalAssistant.prototype.addTask = function(task) {
    this.tasks.push(task);
    console.log(`Added ${task} task.`);
}

