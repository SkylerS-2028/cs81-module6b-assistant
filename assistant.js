
function PersonalAssistant(name){
    this.name = name; 
    this.tasks = [];
    this.mood = null;
}

PersonalAssistant.prototype.addTask = function(task) {
    this.tasks.push(task);
    console.log(`Added '${task}' task.`);
}

PersonalAssistant.prototype.completeTask = function(){
    console.log(`You have completed '${this.tasks[0]}' task.`);
    this.tasks.shift();
}

PersonalAssistant.prototype.reportMood = function(){
    console.log(`Your current mood is '${this.mood}'`);
}

