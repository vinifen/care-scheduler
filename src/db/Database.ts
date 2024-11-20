import IAppointment from "../model/IAppointment";

export default class Database {
  private appointment: IAppointment[] = [];
  
  public addNewAppointment(appointment: IAppointment): void {
    this.appointment.push(appointment);
    console.log(this.appointment);
  }

  public getAppointments(){
    return this.appointment;
  }
}
