import { Entity } from '@loopback/repository';
export declare class CosaDemanada extends Entity {
    id?: number;
    idProveidor: number;
    nom: string;
    preu?: number;
    [prop: string]: any;
    constructor(data?: Partial<CosaDemanada>);
}
export interface CosaDemanadaRelations {
}
export type CosaDemanadaWithRelations = CosaDemanada & CosaDemanadaRelations;
