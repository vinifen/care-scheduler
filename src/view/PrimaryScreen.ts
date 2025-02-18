import promptSync from "prompt-sync";
import Router from "../router/Router";
import AppointmentScreen from "./appointment/AppointmentScreen";
import ListScreen from "./ListScreen";
import PatientScreen from "./appointment/PatientScreen";
import AddressScreen from "./appointment/AddressScreen";
import MedicalInfoScreen from "./appointment/MedicalInfoScreen";
import ScheduleScreen from "./appointment/ScheduleScreen";
import EditAppointmentScreen from "./EditAppointmentScreen";
import DeleteAppointment from "./DeleteAppointmentScreen";
import GeneratePDFScreen from "./GeneratePDFScreen";

export default class PrimaryScreen {
  private appScr: AppointmentScreen;
  private listQr: ListScreen;
  private ptScr: PatientScreen;
  private addScr: AddressScreen;
  private mdIfScr: MedicalInfoScreen;
  private schScr: ScheduleScreen;
  private editAppScr: EditAppointmentScreen;
  private delAppScr: DeleteAppointment;
  private genPDF: GeneratePDFScreen;

  constructor(router: Router) {
    this.schScr = new ScheduleScreen(this);
    this.mdIfScr = new MedicalInfoScreen(this);
    this.ptScr = new PatientScreen(this);
    this.addScr = new AddressScreen(this);
    this.appScr = new AppointmentScreen(this, router, this.ptScr, this.addScr, this.mdIfScr, this.schScr);
    this.listQr = new ListScreen(this, router);
    this.editAppScr = new EditAppointmentScreen(this, router, this.ptScr, this.addScr, this.mdIfScr, this.schScr)
    this.delAppScr = new DeleteAppointment(router, this);
    this.genPDF = new GeneratePDFScreen(this, router);
  }

  public async startScreen() {
    const prompt = promptSync();
    console.log(`
      ================================
      Bem-vindo ao Care Scheduler
      ================================
      Digite o número correspondente à opção desejada:
      1 - Agendar uma nova consulta
      2 - Listar consultas agendadas
      3 - Editar consultas
      4 - Excluir consultas
      5 - Gerar PDF
      0 - Sair
      ================================
    `);

    const opcao = prompt("Escolha uma opção: ");
    if (isNaN(Number(opcao)) || Number(opcao) < 0 || Number(opcao) > 5) {
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
      case 3:
        this.editAppScr.selectAppointment();
        break;
      case 4:
        this.delAppScr.delete();
        break;
      case 5:
        await this.genPDF.selectAppointment();
        break;
      case 0:
        console.log("Saindo...");
        process.exit(0);
    }
  }
}
