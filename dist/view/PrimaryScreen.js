"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const AppointmentScreen_1 = __importDefault(require("./AppointmentScreen"));
const ListScreen_1 = __importDefault(require("./ListScreen"));
const PatientScreen_1 = __importDefault(require("./PatientScreen"));
const AddressScreen_1 = __importDefault(require("./AddressScreen"));
const MedicalInfoScreen_1 = __importDefault(require("./MedicalInfoScreen"));
const ScheduleScreen_1 = __importDefault(require("./ScheduleScreen"));
class PrimaryScreen {
    constructor(router) {
        this.schScr = new ScheduleScreen_1.default(this);
        this.mdIfScr = new MedicalInfoScreen_1.default(this);
        this.ptScr = new PatientScreen_1.default(this);
        this.addScr = new AddressScreen_1.default(this);
        this.appScr = new AppointmentScreen_1.default(this, router, this.ptScr, this.addScr, this.mdIfScr, this.schScr);
        this.listQr = new ListScreen_1.default(this, router);
    }
    startScreen() {
        const prompt = (0, prompt_sync_1.default)();
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
                process.exit(0);
        }
    }
}
exports.default = PrimaryScreen;
