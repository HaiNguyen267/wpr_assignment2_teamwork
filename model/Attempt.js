const Question = require("./Question")

class Attempt {
    constructor(selectedQuestions) {
        this.questions = selectedQuestions; // 10 questions
        this.startedAt = new Date().getTime()
        this.completed = false;
    }
}

module.exports = Attempt