import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { DetallDeLEncarreg } from '../models';
import { DetallDeLEncarregRepository } from '../repositories';
export declare class DetallDeLEncarregController {
    detallDeLEncarregRepository: DetallDeLEncarregRepository;
    constructor(detallDeLEncarregRepository: DetallDeLEncarregRepository);
    create(detallDeLEncarreg: Omit<DetallDeLEncarreg, 'id'>): Promise<DetallDeLEncarreg>;
    count(where?: Where<DetallDeLEncarreg>): Promise<Count>;
    find(filter?: Filter<DetallDeLEncarreg>): Promise<DetallDeLEncarreg[]>;
    updateAll(detallDeLEncarreg: DetallDeLEncarreg, where?: Where<DetallDeLEncarreg>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<DetallDeLEncarreg>): Promise<DetallDeLEncarreg>;
    updateById(id: number, detallDeLEncarreg: DetallDeLEncarreg): Promise<void>;
    replaceById(id: number, detallDeLEncarreg: DetallDeLEncarreg): Promise<void>;
    deleteById(id: number): Promise<void>;
}
