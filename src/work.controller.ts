import {NextFunction, Request, Response} from "express";
import {IWork} from "./works.type";
import {workService} from "./work.service";

class WorkController {
    public async getAll(req: Request, res: Response, next: NextFunction):
        Promise<Response<IWork[]>> {
        try {
            const users = await workService.getAll();

            return res.json(users);

        } catch (e) {
            next(e)
        }
    }
}
export const workController = new WorkController();