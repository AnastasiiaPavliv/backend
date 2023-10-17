import {IWork} from "./works.type";
import {Works} from "./Works.model";

class WorkRepository {
    public async getAll(): Promise<IWork[]> {
        return await Works.find();
    }
}
export const workRepository = new WorkRepository()