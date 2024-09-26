import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { CosaDemanada, CosaDemanadaRelations } from '../models';
export declare class CosaDemanadaRepository extends DefaultCrudRepository<CosaDemanada, typeof CosaDemanada.prototype.id, CosaDemanadaRelations> {
    constructor(dataSource: DbDataSource);
}
