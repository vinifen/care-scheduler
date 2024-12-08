"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Database {
    constructor() {
        this.appointments = [];
        this.currentId = 1;
    }
    addNewAppointment(appointment) {
        appointment.id = this.currentId;
        this.appointments.push(appointment);
        this.currentId++;
        console.log(this.appointments);
    }
    getAppointments() {
        return this.appointments;
    }
    setAppointments(appointments) {
        this.appointments = appointments;
    }
}
exports.default = Database;
