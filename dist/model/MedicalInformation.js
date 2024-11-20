"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MedicalInformation {
    constructor(reason, description, doctorName) {
        this.reason = reason;
        this.description = description;
        this.doctorName = doctorName;
    }
    getReason() {
        return this.reason;
    }
    setReason(reason) {
        this.reason = reason;
    }
    getDescription() {
        return this.description;
    }
    setDescription(description) {
        this.description = description;
    }
    getDoctorName() {
        return this.doctorName;
    }
    setDoctorName(doctorName) {
        this.doctorName = doctorName;
    }
    displayMedicalInfo() {
        console.log(`
            ================================
            Informações Médicas:
            ================================
            Motivo da Consulta: ${this.getReason()}
            Descrição: ${this.getDescription()}
            Médico Responsável: ${this.getDoctorName()}
        `);
    }
}
exports.default = MedicalInformation;
