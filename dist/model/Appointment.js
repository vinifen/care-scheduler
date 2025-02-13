"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Appointment {
    constructor(patient, address, medicalInformation, schedule) {
        this.patient = patient;
        this.address = address;
        this.medicalInformation = medicalInformation;
        this.schedule = schedule;
        this.id = Appointment.idCounter++;
    }
}
Appointment.idCounter = 1;
exports.default = Appointment;
