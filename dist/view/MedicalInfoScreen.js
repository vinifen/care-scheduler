"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseScreen_1 = require("./BaseScreen");
class MedicalInfoScreen extends BaseScreen_1.BaseScreen {
    constructor(primaryScreen) {
        super(primaryScreen);
        this.primaryScreen = primaryScreen;
    }
    startMedicalInfo() {
        console.log(` 
      ================================
      Informações Médicas: 
      ================================`);
    }
    promptReason() {
        const reason = this.prompt("Motivo: ");
        if (!this.validateNonEmpty(reason, "Motivo")) {
            return this.promptReason();
        }
        return reason;
    }
    promptDescription() {
        const description = this.prompt("Descrição: ");
        if (!this.validateNonEmpty(description, "Descrição")) {
            return this.promptReason();
        }
        return description;
    }
    promptDoctorName() {
        const doctorName = this.prompt("Nome do Médico: ");
        if (!this.validateNonEmpty(doctorName, "Nome do Médico") || !this.validateNonNumber(doctorName, "Nome do Médico")) {
            return this.promptDoctorName();
        }
        return doctorName;
    }
}
exports.default = MedicalInfoScreen;
