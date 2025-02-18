import PrimaryScreen from "./PrimaryScreen";
import Router from "../router/Router";
import IAppointment from "../model/IAppointment";
import PromptSync from "prompt-sync";

export default class DeleteAppointment {
  private prompt = PromptSync();
  private router: Router;
  private primaryScreen: PrimaryScreen;

  constructor(router: Router, primaryScreen: PrimaryScreen) {
    this.router = router;
    this.primaryScreen = primaryScreen;
  }

  delete(): void {
    const allAppointments: IAppointment[] = this.router.apCrtl.getDbAppointment();

    console.log(`
      Selecione o número da consulta que deseja excluir: 
      Digite "0" para voltar.
    ====================================================`);
    allAppointments.forEach((appmt) => {
      console.log(`${appmt.id} - ${appmt.patient.getName()}`);
    });

    const selectedID: number = Number(this.prompt("Número: "));

    if (selectedID === 0) {
      this.primaryScreen.startScreen();
      return;
    }

    const selectedAppointment = allAppointments.find((appmt) => appmt.id === selectedID);

    if (selectedAppointment) {
      console.log(`
        Tem certeza que deseja excluir a consulta ${selectedAppointment.id} (${selectedAppointment.patient.getName()})?
        Digite 1 para confirmar ou 0 para cancelar.
        =======================================================================
      `);
      const confirmDelete: number = Number(this.prompt("Escolha: "));

      if (confirmDelete === 1) {
        this.deleteData(selectedID);
        console.log(`Consulta ${selectedID} excluída com sucesso!`);
      } else {
        console.log("Exclusão cancelada.");
      }
    } else {
      console.log("Nenhuma consulta encontrada com esse ID.");
    }

    this.primaryScreen.startScreen();
  }

  deleteData(idSelected: number): void {
    const allAppointments: IAppointment[] = this.router.apCrtl.getDbAppointment();
    const updatedAppointments = allAppointments.filter((appmt) => appmt.id !== idSelected);
    this.router.apCrtl.setDbAppointment(updatedAppointments);
  }
}
