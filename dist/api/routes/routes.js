"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var routes_1 = __importDefault(require("../../modules/User/routes"));
var Routes = /** @class */ (function () {
    function Routes(app) {
        this.router = new routes_1.default();
        this.getRoutes(app);
    }
    Routes.prototype.getRoutes = function (app) {
        app.route('/api/users/all').get(this.router.index);
        app.route('/api/users/create').post(this.router.create);
        app.route('/api/users/:id').get(this.router.findOne);
        app.route('/api/users/:id/update').put(this.router.update);
        app.route('/api/users/:id/destroy').delete(this.router.destroy);
    };
    return Routes;
}());
exports.default = Routes;
