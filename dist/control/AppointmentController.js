"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Address_1 = __importDefault(require("../model/Address"));
const MedicalInformation_1 = __importDefault(require("../model/MedicalInformation"));
const Patient_1 = __importDefault(require("../model/Patient"));
const Schedule_1 = __importDefault(require("../model/Schedule"));
const Appointment_1 = __importDefault(require("../model/Appointment"));
class AppointmentController {
    constructor(db) {
        this.db = db;
    }
    getAddressModel(street, houseNumber, city, state, country) {
        return new Address_1.default(street, houseNumber, city, state, country);
    }
    getPatientModel(name, cpf, age) {
        return new Patient_1.default(name, cpf, age);
    }
    getMedicalInformationModel(reason, description, doctorName) {
        return new MedicalInformation_1.default(reason, description, doctorName);
    }
    getScheduleModel(date, time, location) {
        return new Schedule_1.default(date, time, location);
    }
    getAppointmentModel(patient, address, medicalInformation, schedule) {
        return new Appointment_1.default(patient, address, medicalInformation, schedule);
    }
    registerAppointment(appointment) {
        this.db.addNewAppointment(appointment);
    }
    getDbAppointment() {
        return this.db.getAppointments();
    }
    setDbAppointment(appointment) {
        return this.db.setAppointments(appointment);
    }
}
exports.default = AppointmentController;
