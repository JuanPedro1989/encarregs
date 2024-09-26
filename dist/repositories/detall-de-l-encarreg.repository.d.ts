import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { DetallDeLEncarreg, DetallDeLEncarregRelations } from '../models';
export declare class DetallDeLEncarregRepository extends DefaultCrudRepository<DetallDeLEncarreg, typeof DetallDeLEncarreg.prototype.id, DetallDeLEncarregRelations> {
    constructor(dataSource: DbDataSource);
}
