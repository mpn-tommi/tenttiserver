import { IQuestionDAO } from './IQuestionDAO';
import { Question } from './Question';

export class PostgresQuestionDAO extends IQuestionDAO {
    public readall(category?: number): Question[] {
        const question = new Question('Kyssäri 1');
        return [question];
    }

}