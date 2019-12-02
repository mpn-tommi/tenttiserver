import { QuestionController } from './Questions/QuestionController';
import { daoimpl } from "../config/dbconfig";

const questionController = new QuestionController(daoimpl);

export {
    questionController
}
