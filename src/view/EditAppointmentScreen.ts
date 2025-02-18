import ScheduleScreen from "./appointment/ScheduleScreen";
import PatientScreen from "./appointment/PatientScreen";
import AddressScreen from "./appointment/AddressScreen";
import MedicalInfoScreen from "./appointment/MedicalInfoScreen";
import IAppointment from "../model/IAppointment";
import PrimaryScreen from "./PrimaryScreen";
import Router from "../router/Router";
import SelectAppointmentScreen from "./SelectAppointmentScreen";


export default class EditAppointmentScreen extends SelectAppointmentScreen{
  private patientScreen: PatientScreen;
  private addressScreen: AddressScreen;
  private medicalInfoScreen: MedicalInfoScreen;
  private scheduleScreen: ScheduleScreen;

  constructor(
    primaryScreen: PrimaryScreen,
    router: Router,
    patientScreen: PatientScreen, 
    addressScreen: AddressScreen, 
    medicalInfoScreen: MedicalInfoScreen, 
    scheduleScreen: ScheduleScreen
  ){
    super(router, primaryScreen);
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

  async selectAppointment(){ 
    const allAppointments: IAppointment[] = this.router.apCrtl.getDbAppointment();
    
    console.log(`
      Selecione o número da consulta que deseja editar: 
      Digite "0" para voltar.
    ====================================================`);
    if(allAppointments.length == 0){
      console.log("Não foi encontrada nenhuma consulta para ser editada.");
    }
    allAppointments.forEach((appmt) => {
      console.log(`${appmt.id} - ${appmt.patient.getName()}`)
    });

    const input = this.prompt("Input editar: ");

    const selected: number | string = isNaN(Number(input)) 
      ? (/[a-zA-Z]/.test(input) ? input : 'Erro: entrada inválida') 
      : Number(input);

    if (selected === 'Erro: entrada inválida') {
      console.log('Erro: entrada inválida. Você inseriu letras e números juntos ou um formato inválido.');
      this.selectAppointment();
    } else if (typeof selected === 'string') {
      console.log(`String inserida: ${selected}`);
    } else {
      console.log(`Número inserido: ${selected}`);
    }


    if(selected === 0){
      this.primaryScreen.startScreen();
    }

    this.filterAppointment(selected, allAppointments);
  }

   public filterAppointment(selected: number | string, allAppointments: IAppointment[]): void {
    let selectedAppointment: IAppointment | undefined;
  
    if (typeof selected === "number") {
      selectedAppointment = allAppointments.find((appmt) => appmt.id === selected);
    } else if (typeof selected === "string") {
      selectedAppointment = allAppointments.find((appmt) => appmt.patient.getName().toLowerCase() === selected.toLowerCase());
    }
    
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