"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Appointment {
    constructor(patient, address, medicalInformation, schedule) {
        this.id = NaN;
        this.patient = patient;
        this.address = address;
        this.medicalInformation = medicalInformation;
        this.schedule = schedule;
    }
}
exports.default = Appointment;
