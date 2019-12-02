import { Request, Response } from 'express';
import { IController } from '../IController';
import { IQuestionDAO } from '../../model/IQuestionDAO';
import { Question } from '../../model/Question';

export class QuestionController extends IController {
    dao: IQuestionDAO;
    constructor(dao: IQuestionDAO) {
        super();
        this.dao = dao;
    }
    public create(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error("Method not implemented.");
    } 
    public read(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        const questions: Question[] = this.dao.readall();
        res.json(questions);
    }
    public update(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error("Method not implemented.");
    }
    public delete(req: Request<import("express-serve-static-core").ParamsDictionary>, res: Response): void {
        throw new Error("Method not implemented.");
    }
}
