"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class DeleteAppointment {
    constructor(router, primaryScreen) {
        this.prompt = (0, prompt_sync_1.default)();
        this.router = router;
        this.primaryScreen = primaryScreen;
    }
    delete() {
        const allAppointments = this.router.apCrtl.getDbAppointment();
        console.log(`
      Selecione o número da consulta que deseja excluir: 
      Digite "0" para voltar.
    ====================================================`);
        allAppointments.forEach((appmt) => {
            console.log(`${appmt.id} - ${appmt.patient.getName()}`);
        });
        const selectedID = Number(this.prompt("Número: "));
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
            const confirmDelete = Number(this.prompt("Escolha: "));
            if (confirmDelete === 1) {
                this.deleteData(selectedID);
                console.log(`Consulta ${selectedID} excluída com sucesso!`);
            }
            else {
                console.log("Exclusão cancelada.");
            }
        }
        else {
            console.log("Nenhuma consulta encontrada com esse ID.");
        }
        this.primaryScreen.startScreen();
    }
    deleteData(idSelected) {
        const allAppointments = this.router.apCrtl.getDbAppointment();
        const updatedAppointments = allAppointments.filter((appmt) => appmt.id !== idSelected);
        this.router.apCrtl.setDbAppointment(updatedAppointments);
    }
}
exports.default = DeleteAppointment;
