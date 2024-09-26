import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { CosaDemanada } from '../models';
import { CosaDemanadaRepository } from '../repositories';
export declare class CosaDemandaController {
    cosaDemanadaRepository: CosaDemanadaRepository;
    constructor(cosaDemanadaRepository: CosaDemanadaRepository);
    create(cosaDemanada: Omit<CosaDemanada, 'id'>): Promise<CosaDemanada>;
    count(where?: Where<CosaDemanada>): Promise<Count>;
    find(filter?: Filter<CosaDemanada>): Promise<CosaDemanada[]>;
    updateAll(cosaDemanada: CosaDemanada, where?: Where<CosaDemanada>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<CosaDemanada>): Promise<CosaDemanada>;
    updateById(id: number, cosaDemanada: CosaDemanada): Promise<void>;
    replaceById(id: number, cosaDemanada: CosaDemanada): Promise<void>;
    deleteById(id: number): Promise<void>;
}
