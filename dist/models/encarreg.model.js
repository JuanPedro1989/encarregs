"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Encarreg = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Encarreg = class Encarreg extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Encarreg = Encarreg;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
        jsonSchema: { nullable: false },
        generated: false,
        mysql: { columnName: 'data_encarreg', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N', generated: false },
    }),
    tslib_1.__metadata("design:type", String)
], Encarreg.prototype, "dataEncarreg", void 0);
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
], Encarreg.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        jsonSchema: { nullable: false },
        precision: 10,
        scale: 0,
        generated: false,
        mysql: { columnName: 'id_client', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N', generated: false },
    }),
    tslib_1.__metadata("design:type", Number)
], Encarreg.prototype, "idClient", void 0);
exports.Encarreg = Encarreg = tslib_1.__decorate([
    (0, repository_1.model)({
        settings: { idInjection: false, mysql: { schema: 'encarregs', table: 'encarreg' } }
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Encarreg);
//# sourceMappingURL=encarreg.model.js.map