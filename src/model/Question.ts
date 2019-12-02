
export class Question {
    id: number=-1;
    question: string;
    choices: Choice[] = [];
    explanation: string = '';
    constructor(question:string) {
        this.question = question;
    }
}

export class Choice {
    id: number = -1;
    text: string;
    correct: boolean;
    constructor(text: string, correct: boolean) {
        this.text = text;
        this.correct = correct;
    }
}