import promptSync from 'prompt-sync';
import Router from '../control/Router';
import AppointmentScreen from './AppointmentScreen';
import ListScreen from './ListScreen';

export default class PrimaryScreen {
  private appScr!: AppointmentScreen;
  private listQr!: ListScreen;
  private router!: Router;

  constructor(router: Router){
    this.router = router;
    this.appScr = new AppointmentScreen(this, this.router);
    this.listQr = new ListScreen(this, this.router);
  }

  public startScreen(): void {
    console.log(`
      ================================
      Bem-vindo ao Care Scheduler
      ================================
      Digite o número correspondente à opção desejada:

      1 - Agendar uma nova consulta
      2 - Listar consultas agendadas
      0 - Sair
      ===================================
    `);

    const prompt = promptSync();
    const opcao = prompt('Escolha uma opção: ');

    if (isNaN(Number(opcao)) || Number(opcao) < 0 || Number(opcao) > 4) {
      console.log("Opção inválida, por favor escolha uma opção entre 0 e 4.");
      return this.startScreen(); 
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
        return; 
      default:
        console.log("Opção inválida");
    }

    return;
  }
}