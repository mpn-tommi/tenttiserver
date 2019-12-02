import { IQuestionDAO } from './IQuestionDAO';
import { Question, Category } from './Question';

export class PostgresQuestionDAO extends IQuestionDAO {
    public readall(category?: number): Question[] {
        const question = new Question('Kyssäri 1', new Category(category||1, "Badadum"));
        return [question];
    }

}