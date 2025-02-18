import PromptSync from "prompt-sync";
import IAppointment from "../model/IAppointment";
import PrimaryScreen from "./PrimaryScreen";
import Router from "../router/Router";

export default abstract class SelectAppointmentScreen { 
  public prompt = PromptSync();
  

  constructor(public router: Router, public primaryScreen: PrimaryScreen) {}

  selectAppointment(){ 
    const allAppointments: IAppointment[] = this.router.apCrtl.getDbAppointment();
    
    console.log(`
      Selecione o número do campo:
    ====================================================`);
    
    if(allAppointments.length === 0) {
      console.log("Nenhuma consulta encontrada");
    }
    
    allAppointments.forEach((appmt) => {
      console.log(`${appmt.id} - ${appmt.patient.getName()}`);
    });

    const selectedID: number = Number(this.prompt('Número: '));

    if(selectedID === 0) {
      this.primaryScreen.startScreen();
      return;
    }

    this.filterAppointment(selectedID, allAppointments);
  }

  abstract filterAppointment(selectedID: number, allAppointments: IAppointment[]): void;
}
