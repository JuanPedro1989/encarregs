"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CosaDemandaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let CosaDemandaController = class CosaDemandaController {
    constructor(cosaDemanadaRepository) {
        this.cosaDemanadaRepository = cosaDemanadaRepository;
    }
    async create(cosaDemanada) {
        return this.cosaDemanadaRepository.create(cosaDemanada);
    }
    async count(where) {
        return this.cosaDemanadaRepository.count(where);
    }
    async find(filter) {
        return this.cosaDemanadaRepository.find(filter);
    }
    async updateAll(cosaDemanada, where) {
        return this.cosaDemanadaRepository.updateAll(cosaDemanada, where);
    }
    async findById(id, filter) {
        return this.cosaDemanadaRepository.findById(id, filter);
    }
    async updateById(id, cosaDemanada) {
        await this.cosaDemanadaRepository.updateById(id, cosaDemanada);
    }
    async replaceById(id, cosaDemanada) {
        await this.cosaDemanadaRepository.replaceById(id, cosaDemanada);
    }
    async deleteById(id) {
        await this.cosaDemanadaRepository.deleteById(id);
    }
};
exports.CosaDemandaController = CosaDemandaController;
tslib_1.__decorate([
    (0, rest_1.post)('/cosa-demanadas'),
    (0, rest_1.response)(200, {
        description: 'CosaDemanada model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.CosaDemanada) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.CosaDemanada, {
                    title: 'NewCosaDemanada',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CosaDemandaController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/cosa-demanadas/count'),
    (0, rest_1.response)(200, {
        description: 'CosaDemanada model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.CosaDemanada)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CosaDemandaController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/cosa-demanadas'),
    (0, rest_1.response)(200, {
        description: 'Array of CosaDemanada model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.CosaDemanada, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.CosaDemanada)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CosaDemandaController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/cosa-demanadas'),
    (0, rest_1.response)(200, {
        description: 'CosaDemanada PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.CosaDemanada, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.CosaDemanada)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.CosaDemanada, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CosaDemandaController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/cosa-demanadas/{id}'),
    (0, rest_1.response)(200, {
        description: 'CosaDemanada model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.CosaDemanada, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.CosaDemanada, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], CosaDemandaController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/cosa-demanadas/{id}'),
    (0, rest_1.response)(204, {
        description: 'CosaDemanada PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.CosaDemanada, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.CosaDemanada]),
    tslib_1.__metadata("design:returntype", Promise)
], CosaDemandaController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/cosa-demanadas/{id}'),
    (0, rest_1.response)(204, {
        description: 'CosaDemanada PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.CosaDemanada]),
    tslib_1.__metadata("design:returntype", Promise)
], CosaDemandaController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/cosa-demanadas/{id}'),
    (0, rest_1.response)(204, {
        description: 'CosaDemanada DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], CosaDemandaController.prototype, "deleteById", null);
exports.CosaDemandaController = CosaDemandaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.CosaDemanadaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.CosaDemanadaRepository])
], CosaDemandaController);
//# sourceMappingURL=cosa-demanda.controller.js.map