import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Encarreg } from '../models';
import { EncarregRepository } from '../repositories';
export declare class EncarregController {
    encarregRepository: EncarregRepository;
    constructor(encarregRepository: EncarregRepository);
    create(encarreg: Omit<Encarreg, 'id'>): Promise<Encarreg>;
    count(where?: Where<Encarreg>): Promise<Count>;
    find(filter?: Filter<Encarreg>): Promise<Encarreg[]>;
    updateAll(encarreg: Encarreg, where?: Where<Encarreg>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Encarreg>): Promise<Encarreg>;
    updateById(id: number, encarreg: Encarreg): Promise<void>;
    replaceById(id: number, encarreg: Encarreg): Promise<void>;
    deleteById(id: number): Promise<void>;
}
