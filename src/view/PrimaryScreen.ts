import promptSync from "prompt-sync";
import Router from "../control/Router";
import AppointmentScreen from "./AppointmentScreen";
import ListScreen from "./ListScreen";
import PatientScreen from "./PatientScreen";
import AddressScreen from "./AddressScreen";
import MedicalInfoScreen from "./MedicalInfoScreen";
import ScheduleScreen from "./ScheduleScreen";

export default class PrimaryScreen {
  private appScr: AppointmentScreen;
  private listQr: ListScreen;
  private ptScr: PatientScreen;
  private addScr: AddressScreen;
  private mdIfScr: MedicalInfoScreen;
  private schScr: ScheduleScreen;

  constructor(router: Router) {
    this.schScr = new ScheduleScreen(this);
    this.mdIfScr = new MedicalInfoScreen(this);
    this.ptScr = new PatientScreen(this);
    this.addScr = new AddressScreen(this);
    this.appScr = new AppointmentScreen(this, router, this.ptScr, this.addScr, this.mdIfScr, this.schScr);
    this.listQr = new ListScreen(this, router);
  }

  public startScreen(): void {
    const prompt = promptSync();
    console.log(`
      ================================
      Bem-vindo ao Care Scheduler
      ================================
      Digite o número correspondente à opção desejada:
      1 - Agendar uma nova consulta
      2 - Listar consultas agendadas
      0 - Sair
      ================================
    `);

    const opcao = prompt("Escolha uma opção: ");
    if (isNaN(Number(opcao)) || Number(opcao) < 0 || Number(opcao) > 2) {
      console.log("Opção inválida.");
      this.startScreen();
      return;
    }

    switch (Number(opcao)) {
      case 1:
        this.appScr.registerAppointment();
        break;
      case 2:
        this.listQr.listAppointment();
        break;
      case 0:
        console.log("Saindo...");
        break;
    }
  }
}
