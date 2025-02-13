"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Database {
    constructor() {
        this.appointments = [];
    }
    addNewAppointment(appointment) {
        this.appointments.push(appointment);
    }
    getAppointments() {
        return this.appointments;
    }
    setAppointments(appointments) {
        this.appointments = appointments;
    }
}
exports.default = Database;
