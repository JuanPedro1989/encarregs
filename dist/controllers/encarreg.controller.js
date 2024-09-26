"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EncarregController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EncarregController = class EncarregController {
    constructor(encarregRepository) {
        this.encarregRepository = encarregRepository;
    }
    async create(encarreg) {
        return this.encarregRepository.create(encarreg);
    }
    async count(where) {
        return this.encarregRepository.count(where);
    }
    async find(filter) {
        return this.encarregRepository.find(filter);
    }
    async updateAll(encarreg, where) {
        return this.encarregRepository.updateAll(encarreg, where);
    }
    async findById(id, filter) {
        return this.encarregRepository.findById(id, filter);
    }
    async updateById(id, encarreg) {
        await this.encarregRepository.updateById(id, encarreg);
    }
    async replaceById(id, encarreg) {
        await this.encarregRepository.replaceById(id, encarreg);
    }
    async deleteById(id) {
        await this.encarregRepository.deleteById(id);
    }
};
exports.EncarregController = EncarregController;
tslib_1.__decorate([
    (0, rest_1.post)('/encarregs'),
    (0, rest_1.response)(200, {
        description: 'Encarreg model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Encarreg) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Encarreg, {
                    title: 'NewEncarreg',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EncarregController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/encarregs/count'),
    (0, rest_1.response)(200, {
        description: 'Encarreg model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Encarreg)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EncarregController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/encarregs'),
    (0, rest_1.response)(200, {
        description: 'Array of Encarreg model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Encarreg, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Encarreg)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EncarregController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/encarregs'),
    (0, rest_1.response)(200, {
        description: 'Encarreg PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Encarreg, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Encarreg)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Encarreg, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EncarregController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/encarregs/{id}'),
    (0, rest_1.response)(200, {
        description: 'Encarreg model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Encarreg, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Encarreg, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EncarregController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/encarregs/{id}'),
    (0, rest_1.response)(204, {
        description: 'Encarreg PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Encarreg, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Encarreg]),
    tslib_1.__metadata("design:returntype", Promise)
], EncarregController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/encarregs/{id}'),
    (0, rest_1.response)(204, {
        description: 'Encarreg PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Encarreg]),
    tslib_1.__metadata("design:returntype", Promise)
], EncarregController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/encarregs/{id}'),
    (0, rest_1.response)(204, {
        description: 'Encarreg DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], EncarregController.prototype, "deleteById", null);
exports.EncarregController = EncarregController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.EncarregRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.EncarregRepository])
], EncarregController);
//# sourceMappingURL=encarreg.controller.js.map