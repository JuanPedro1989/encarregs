import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Encarreg, EncarregRelations } from '../models';
export declare class EncarregRepository extends DefaultCrudRepository<Encarreg, typeof Encarreg.prototype.id, EncarregRelations> {
    constructor(dataSource: DbDataSource);
}
