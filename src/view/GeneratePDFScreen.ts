import PromptSync from "prompt-sync";
import Router from "../router/Router";
import PrimaryScreen from "./PrimaryScreen";
import IAppointment from "../model/IAppointment";
import Appointment from "../model/Appointment";
export default class GeneratePDFScreen {
  private prompt = PromptSync();
  constructor(private primaryScreen: PrimaryScreen, private router: Router){}

  async selectAppointment(){
    const allAppointments: IAppointment[] = this.router.apCrtl.getDbAppointment();

    console.log(`
      Selecione o número da consulta para gerar o PDF: 
      Digite "0" para voltar.
    ====================================================`);

    if(allAppointments.length == 0){
      console.log("Nenhuma consulta encontrada");
    }

    allAppointments.forEach((appmt) => {
      console.log(`${appmt.id} - ${appmt.patient.getName()}`)
    });

    const selectedID: number = Number(this.prompt('Número: '));

    if(selectedID === 0){
      this.primaryScreen.startScreen();
    }

    const selectedAppointment = allAppointments.find((appmt) => {
      if (appmt.id === selectedID) { 
        return true;
      }
      return false;
    });
    
    if (selectedAppointment) {
      console.log("Consulta selecionada:", selectedAppointment);
      await this.generate(selectedAppointment);
    } else {
      console.log("Nenhuma consulta encontrada com esse ID.");
      this.selectAppointment();
    }
  }

  async generate(appointment: IAppointment){
    console.log(appointment);
    await this.router.apCrtl.getGeneratePdf(appointment);
    this.selectAppointment();
  }


}