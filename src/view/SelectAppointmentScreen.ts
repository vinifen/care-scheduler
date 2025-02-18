import PromptSync from "prompt-sync";
import IAppointment from "../model/IAppointment";
import PrimaryScreen from "./PrimaryScreen";
import Router from "../router/Router";

export default abstract class SelectAppointmentScreen { 
  public prompt = PromptSync();

  constructor(public router: Router, public primaryScreen: PrimaryScreen) {}

  abstract filterAppointment(selected: number | string, allAppointments: IAppointment[]): void;

  async selectAppointment() { 
    const allAppointments: IAppointment[] = this.router.apCrtl.getDbAppointment();
    
    console.log(`
      Selecione o número ou nome da consulta:
      Digite "0" para voltar.
    ====================================================`);
    
    if (allAppointments.length === 0) {
      console.log("Nenhuma consulta encontrada.");
      this.primaryScreen.startScreen();
      return;
    }

    allAppointments.forEach((appmt) => {
      console.log(`${appmt.id} - ${appmt.patient.getName()}`);
    });

    const input = this.prompt("Input: ");
    const selected: number | string = isNaN(Number(input)) 
      ? (/[a-zA-Z]/.test(input) ? input : 'Erro: entrada inválida') 
      : Number(input);

    if (selected === 'Erro: entrada inválida') {
      console.log('Erro: entrada inválida.');
      this.selectAppointment();
      return;
    }

    if (selected === 0) {
      this.primaryScreen.startScreen();
      return;
    }

    this.filterAppointment(selected, allAppointments);
  }
}
