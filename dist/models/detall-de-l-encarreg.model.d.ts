import { Entity } from '@loopback/repository';
export declare class DetallDeLEncarreg extends Entity {
    id?: number;
    idCosaDemanada: number;
    idEncarreg: number;
    quantitat: number;
    [prop: string]: any;
    constructor(data?: Partial<DetallDeLEncarreg>);
}
export interface DetallDeLEncarregRelations {
}
export type DetallDeLEncarregWithRelations = DetallDeLEncarreg & DetallDeLEncarregRelations;
