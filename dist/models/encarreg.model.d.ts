import { Entity } from '@loopback/repository';
export declare class Encarreg extends Entity {
    dataEncarreg: string;
    id?: number;
    idClient: number;
    [prop: string]: any;
    constructor(data?: Partial<Encarreg>);
}
export interface EncarregRelations {
}
export type EncarregWithRelations = Encarreg & EncarregRelations;
