import { Entity } from '@loopback/repository';
export declare class Client extends Entity {
    cognoms: string;
    dataNaixement?: string;
    foto?: string;
    id?: number;
    nom: string;
    [prop: string]: any;
    constructor(data?: Partial<Client>);
}
export interface ClientRelations {
}
export type ClientWithRelations = Client & ClientRelations;
