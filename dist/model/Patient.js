"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Patient {
    constructor(name, cpf, age) {
        this.name = name;
        this.cpf = cpf;
        this.age = age;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getCpf() {
        return this.cpf;
    }
    setCpf(cpf) {
        this.cpf = cpf;
    }
    getAge() {
        return this.age;
    }
    setAge(age) {
        this.age = age;
    }
    displayPatientInfo() {
        console.log(`
            ================================
            Informações do Paciente:
            ================================
            Nome: ${this.getName()}
            CPF: ${this.getCpf()}
            Idade: ${this.getAge()} anos
        `);
    }
}
exports.default = Patient;
