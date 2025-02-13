import Router from "../control/Router";
import IAppointment from "../model/IAppointment";

let router: Router = new Router(true);

const name: string = "Vinicius";
const cpf: string = "12345678901";
const age: number = 19;

const street: string = "Rua Ola";
const houseNumber: number = 12;
const city: string = "Guarapuava";
const state: string = "PR";
const country: string = "Brasil";

const reason: string = "Ta mal";
const description: string = "Bateu o pé na quina";
const doctorName: string = "Tomaz Leite";

const date: string = "10/10/2024";
const time: string = "18:00";
const location: string = "Rua: bao Hospital: sim";

let patient = router.apCrtl.getPatientModel(name, cpf, age);
let address = router.apCrtl.getAddressModel(street, houseNumber, city, state, country);
let medicalInformation = router.apCrtl.getMedicalInformationModel(reason, description, doctorName);
let schedule = router.apCrtl.getScheduleModel(date, time, location);

let appointment: IAppointment = router.apCrtl.getAppointmentModel(patient, address, medicalInformation, schedule);

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
