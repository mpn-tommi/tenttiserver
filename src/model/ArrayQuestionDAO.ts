import { IQuestionDAO } from './IQuestionDAO';
import { Question, Category, Choice } from './Question';

export class ArrayQuestionDAO extends IQuestionDAO {
    questions: Question[] = [];
    categories: Category[] = [];
    constructor() {
        super();
        this.setupDB();
    }
    public readall(category?: number | undefined): Question[] {
        return this.questions;
    }

    public setupDB() {
        this.categories.push(new Category(1, "Node"));
        this.categories.push(new Category(2, "React"));
        let choices = [new Choice("Duubiduu", false), new Choice("Badadim badabum", true), new Choice("Barum badum", false)];
        
        this.questions.push(
            new Question("Node fooo?", this.categories[0]),
            new Question("Node baz", this.categories[0]),
            new Question("React foobar", this.categories[1]),
            new Question("Node express", this.categories[0]),
            new Question("React props", this.categories[1]),
            new Question("React state", this.categories[1]),
            new Question("Node passport", this.categories[0]),
            );
        for(let i = 0 ; i < this.questions.length ; ++i) {
            this.questions[i].id = i+1;
            this.questions[i].choices = choices;
            this.questions[i].explanation = `Reason #${i}`;
        }
    }
}