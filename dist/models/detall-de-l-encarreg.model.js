"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetallDeLEncarreg = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let DetallDeLEncarreg = class DetallDeLEncarreg extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.DetallDeLEncarreg = DetallDeLEncarreg;
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
], DetallDeLEncarreg.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        jsonSchema: { nullable: false },
        precision: 10,
        scale: 0,
        generated: false,
        mysql: { columnName: 'id_cosa_demanada', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N', generated: false },
    }),
    tslib_1.__metadata("design:type", Number)
], DetallDeLEncarreg.prototype, "idCosaDemanada", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        jsonSchema: { nullable: false },
        precision: 10,
        scale: 0,
        generated: false,
        mysql: { columnName: 'id_encarreg', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N', generated: false },
    }),
    tslib_1.__metadata("design:type", Number)
], DetallDeLEncarreg.prototype, "idEncarreg", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        jsonSchema: { nullable: false },
        precision: 10,
        scale: 0,
        generated: false,
        mysql: { columnName: 'quantitat', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N', generated: false },
    }),
    tslib_1.__metadata("design:type", Number)
], DetallDeLEncarreg.prototype, "quantitat", void 0);
exports.DetallDeLEncarreg = DetallDeLEncarreg = tslib_1.__decorate([
    (0, repository_1.model)({
        settings: {
            idInjection: false,
            mysql: { schema: 'encarregs', table: 'detall_de_l_encarreg' }
        }
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], DetallDeLEncarreg);
//# sourceMappingURL=detall-de-l-encarreg.model.js.map