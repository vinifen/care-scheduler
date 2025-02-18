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

enum MenuOption {
  NewAppointment = 1,
  ListAppointments,
  EditAppointment,
  DeleteAppointment,
  GeneratePDF,
  Exit = 0
}

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
    this.editAppScr = new EditAppointmentScreen(this, router, this.ptScr, this.addScr, this.mdIfScr, this.schScr);
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
    const option = Number(opcao);

    if (isNaN(option) || !(option in MenuOption)) {
      console.log("Opção inválida.");
      this.startScreen();
      return;
    }

    switch (option) {
      case MenuOption.NewAppointment:
        this.appScr.startScreen();
        break;
      case MenuOption.ListAppointments:
        this.listQr.listAppointment();
        break;
      case MenuOption.EditAppointment:
        console.log("aqui");
        this.editAppScr.selectAppointment();
        break;
      case MenuOption.DeleteAppointment:
        console.log("aqui");
        this.delAppScr.selectAppointment();
        break;
      case MenuOption.GeneratePDF:
        await this.genPDF.selectAppointment();
        break;
      case MenuOption.Exit:
        console.log("Saindo...");
        process.exit(0);
    }
  }
}
