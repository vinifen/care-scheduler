import PrimaryScreen from "./PrimaryScreen";
import Router from "../router/Router";
import IAppointment from "../model/IAppointment";
import PromptSync from "prompt-sync";
import SelectAppointmentScreen from "./SelectAppointmentScreen";

export default class DeleteAppointment extends SelectAppointmentScreen {
  public prompt = PromptSync();

  constructor(router: Router, primaryScreen: PrimaryScreen) {
    super(router, primaryScreen);
  }

  async selectAppointment() { 
    const allAppointments: IAppointment[] = this.router.apCrtl.getDbAppointment();
    
    console.log(`
      Selecione o número ou nome da consulta que dejesa excluir:
      Digite "0" para voltar.
    ====================================================`);
    
    if (allAppointments.length === 0) {
      console.log("Não foi encontrada nenhuma consulta.");
      this.primaryScreen.startScreen();
      return;
    }

    allAppointments.forEach((appmt) => {
      console.log(`${appmt.id} - ${appmt.patient.getName()}`);
    });

    const input = this.prompt("input deletar: ");
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


  public filterAppointment(selected: number | string, allAppointments: IAppointment[]): void {
    let selectedAppointment: IAppointment | undefined;
  
    if (typeof selected === "number") {
      selectedAppointment = allAppointments.find((appmt) => appmt.id === selected);
    } else if (typeof selected === "string") {
      selectedAppointment = allAppointments.find((appmt) => appmt.patient.getName().toLowerCase() === selected.toLowerCase());
    }
  
    if (!selectedAppointment) {
      console.log("Nenhuma consulta encontrada com esse ID ou nome.");
      this.selectAppointment();
      return;
    }
  
    console.log(`
      Tem certeza que deseja excluir a consulta ${selectedAppointment.id} (${selectedAppointment.patient.getName()})?
      Digite 1 para confirmar ou 0 para cancelar.
    ====================================================
    `);
  
    const confirmDelete: number = Number(this.prompt("Escolha: "));
  
    if (confirmDelete === 1) {
      this.deleteData(selectedAppointment.id);
      console.log(`Consulta ${selectedAppointment.id} excluída com sucesso!`);
    } else {
      console.log("Exclusão cancelada.");
    }
  
    this.primaryScreen.startScreen();
  }

  private deleteData(idSelected: number): void {
    const allAppointments: IAppointment[] = this.router.apCrtl.getDbAppointment();
    const updatedAppointments = allAppointments.filter((appmt) => appmt.id !== idSelected);
    this.router.apCrtl.setDbAppointment(updatedAppointments);
  }
}
