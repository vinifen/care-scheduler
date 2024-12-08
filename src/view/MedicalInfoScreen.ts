import { BaseScreen } from "./BaseScreen";
import PrimaryScreen from "./PrimaryScreen";

export default class MedicalInfoScreen extends BaseScreen {
  primaryScreen: PrimaryScreen;

  constructor(primaryScreen: PrimaryScreen){
    super(primaryScreen);
    this.primaryScreen = primaryScreen;
  }

  startMedicalInfo(): void{
    console.log(` 
      ================================
      Informações Médicas: 
      ================================`);
  }

  promptReason(): string {
    const reason: string = this.prompt("Razão: ")
    if(!this.validateNonEmpty(reason, "Razão")){
      return this.promptReason();
    }
    return reason;
  }

  promptDescription(): string {
    const description: string = this.prompt("Descrição: ");
    if(!this.validateNonEmpty(description, "Descrição")){
      return this.promptReason();
    }
    return description;
  }

  promptDoctorName(): string {
    const doctorName: string = this.prompt("Nome do Médico: ");

    if(!this.validateNonEmpty(doctorName, "Nome do Médico") || !this.validateNonNumber(doctorName, "Nome do Médico")){
      return this.promptDoctorName();
    }
    return doctorName;
  }
      
}