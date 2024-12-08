import IAppointment from "../model/IAppointment";

export default class Database {
  private appointments: IAppointment[] = [];
  private currentId: number = 1;

  public addNewAppointment(appointment: IAppointment): void {
    appointment.id = this.currentId;
    this.appointments.push(appointment);
    this.currentId++;
    console.log(this.appointments);
  }

  public getAppointments(): IAppointment[] {
    return this.appointments;
  }

  public setAppointments(appointments: IAppointment[]): void {
    this.appointments = appointments;
  }
}
