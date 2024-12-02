import { BaseScreen } from "./BaseScreen";
import PrimaryScreen from "./PrimaryScreen";

export default class MedicalInfoScreen {
  primaryScreen: PrimaryScreen;

  constructor(primaryScreen: PrimaryScreen){
    this.primaryScreen = primaryScreen;
  }

  startMedicalInfo(): void{

  }
  /*Motivo: ${reason}
        Descrição: ${description}
        Médico: ${doctorName}*/
}