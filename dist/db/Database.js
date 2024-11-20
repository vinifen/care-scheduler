"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Database {
    constructor() {
        this.appointment = [];
    }
    addNewAppointment(appointment) {
        this.appointment.push(appointment);
        console.log(this.appointment);
    }
    getAppointments() {
        return this.appointment;
    }
}
exports.default = Database;
