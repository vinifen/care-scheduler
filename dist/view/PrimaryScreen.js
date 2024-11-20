"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const AppointmentScreen_1 = __importDefault(require("./AppointmentScreen"));
const ListScreen_1 = __importDefault(require("./ListScreen"));
class PrimaryScreen {
    constructor(router) {
        this.router = router;
        this.appScr = new AppointmentScreen_1.default(this, this.router);
        this.listQr = new ListScreen_1.default(this, this.router);
    }
    startScreen() {
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
        const prompt = (0, prompt_sync_1.default)();
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
exports.default = PrimaryScreen;
