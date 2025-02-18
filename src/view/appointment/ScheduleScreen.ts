import CreateScreen from "./CreateScreen";

export default class ScheduleScreen extends CreateScreen {
  startScreen(): void {
    console.log(`
      ===============================
      Consultas Agendadas:
      ===============================
    `);
  }

  promptDate(): string {
    const date: string = this.prompt('Dia (DD/MM/AAAA): ');
    if (!this.validateNonEmpty(date, "Data") || !this.validationLength(date, "Data", 8, 10) || !this.validateNonLetters(date, "Data")) {
      return this.promptDate();
    }
    return date;
  }

  promptTime(): string {
    const time: string = this.prompt('Hora (HH:MM): ');
    if (!this.validateNonEmpty(time, "Hora") || !this.validationLength(time, "Hora", 4, 5) || !this.validateNonLetters(time, "Hora")) {
      return this.promptTime();
    }
    return time;
  }

  promptLocal(): string {
    const local: string = this.prompt("Definir Local: ");
    if (!this.validateNonEmpty(local, "Local")) {
      return this.promptLocal();
    }
    return local;
  }
}
