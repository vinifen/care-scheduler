"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseScreen_1 = require("./BaseScreen");
class PatientScreen extends BaseScreen_1.BaseScreen {
    constructor(primaryScreen) {
        super(primaryScreen);
        this.primaryScreen = primaryScreen;
    }
    startPatient() {
        console.log(` 
      ================================
      Criar nova consulta para um paciente
      Digite "0" para cancelar.
      ================================
      Sessão 1: Informações gerais
      ================================
    `);
    }
    promptName() {
        const name = this.prompt("Name: ");
        if (!this.validateNonEmpty(name, "Nome") || !this.validateNonNumber(name, "Nome")) {
            return this.promptName();
        }
        return name;
    }
    promptAge() {
        const ageString = this.prompt("Idade: ");
        if (!this.validateNonEmpty(ageString, "Idade") || !this.validateNumber(ageString, "Idade") || !this.validationLength(ageString, "Idade", 1, 3)) {
            return this.promptAge();
        }
        const age = Number(ageString);
        return age;
    }
    promptCPF() {
        const cpf = this.prompt("CPF: ");
        if (!this.validateNonEmpty(cpf, "CPF") || !this.validateNumber(cpf, "CPF") || !this.validationLength(cpf, "CPF", 11, 11)) {
            return this.promptCPF();
        }
        return cpf;
    }
}
exports.default = PatientScreen;
