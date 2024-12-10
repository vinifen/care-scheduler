"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Router_1 = __importDefault(require("../control/Router"));
let router = new Router_1.default();
const name = "Vinicius";
const cpf = "12345678901";
const age = 19;
const street = "Rua Ola";
const houseNumber = 12;
const city = "Guarapuava";
const state = "PR";
const country = "Brasil";
const reason = "Ta mal";
const description = "Bateu o pé na quina";
const doctorName = "Tomaz Leite";
const date = "10/10/2024";
const time = "18:00";
const location = "Rua: bao Hospital: sim";
let patient = router.apCrtl.getPatientModel(name, cpf, age);
let address = router.apCrtl.getAddressModel(street, houseNumber, city, state, country);
let medicalInformation = router.apCrtl.getMedicalInformationModel(reason, description, doctorName);
let schedule = router.apCrtl.getScheduleModel(date, time, location);
let appointment = router.apCrtl.getAppointmentModel(patient, address, medicalInformation, schedule);
router.apCrtl.registerAppointment(appointment);
test("Teste nome do paciente", () => {
    expect(appointment.patient.getName()).toBe(name);
});
test("Teste CPF do paciente", () => {
    expect(appointment.patient.getCpf()).toBe(cpf);
});
test("Teste idade do paciente", () => {
    expect(appointment.patient.getAge()).toBe(age);
});
test("Teste rua do endereço", () => {
    expect(appointment.address.getStreet()).toBe(street);
});
test("Teste número da casa", () => {
    expect(appointment.address.getHouseNumber()).toBe(houseNumber);
});
test("Teste cidade do endereço", () => {
    expect(appointment.address.getCity()).toBe(city);
});
test("Teste estado do endereço", () => {
    expect(appointment.address.getState()).toBe(state);
});
test("Teste país do endereço", () => {
    expect(appointment.address.getCountry()).toBe(country);
});
test("Teste motivo da consulta", () => {
    expect(appointment.medicalInformation.getReason()).toBe(reason);
});
test("Teste descrição da consulta", () => {
    expect(appointment.medicalInformation.getDescription()).toBe(description);
});
test("Teste nome do médico", () => {
    expect(appointment.medicalInformation.getDoctorName()).toBe(doctorName);
});
test("Teste data da consulta", () => {
    expect(appointment.schedule.getDate()).toBe(date);
});
test("Teste hora da consulta", () => {
    expect(appointment.schedule.getTime()).toBe(time);
});
test("Teste local da consulta", () => {
    expect(appointment.schedule.getLocation()).toBe(location);
});
