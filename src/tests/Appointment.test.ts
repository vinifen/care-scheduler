import Router from "../control/Router";
import IAppointment from "../model/IAppointment";
import AppointmentScreen from "../view/AppointmentScreen";
import PrimaryScreen from "../view/PrimaryScreen";
import PatientScreen from "../view/PatientScreen";
import AddressScreen from "../view/AddressScreen";
import MedicalInfoScreen from "../view/MedicalInfoScreen";
import ScheduleScreen from "../view/ScheduleScreen";

let router: Router = new Router();

let primaryScreen: PrimaryScreen = new PrimaryScreen(router);
let addressScreen: AddressScreen = new AddressScreen(primaryScreen);
let patientScreen: PatientScreen = new PatientScreen(primaryScreen);
let scheduleScreen: ScheduleScreen = new ScheduleScreen(primaryScreen);
let medicalInfoScreen: MedicalInfoScreen = new MedicalInfoScreen(primaryScreen);

let appointmentScreen: AppointmentScreen = new AppointmentScreen(
  primaryScreen, 
  router,
  patientScreen,
  addressScreen,
  medicalInfoScreen,
  scheduleScreen
);

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

const appointment: IAppointment = router.apCrtl.getAppointmentModel(
  router.apCrtl.getPatientModel(name, cpf, age),
  router.apCrtl.getAddressModel(street, houseNumber, city, state, country),
  router.apCrtl.getMedicalInformationModel(reason, description, doctorName),
  router.apCrtl.getScheduleModel(date, time, location)
);

router.apCrtl.registerAppointment(appointment);
const appointments = router.apCrtl.getDbAppointment();

test("Teste Database", () => {
  expect(appointment.address.getCity()).toBe(city);
})