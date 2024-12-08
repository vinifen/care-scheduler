"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class EditAppointmentScreen {
    constructor(primaryScreen, router, patientScreen, addressScreen, medicalInfoScreen, scheduleScreen) {
        this.prompt = (0, prompt_sync_1.default)();
        this.primaryScreen = primaryScreen;
        this.router = router;
        this.addressScreen = addressScreen;
        this.patientScreen = patientScreen;
        this.medicalInfoScreen = medicalInfoScreen;
        this.scheduleScreen = scheduleScreen;
    }
    selectAppointment() {
        const allAppointments = this.router.apCrtl.getDbAppointment();
        console.log(`
      Selecione o número da consulta que deseja editar: 
      Digite "0" para voltar.
    ====================================================`);
        allAppointments.forEach((appmt) => {
            console.log(`${appmt.id} - ${appmt.patient.getName()}`);
        });
        const selectedID = Number(this.prompt('Número: '));
        const selectedAppointment = allAppointments.find((appmt) => {
            if (appmt.id === selectedID) {
                return true;
            }
            return false;
        });
        if (selectedAppointment) {
            console.log("Consulta selecionada:", selectedAppointment);
            const fieldSelected = this.selectField(selectedAppointment);
            this.promptEdit(fieldSelected, selectedAppointment);
        }
        else {
            console.log("Nenhuma consulta encontrada com esse ID.");
            this.primaryScreen.startScreen();
        }
    }
    selectField(appmtSelected) {
        console.log(`
      Selecione o número do campo que deseja editar: 
    ====================================================`);
        console.log("Informações do Paciente:");
        console.log(`1 - Paciente: ${appmtSelected.patient.getName()}`);
        console.log(`2 - CPF: ${appmtSelected.patient.getCpf()}`);
        console.log(`3 - Idade: ${appmtSelected.patient.getAge()}`);
        console.log("Endereço:");
        console.log(`4 - Rua: ${appmtSelected.address.getStreet()}`);
        console.log(`5 - Número: ${appmtSelected.address.getHouseNumber()}`);
        console.log(`6 - Cidade: ${appmtSelected.address.getCity()}`);
        console.log(`7 - Estado: ${appmtSelected.address.getState()}`);
        console.log(`8 - País: ${appmtSelected.address.getCountry()}`);
        console.log("Informações Médicas:");
        console.log(`9 - Motivo: ${appmtSelected.medicalInformation.getReason()}`);
        console.log(`10 - Descrição: ${appmtSelected.medicalInformation.getDescription()}`);
        console.log(`11 - Médico: ${appmtSelected.medicalInformation.getDoctorName()}`);
        console.log("Agendamento:");
        console.log(`12 - Data: ${appmtSelected.schedule.getDate()}`);
        console.log(`13 - Hora: ${appmtSelected.schedule.getTime()}`);
        console.log(`14 - Local: ${appmtSelected.schedule.getLocation()}`);
        const selectedField = Number(this.prompt('Número: '));
        return selectedField;
    }
    promptEdit(selected, appmtSelected) {
        switch (selected) {
            case 1:
                const name = this.patientScreen.promptName();
                appmtSelected.patient.setName(name);
                break;
            case 2:
                const cpf = this.patientScreen.promptCPF();
                appmtSelected.patient.setCpf(cpf);
                break;
            case 3:
                const age = this.patientScreen.promptAge();
                appmtSelected.patient.setAge(age);
                break;
            case 4:
                const street = this.addressScreen.promptStreet();
                appmtSelected.address.setStreet(street);
                break;
            case 5:
                const houseNumber = this.addressScreen.promptHouseNumber();
                appmtSelected.address.setHouseNumber(houseNumber);
                break;
            case 6:
                const city = this.addressScreen.promptCity();
                appmtSelected.address.setCity(city);
                break;
            case 7:
                const state = this.addressScreen.promptState();
                appmtSelected.address.setState(state);
                break;
            case 8:
                const country = this.addressScreen.promptCountry();
                appmtSelected.address.setCountry(country);
                break;
            case 9:
                const reason = this.medicalInfoScreen.promptReason();
                appmtSelected.medicalInformation.setReason(reason);
                break;
            case 10:
                const description = this.medicalInfoScreen.promptDescription();
                appmtSelected.medicalInformation.setDescription(description);
                break;
            case 11:
                const doctorName = this.medicalInfoScreen.promptDoctorName();
                appmtSelected.medicalInformation.setDoctorName(doctorName);
                break;
            case 12:
                const date = this.scheduleScreen.promptDate();
                appmtSelected.schedule.setDate(date);
                break;
            case 13:
                const time = this.scheduleScreen.promptTime();
                appmtSelected.schedule.setTime(time);
                break;
            case 14:
                const location = this.scheduleScreen.promptLocal();
                appmtSelected.schedule.setLocation(location);
                break;
            default:
                console.log("Opção inválida. Tente novamente.");
                break;
        }
        this.primaryScreen.startScreen();
    }
}
exports.default = EditAppointmentScreen;
