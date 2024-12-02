import PromptSync from "prompt-sync";
import PrimaryScreen from "./PrimaryScreen";
import IAppointment from "../model/IAppointment";
import { BaseScreen } from "./BaseScreen";
import Appointment from "../model/Appointment";

export default class PatientScreen extends BaseScreen {
  private primaryScreen: PrimaryScreen;


  constructor(primaryScreen: PrimaryScreen) {
    this.primaryScreen = primaryScreen;
    super();
  }


  startPatient(): void{
    console.log(` 
      ================================
      Criar nova consulta para um paciente
      Digite "0" para cancelar.
      ================================
      Sessão 1: Informações gerais
      ================================
    `);
  }

  promptName(): string {
    const name: string = this.prompt("Name:");

    if(!this.validateNonEmpty(name, "Nome") || !this.validateNonNumber(name, "Nome")){
      this.promptName();
    }
    return name;
  }

  promptAge(): number {
    const ageString: string = this.prompt("Idade:");
    if(!this.validateNonEmpty(ageString, "Idade") || !this.validateNumber(ageString, "Idade", 1, 3)){
      this.promptAge();
    }
    const age: number = Number(ageString);
    return age;
  }

  promptCPF(): string {
    const cpf: string = this.prompt("CPF"); 
    if(!this.validateNonEmpty(cpf, "CPF") || !this.validateNumber(cpf, "CPF", 11, 11)){
      this.promptCPF();
    }
    return cpf;
  }
}