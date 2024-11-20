export default class Schedule {
  private date: string; 
  private time: string;
  private location: string;

  constructor(date: string, time: string, location: string) {
    this.date = date;
    this.time = time;
    this.location = location;
  }

  public getDate(): string {
    return this.date;
  }

  public setDate(date: string): void {
    this.date = date;
  }

  public getTime(): string {
    return this.time;
  }

  public setTime(time: string): void {
    this.time = time;
  }

  public getLocation(): string {
    return this.location;
  }

  public setLocation(location: string): void {
    this.location = location;
  }

  public displaySchedule(): void {
    console.log(` 
      ================================
      Agendamento:
      ================================
      Data: ${this.getDate()}
      Hora: ${this.getTime()}
      Local: ${this.getLocation()}
    `);
  }
}
