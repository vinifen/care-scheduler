import Router from "../router/Router";
import IAppointment from "../model/IAppointment";
import { Validation } from "../view/Validation";
import PrimaryScreen from "../view/PrimaryScreen";
import { error } from "console";

let router: Router = new Router(true);
const primaryScreen: PrimaryScreen = new PrimaryScreen(router);
const validation: Validation = new Validation(primaryScreen);

const name: string = "Vinicius";
const cpf: string = "12345678901";
const age: number = 12;

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
const local: string = "Rua: bao Hospital: sim";

let patient = router.apCrtl.getPatientModel(name, cpf, age);
let address = router.apCrtl.getAddressModel(street, houseNumber, city, state, country);
let medicalInformation = router.apCrtl.getMedicalInformationModel(reason, description, doctorName);
let schedule = router.apCrtl.getScheduleModel(date, time, local);
let appointment: IAppointment = router.apCrtl.getAppointmentModel(patient, address, medicalInformation, schedule);

router.apCrtl.registerAppointment(appointment);

test("Teste nome do paciente", () => {
  if(!validation.validateNonEmpty(name, "Nome") || !validation.validateNonNumber(name, "Nome")){
    throw new Error;
  }
  expect(appointment.patient.getName()).toBe(name);
});

test("Teste CPF do paciente", () => {
  if(!validation.validateNonEmpty(cpf, "CPF") || !validation.validateNumber(cpf, "CPF") || !validation.validationLength(cpf, "CPF", 11, 11)){
    throw new Error;
  }
  expect(appointment.patient.getCpf()).toBe(cpf);
});

test("Teste idade do paciente", () => {
  const ageString = age.toString();
  if(!validation.validateNonEmpty(ageString, "Idade") || !validation.validateNumber(ageString, "Idade")  || !validation.validationLength(ageString, "Idade", 1, 3)){
    throw new Error;
  }
  expect(appointment.patient.getAge()).toBe(age);
});

test("Teste rua do endereço", () => {
  if(!validation.validateNonEmpty(street, "Rua")){
    throw new Error;
  }
  expect(appointment.address.getStreet()).toBe(street);
});

test("Teste número da casa", () => {
  const houseNumberString = houseNumber.toString();
  if(!validation.validateNonEmpty(houseNumberString, "Numero da Casa") || !validation.validateNumber(houseNumberString, "Numero da Casa")  || !validation.validationLength(houseNumberString, "Numero da casa", 1, 6)){
    throw new Error;
  }
  expect(appointment.address.getHouseNumber()).toBe(houseNumber);
});

test("Teste cidade do endereço", () => {
  expect(appointment.address.getCity()).toBe(city);
  if(!validation.validateNonEmpty(city, "Cidade") || !validation.validateNonNumber(city, "Cidade")){
    throw new Error;
  }
});

test("Teste estado do endereço", () => {
  if(!validation.validateNonEmpty(state, "Estado") || !validation.validateNonNumber(state, "Estado")){
    throw new Error;
  }
  expect(appointment.address.getState()).toBe(state);
});

test("Teste país do endereço", () => {
  if(!validation.validateNonEmpty(country, "País") || !validation.validateNonNumber(country, "País")){
    throw new Error;
  }
  expect(appointment.address.getCountry()).toBe(country);
});

test("Teste motivo da consulta", () => {
  if(!validation.validateNonEmpty(reason, "Motivo")){
    throw new Error;
  }
  expect(appointment.medicalInformation.getReason()).toBe(reason);
});

test("Teste descrição da consulta", () => {
  if(!validation.validateNonEmpty(description, "Descrição")){
    throw new Error;
  }
  expect(appointment.medicalInformation.getDescription()).toBe(description);
});

test("Teste nome do médico", () => {
  if(!validation.validateNonEmpty(doctorName, "Nome do Médico") || !validation.validateNonNumber(doctorName, "Nome do Médico")){
    throw new Error;
  }
  expect(appointment.medicalInformation.getDoctorName()).toBe(doctorName);
});

test("Teste data da consulta", () => {
  if(!validation.validateNonEmpty(date, "Data") || !validation.validationLength(date, "Data", 8, 10) || !validation.validateNonLetters(date, "Data")){
    throw new Error;
  }
  expect(appointment.schedule.getDate()).toBe(date);
});

test("Teste hora da consulta", () => {
  if(!validation.validateNonEmpty(time, "Hora") || !validation.validationLength(time, "Hora", 4, 5) || !validation.validateNonLetters(time, "Hora")){
    throw new Error;
  }
  expect(appointment.schedule.getTime()).toBe(time);
});

test("Teste local da consulta", () => {
  if(!validation.validateNonEmpty(local, "Local")){
    throw new Error;
  }
  expect(appointment.schedule.getLocation()).toBe(local);
});
