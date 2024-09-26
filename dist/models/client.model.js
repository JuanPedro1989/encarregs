"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Client = class Client extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Client = Client;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        jsonSchema: { nullable: false },
        length: 50,
        generated: false,
        mysql: { columnName: 'cognoms', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'N', generated: false },
    }),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "cognoms", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        jsonSchema: { nullable: true },
        generated: false,
        mysql: { columnName: 'data_naixement', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false },
    }),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "dataNaixement", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        jsonSchema: { nullable: true },
        length: 50,
        generated: false,
        mysql: { columnName: 'foto', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false },
    }),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "foto", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        jsonSchema: { nullable: false },
        precision: 10,
        scale: 0,
        generated: 1,
        id: 1,
        mysql: { columnName: 'id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N', generated: 1 },
    }),
    tslib_1.__metadata("design:type", Number)
], Client.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        jsonSchema: { nullable: false },
        length: 50,
        generated: false,
        mysql: { columnName: 'nom', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'N', generated: false },
    }),
    tslib_1.__metadata("design:type", String)
], Client.prototype, "nom", void 0);
exports.Client = Client = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { idInjection: false, mysql: { schema: 'encarregs', table: 'client' } } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Client);
//# sourceMappingURL=client.model.js.map