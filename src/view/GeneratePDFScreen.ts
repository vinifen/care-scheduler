import Router from "../router/Router";
import PrimaryScreen from "./PrimaryScreen";
import IAppointment from "../model/IAppointment";
import SelectAppointmentScreen from "./SelectAppointmentScreen";

export default class GeneratePDFScreen extends SelectAppointmentScreen {

  constructor(public primaryScreen: PrimaryScreen, public router: Router){
    super(router, primaryScreen)
  }

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

    const input = this.prompt("Input pdf: ");
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

    await this.filterAppointment(selected, allAppointments);
  }

  public async filterAppointment(selected: number | string, allAppointments: IAppointment[]): Promise<void> {
    let selectedAppointment: IAppointment | undefined;
    
    if (typeof selected === "number") {
      selectedAppointment = allAppointments.find((appmt) => appmt.id === selected);
    } else if (typeof selected === "string") {
      selectedAppointment = allAppointments.find((appmt) => appmt.patient.getName().toLowerCase() === selected.toLowerCase());
    }
    
    if (selectedAppointment) {
      console.log("Consulta selecionada:", selectedAppointment);
      await this.generate(selectedAppointment);
    } else {
      console.log("Nenhuma consulta encontrada com esse ID.");
      this.selectAppointment();
    }
  }


  async generate(appointment: IAppointment){
    await this.router.apCrtl.getGeneratePdf(appointment);
    this.selectAppointment();
  }


}