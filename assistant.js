
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

// Day Simulation
let assistant = new PersonalAssistant("Personal Assistant");
console.log(`Hello I am your personal assistant! I can help you with task and mood management! You can call me ${assistant.name}`);
assistant.reportMood();
assistant.addTask("study");
assistant.addTask("make breakfast");
assistant.addTask("clean room");
assistant.reportMood();
assistant.completeTask();
assistant.reportMood();