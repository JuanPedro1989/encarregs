"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CosaDemanada = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let CosaDemanada = class CosaDemanada extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.CosaDemanada = CosaDemanada;
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
], CosaDemanada.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        jsonSchema: { nullable: false },
        precision: 10,
        scale: 0,
        generated: false,
        mysql: { columnName: 'id_proveidor', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N', generated: false },
    }),
    tslib_1.__metadata("design:type", Number)
], CosaDemanada.prototype, "idProveidor", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        required: true,
        jsonSchema: { nullable: false },
        length: 200,
        generated: false,
        mysql: { columnName: 'nom', dataType: 'varchar', dataLength: 200, dataPrecision: null, dataScale: null, nullable: 'N', generated: false },
    }),
    tslib_1.__metadata("design:type", String)
], CosaDemanada.prototype, "nom", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        jsonSchema: { nullable: true },
        precision: 10,
        scale: 2,
        generated: false,
        mysql: { columnName: 'preu', dataType: 'decimal', dataLength: null, dataPrecision: 10, dataScale: 2, nullable: 'Y', generated: false },
    }),
    tslib_1.__metadata("design:type", Number)
], CosaDemanada.prototype, "preu", void 0);
exports.CosaDemanada = CosaDemanada = tslib_1.__decorate([
    (0, repository_1.model)({
        settings: { idInjection: false, mysql: { schema: 'encarregs', table: 'cosa_demanada' } }
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], CosaDemanada);
//# sourceMappingURL=cosa-demanada.model.js.map