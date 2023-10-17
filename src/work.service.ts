import {IWork} from "./works.type";
import {workRepository} from "./work.repository";

class WorkService{
    public async getAll(): Promise<IWork[]> {
        return await workRepository.getAll();
    }

}
export const workService = new WorkService()