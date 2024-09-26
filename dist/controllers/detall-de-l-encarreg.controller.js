"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetallDeLEncarregController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let DetallDeLEncarregController = class DetallDeLEncarregController {
    constructor(detallDeLEncarregRepository) {
        this.detallDeLEncarregRepository = detallDeLEncarregRepository;
    }
    async create(detallDeLEncarreg) {
        return this.detallDeLEncarregRepository.create(detallDeLEncarreg);
    }
    async count(where) {
        return this.detallDeLEncarregRepository.count(where);
    }
    async find(filter) {
        return this.detallDeLEncarregRepository.find(filter);
    }
    async updateAll(detallDeLEncarreg, where) {
        return this.detallDeLEncarregRepository.updateAll(detallDeLEncarreg, where);
    }
    async findById(id, filter) {
        return this.detallDeLEncarregRepository.findById(id, filter);
    }
    async updateById(id, detallDeLEncarreg) {
        await this.detallDeLEncarregRepository.updateById(id, detallDeLEncarreg);
    }
    async replaceById(id, detallDeLEncarreg) {
        await this.detallDeLEncarregRepository.replaceById(id, detallDeLEncarreg);
    }
    async deleteById(id) {
        await this.detallDeLEncarregRepository.deleteById(id);
    }
};
exports.DetallDeLEncarregController = DetallDeLEncarregController;
tslib_1.__decorate([
    (0, rest_1.post)('/detall-de-l-encarregs'),
    (0, rest_1.response)(200, {
        description: 'DetallDeLEncarreg model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.DetallDeLEncarreg) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.DetallDeLEncarreg, {
                    title: 'NewDetallDeLEncarreg',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DetallDeLEncarregController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/detall-de-l-encarregs/count'),
    (0, rest_1.response)(200, {
        description: 'DetallDeLEncarreg model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.DetallDeLEncarreg)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DetallDeLEncarregController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/detall-de-l-encarregs'),
    (0, rest_1.response)(200, {
        description: 'Array of DetallDeLEncarreg model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.DetallDeLEncarreg, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.DetallDeLEncarreg)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DetallDeLEncarregController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/detall-de-l-encarregs'),
    (0, rest_1.response)(200, {
        description: 'DetallDeLEncarreg PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.DetallDeLEncarreg, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.DetallDeLEncarreg)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.DetallDeLEncarreg, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DetallDeLEncarregController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/detall-de-l-encarregs/{id}'),
    (0, rest_1.response)(200, {
        description: 'DetallDeLEncarreg model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.DetallDeLEncarreg, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.DetallDeLEncarreg, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DetallDeLEncarregController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/detall-de-l-encarregs/{id}'),
    (0, rest_1.response)(204, {
        description: 'DetallDeLEncarreg PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.DetallDeLEncarreg, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.DetallDeLEncarreg]),
    tslib_1.__metadata("design:returntype", Promise)
], DetallDeLEncarregController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/detall-de-l-encarregs/{id}'),
    (0, rest_1.response)(204, {
        description: 'DetallDeLEncarreg PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.DetallDeLEncarreg]),
    tslib_1.__metadata("design:returntype", Promise)
], DetallDeLEncarregController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/detall-de-l-encarregs/{id}'),
    (0, rest_1.response)(204, {
        description: 'DetallDeLEncarreg DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], DetallDeLEncarregController.prototype, "deleteById", null);
exports.DetallDeLEncarregController = DetallDeLEncarregController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.DetallDeLEncarregRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.DetallDeLEncarregRepository])
], DetallDeLEncarregController);
//# sourceMappingURL=detall-de-l-encarreg.controller.js.map