import ScheduleScreen from "./appointment/ScheduleScreen";
import PatientScreen from "./appointment/PatientScreen";
import AddressScreen from "./appointment/AddressScreen";
import MedicalInfoScreen from "./appointment/MedicalInfoScreen";
import IAppointment from "../model/IAppointment";
import PromptSync from "prompt-sync";
import PrimaryScreen from "./PrimaryScreen";
import Router from "../router/Router";

export default class EditAppointmentScreen {
  private router: Router;
  private prompt = PromptSync();

  private patientScreen: PatientScreen;
  private addressScreen: AddressScreen;
  private medicalInfoScreen: MedicalInfoScreen;
  private scheduleScreen: ScheduleScreen;
  private primaryScreen: PrimaryScreen;

  constructor(
    primaryScreen: PrimaryScreen,
    router: Router,
    patientScreen: PatientScreen, 
    addressScreen: AddressScreen, 
    medicalInfoScreen: MedicalInfoScreen, 
    scheduleScreen: ScheduleScreen
  ){
    this.primaryScreen = primaryScreen;
    this.router = router;
    this.addressScreen = addressScreen;
    this.patientScreen = patientScreen;
    this.medicalInfoScreen = medicalInfoScreen;
    this.scheduleScreen = scheduleScreen;
  }

  selectField(appmtSelected: IAppointment): number{
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

    const selectedField: number = Number(this.prompt('Número: '));
    return selectedField;
  }

  selectAppointment(): void{ 
    const allAppointments: IAppointment[] = this.router.apCrtl.getDbAppointment();
    
    console.log(`
      Selecione o número da consulta que deseja editar: 
      Digite "0" para voltar.
    ====================================================`);
    if(allAppointments.length == 0){
      console.log("Nenhuma consulta encontrada");
    }
    allAppointments.forEach((appmt) => {
      console.log(`${appmt.id} - ${appmt.patient.getName()}`)
    });

    const selectedID: number = Number(this.prompt('Número: '));

    if(selectedID === 0){
      this.primaryScreen.startScreen();
    }

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
    } else {
      console.log("Nenhuma consulta encontrada com esse ID.");
      this.selectAppointment();
    }
  }

  promptEdit(selected: number, appmtSelected: IAppointment): void {
    switch (selected) {
      case 1:
        const name: string = this.patientScreen.promptName();
        appmtSelected.patient.setName(name);
        break;
      case 2:
        const cpf: string = this.patientScreen.promptCPF();
        appmtSelected.patient.setCpf(cpf);
        break;
      case 3:
        const age: number = this.patientScreen.promptAge();
        appmtSelected.patient.setAge(age);
        break;
      case 4:
        const street: string = this.addressScreen.promptStreet();
        appmtSelected.address.setStreet(street);
        break;
      case 5:
        const houseNumber: number = this.addressScreen.promptHouseNumber();
        appmtSelected.address.setHouseNumber(houseNumber);
        break;
      case 6:
        const city: string = this.addressScreen.promptCity();
        appmtSelected.address.setCity(city);
        break;
      case 7:
        const state: string = this.addressScreen.promptState();
        appmtSelected.address.setState(state);
        break;
      case 8:
        const country: string = this.addressScreen.promptCountry();
        appmtSelected.address.setCountry(country);
        break;
      case 9:
        const reason: string = this.medicalInfoScreen.promptReason();
        appmtSelected.medicalInformation.setReason(reason);
        break;
      case 10:
        const description: string = this.medicalInfoScreen.promptDescription();
        appmtSelected.medicalInformation.setDescription(description);
        break;
      case 11:
        const doctorName: string = this.medicalInfoScreen.promptDoctorName();
        appmtSelected.medicalInformation.setDoctorName(doctorName);
        break;
      case 12:
        const date: string = this.scheduleScreen.promptDate();
        appmtSelected.schedule.setDate(date);
        break;
      case 13:
        const time: string = this.scheduleScreen.promptTime();
        appmtSelected.schedule.setTime(time);
        break;
      case 14:
        const location: string = this.scheduleScreen.promptLocal();
        appmtSelected.schedule.setLocation(location);
        break;
      default:
        console.log("Opção inválida. Tente novamente.");
        break;
    }
    this.primaryScreen.startScreen();
  }
  
}