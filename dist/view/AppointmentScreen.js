"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseScreen_1 = require("./BaseScreen");
class AppointmentScreen extends BaseScreen_1.BaseScreen {
    constructor(primaryScreen, router, patientScreen, addressScreen, medicalInfoScreen, scheduleScreen) {
        super(primaryScreen);
        this.router = router;
        this.patientScreen = patientScreen;
        this.addressScreen = addressScreen;
        this.medicalInfoScreen = medicalInfoScreen;
        this.scheduleScreen = scheduleScreen;
    }
    registerAppointment() {
        this.patientScreen.startPatient();
        const name = this.patientScreen.promptName();
        const age = this.patientScreen.promptAge();
        const cpf = this.patientScreen.promptCPF();
        this.addressScreen.startAddress();
        const street = this.addressScreen.promptStreet();
        const houseNumber = this.addressScreen.promptHouseNumber();
        const city = this.addressScreen.promptCity();
        const state = this.addressScreen.promptState();
        const country = this.addressScreen.promptCountry();
        this.medicalInfoScreen.startMedicalInfo();
        const reason = this.medicalInfoScreen.promptReason();
        const description = this.medicalInfoScreen.promptDescription();
        const doctorName = this.medicalInfoScreen.promptDoctorName();
        this.scheduleScreen.startScheduleScreen();
        const date = this.scheduleScreen.promptDate();
        const time = this.scheduleScreen.promptTime();
        const location = this.scheduleScreen.promptLocal();
        const appointment = this.router.apCrtl.getAppointmentModel(this.router.apCrtl.getPatientModel(name, cpf, age), this.router.apCrtl.getAddressModel(street, houseNumber, city, state, country), this.router.apCrtl.getMedicalInformationModel(reason, description, doctorName), this.router.apCrtl.getScheduleModel(date, time, location));
        this.router.apCrtl.registerAppointment(appointment);
        console.log(` 
      ================================
      Consulta criada com sucesso:
      ================================
      Nome: ${name}
      Idade: ${age}
      CPF: ${cpf}
      Endereço: Rua ${street}, Nº ${houseNumber}, ${city}, ${state}, ${country}
      Motivo: ${reason}
      Descrição: ${description}
      Médico: ${doctorName}
      Data: ${date}
      Hora: ${time}
      Local: ${location}
    `);
        this.primaryScreen.startScreen();
    }
}
exports.default = AppointmentScreen;
