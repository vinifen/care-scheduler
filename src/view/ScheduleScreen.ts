import { BaseScreen } from "./BaseScreen";
import PrimaryScreen from "./PrimaryScreen";

export default class ScheduleScreen {
  primaryScreen: PrimaryScreen;

  constructor(primaryScreen: PrimaryScreen){
    this.primaryScreen = primaryScreen;
  }

  startScheduleScreem(): void{
    /*Data: ${date}
        Hora: ${time}
        Local: ${location}*/
  }
}