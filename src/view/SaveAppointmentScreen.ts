import PromptSync from "prompt-sync";
import PrimaryScreen from "./PrimaryScreen";
import Router from "../control/Router";
import IAppointment from "../model/IAppointment";
import { BaseScreen } from "./BaseScreen";

export default class AppointmentScreen extends BaseScreen {
  private primaryScreen: PrimaryScreen;
  private router!: Router;

  constructor(primaryScreen: PrimaryScreen, router: Router) {
    super();
    this.primaryScreen = primaryScreen;
    this.router = router
  }

  registerGenerealInformation() {
    const prompt = PromptSync();

    let continueRegistering = true;

    while (continueRegistering) {
      console.log(` 
        ================================
        Criar nova consulta para um paciente
        Digite "0" para cancelar.
        ================================
        Sessão 1: Informações gerais
        ================================
      `);

      const name = this.prompt("Nome:");
      if (!this.validateNonEmpty(name, "Nome") || !this.validateNonNumber(name, "Nome")) {
        this.registerGenerealInformation();
      }

      const promptAge: string = this.prompt("Idade: ");
      if(!this.validateNumber(promptAge, "Idade") || this.validateNonEmpty(promptAge, "Idade")){
        this.registerGenerealInformation();
      }

      const cpf = prompt('CPF (sem pontos/traços/espaços - 11 dígitos): ').trim();
      if (cpf === '0') {
        this.primaryScreen.startScreen();
        return;
      } else if (isNaN(Number(cpf)) || cpf.length !== 11 || cpf === '') {
        console.log("Entrada inválida. O CPF deve conter exatamente 11 dígitos.");
        this.registerAppointment();
        return;
      }

      console.log(` 
        ================================
        Sessão 2: Endereço
        ================================
      `);
      
      const street = prompt('Rua: ').trim();
      if (street === '0') {
        this.primaryScreen.startScreen();
        return;
      } else if (street === '') {
        console.log("Entrada inválida. O campo Rua não pode estar vazio.");
        this.registerAppointment();
        return;
      }
      
      const houseNumber = prompt('Número da casa: ').trim();
      if (houseNumber === '0') {
        this.primaryScreen.startScreen();
        return;
      } else if (isNaN(Number(houseNumber)) || Number(houseNumber) <= 0 || houseNumber === '') {
        console.log("Número inválido. Tente novamente.");
        this.registerAppointment();
        return;
      }
      
      const city = prompt('Cidade: ').trim();
      if (city === '0') {
        this.primaryScreen.startScreen();
        return;
      } else if (city === '') {
        console.log("Entrada inválida. O campo Cidade não pode estar vazio.");
        this.registerAppointment();
        return;
      }
      
      const state = prompt('Estado: ').trim();
      if (state === '0') {
        this.primaryScreen.startScreen();
        return;
      } else if (state === '') {
        console.log("Entrada inválida. O campo Estado não pode estar vazio.");
        this.registerAppointment();
        return;
      }
      
      const country = prompt('País: ').trim();
      if (country === '0') {
        this.primaryScreen.startScreen();
        return;
      } else if (country === '') {
        console.log("Entrada inválida. O campo País não pode estar vazio.");
        this.registerAppointment();
        return;
      }
      
      console.log(` 
        ================================
        Sessão 3: Informações Médicas
        ================================
      `);

      const reason = prompt('Motivo da consulta: ').trim();
      if (reason === '0') {
        this.primaryScreen.startScreen();
        return;
      } else if (reason === '') {
        console.log("Entrada inválida. O campo Motivo não pode estar vazio.");
        this.registerAppointment();
        return;
      }

      const description = prompt('Descrição da consulta: ').trim();
      if (description === '0') {
        this.primaryScreen.startScreen();
        return;
      } else if (description === '') {
        console.log("Entrada inválida. O campo Descrição não pode estar vazio.");
        this.registerAppointment();
        return;
      }

      const doctorName = prompt('Médico responsável: ').trim();
      if (doctorName === '0') {
        this.primaryScreen.startScreen();
        return;
      } else if (doctorName === '') {
        console.log("Entrada inválida. O campo Médico não pode estar vazio.");
        this.registerAppointment();
        return;
      }

      console.log(` 
        ================================
        Sessão 3: Data e Local
        ================================
      `);

      const date = prompt('Dia (DD/MM/AAAA): ').trim();
      if (date === '0') {
        this.primaryScreen.startScreen();
        return;
      } else if (date === '') {
        console.log("Entrada inválida. O campo Dia não pode estar vazio.");
        this.registerAppointment();
        return;
      }

      const time = prompt('Hora (HH:MM): ').trim();
      if (time === '0') {
        this.primaryScreen.startScreen();
        return;
      } else if (time === '') {
        console.log("Entrada inválida. O campo Hora não pode estar vazio.");
        this.registerAppointment();
        return;
      }

      const location = prompt('Local (endereço completo): ').trim();
      if (location === '0') {
        this.primaryScreen.startScreen();
        return;
      } else if (location === '') {
        console.log("Entrada inválida. O campo Local não pode estar vazio.");
        this.registerAppointment();
        return;
      }

      const appointment: IAppointment =  this.router.apCrtl.getAppointmentModel(
        this.router.apCrtl.getPatientModel(name, cpf, age),
        this.router.apCrtl.getAddressModel(street, houseNumber, city, state, country),
        this.router.apCrtl.getMedicalInformationModel(reason, description, doctorName),
        this.router.apCrtl.getScheduleModel(date, time, location),
      );
      this.router.apCrtl.registerAppointment(appointment);

      console.log(` 
        ================================
        Consulta criada com sucesso:
        ================================
        Nome: ${name}
        Idade: ${age}
        CPF: ${cpf}
        Endereço: Rua ${street}, Nº ${houseNumber}, ${city} ,${state}, ${country}
        Motivo: ${reason}
        Descrição: ${description}
        Médico: ${doctorName}
        Data: ${date}
        Hora: ${time}
        Local: ${location}
      `);

      continueRegistering = false;
    }
    this.primaryScreen.startScreen();
  }
}
