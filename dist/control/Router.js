"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Database_1 = __importDefault(require("../db/Database"));
const PrimaryScreen_1 = __importDefault(require("../view/PrimaryScreen"));
const AppointmentController_1 = __importDefault(require("./AppointmentController"));
class Router {
    constructor() {
        this.db = new Database_1.default();
        this.initial = new PrimaryScreen_1.default(this);
        this.apCrtl = new AppointmentController_1.default(this.db);
        console.log("asdfasdf");
        this.initial.startScreen();
    }
}
exports.default = Router;
