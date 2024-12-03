import PrimaryScreen from "./PrimaryScreen";
import { BaseScreen } from "./BaseScreen";

export default class PatientScreen extends BaseScreen {
  primaryScreen: PrimaryScreen;


  constructor(primaryScreen: PrimaryScreen) {
    super(primaryScreen);
    this.primaryScreen = primaryScreen;
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
    const name: string = this.prompt("Name: ");

    if(!this.validateNonEmpty(name, "Nome") || !this.validateNonNumber(name, "Nome")){
      return this.promptName();
    }
    return name;
  }

  promptAge(): number {
    const ageString: string = this.prompt("Idade: ");
    if(!this.validateNonEmpty(ageString, "Idade") || !this.validateNumber(ageString, "Idade")  || !this.validationLength(ageString, "Idade", 1, 3)){
      return this.promptAge();
    }
    const age: number = Number(ageString);
    return age;
  }

  promptCPF(): string {
    const cpf: string = this.prompt("CPF: "); 
    if(!this.validateNonEmpty(cpf, "CPF") || !this.validateNumber(cpf, "CPF") || !this.validationLength(cpf, "CPF", 11, 11)){
      return this.promptCPF();
    }
    return cpf;
  }
}