"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'db',
    connector: 'mysql',
    url: 'mysql://avnadmin:AVNS_NFgsHgKwKLANUssxH0y@mysql-12a3feed-juanpedrolg1989-f587.d.aivencloud.com:18316/encarregs?ssl-mode=REQUIRED',
    host: 'mysql-12a3feed-juanpedrolg1989-f587.d.aivencloud.com',
    port: 18316,
    user: 'avnadmin',
    password: 'AVNS_NFgsHgKwKLANUssxH0yAVNS_NFgsHgKwKLANUssxH0y',
    database: 'encarregs'
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let DbDataSource = class DbDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
exports.DbDataSource = DbDataSource;
DbDataSource.dataSourceName = 'db';
DbDataSource.defaultConfig = config;
exports.DbDataSource = DbDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.db', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], DbDataSource);
//# sourceMappingURL=db.datasource.js.map