"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseScreen_1 = require("./BaseScreen");
class ScheduleScreen extends BaseScreen_1.BaseScreen {
    constructor(primaryScreen) {
        super(primaryScreen);
        this.primaryScreen = primaryScreen;
    }
    startScheduleScreen() {
        console.log(`
      ===============================
            Consultas Agendadas
      ===============================
      `);
    }
    promptDate() {
        const date = this.prompt('Dia (DD/MM/AAAA): ');
        if (!this.validateNonEmpty(date, "Data") || !this.validationLength(date, "Data", 8, 10)) {
            return this.promptDate();
        }
        return date;
    }
    promptTime() {
        const time = this.prompt('Hora (HH:MM): ');
        if (!this.validateNonEmpty(time, "Hora") || !this.validationLength(time, "Hora", 4, 5)) {
            return this.promptTime();
        }
        return time;
    }
    promptLocal() {
        const local = this.prompt("Definir Local: ");
        if (!this.validateNonEmpty(local, "Local")) {
            return this.promptLocal();
        }
        return local;
    }
}
exports.default = ScheduleScreen;
