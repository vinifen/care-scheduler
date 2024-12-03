import { BaseScreen } from "./BaseScreen";
import PrimaryScreen from "./PrimaryScreen";

export default class ScheduleScreen extends BaseScreen{
  primaryScreen: PrimaryScreen;

  constructor(primaryScreen: PrimaryScreen){
    super(primaryScreen);
    this.primaryScreen = primaryScreen;
  }

  startScheduleScreen(): void{
    console.log(`
      ===============================
            Consultas Agendadas
      ===============================
      `);
  }

  promptDate(): string {
    const date : string = this.prompt('Dia (DD/MM/AAAA): ');
    if(!this.validateNonEmpty(date, "Data") || !this.validationLength(date, "Data", 8, 10) ){
      return this.promptDate();
    }
    return date;
  }

  promptTime(): string {
    const time : string = this.prompt('Hora (HH:MM): ');
    if(!this.validateNonEmpty(time, "Hora") || !this.validationLength(time, "Hora", 4, 5) ){
      return this.promptTime();
    }
    return time
  }

  promptLocal(): string {
    const local: string = this.prompt("Definir Local: ")
    if(!this.validateNonEmpty(local, "Local")){
      return this.promptLocal();
    }
    return local;
  }

}