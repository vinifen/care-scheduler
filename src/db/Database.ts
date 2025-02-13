import IAppointment from "../model/IAppointment";

export default class Database<T> {
  private appointments: T[] = [];

  public addNewAppointment(appointment: T): void {
    this.appointments.push(appointment);
  }

  public getAppointments(): T[] {
    return this.appointments;
  }

  public setAppointments(appointments: T[]): void {
    this.appointments = appointments;
  }
}
