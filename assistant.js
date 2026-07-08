
function PersonalAssistant(name){
    this.name = name; 
    this.tasks = [];
    this.mood = "content";
}

PersonalAssistant.prototype.addTask = function(task) {
    this.tasks.push(task);
    console.log(`Added '${task}' task.`);
    if(this.tasks.length > 2){
        this.mood = "busy";
    }
    else{
        this.mood = "content";
    }
}

PersonalAssistant.prototype.completeTask = function(){
    console.log(`You have completed '${this.tasks[0]}' task.`);
    this.tasks.shift();
    if(this.tasks.length < 3){
        this.mood = "accomplished";
    }
    else{
        this.mood = "busy";
    }
}

PersonalAssistant.prototype.reportMood = function(){
    console.log(`Your current mood is '${this.mood}'`);
}

