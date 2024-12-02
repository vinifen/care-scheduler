import Database from "../db/Database";
import Address from "../model/Address";
import MedicalInformation  from "../model/MedicalInformation";
import Patient from "../model/Patient";
import Schedule from "../model/Schedule";
import Appointment from "../model/Appointment";
import IAppointment from "../model/IAppointment";

export default class AppointmentController {
  private db!: Database;

  constructor(db: Database){
    this.db = db;
  }

  public getAddressModel(street: string, houseNumber: number, city: string, state: string, country: string){
    return new Address(street, houseNumber, city, state, country);
  }

  public getPatientModel(name: string, cpf: string, age: string){
    return new Patient(name, cpf, age);
  }

  public getMedicalInformationModel(reason: string, description: string, doctorName: string){
    return new MedicalInformation(reason, description, doctorName);
  }

  public getScheduleModel(date: string, time: string, location: string){
    return new Schedule(date, time, location);
  }

  public getAppointmentModel(patient: Patient, address: Address, medicalInformation: MedicalInformation, schedule: Schedule){
    return new Appointment(patient, address, medicalInformation, schedule);
  }

  public registerAppointment(appointment: IAppointment){
    this.db.addNewAppointment(appointment)
  }

  public getDbAppointment() {
    return this.db.getAppointments(); 
  }
}