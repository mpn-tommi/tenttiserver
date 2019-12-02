import { Question } from "./Question";

export abstract class IQuestionDAO {
    public abstract readall(category?: number): Question[];
}
