import Patient from "./Patient";
import Address from "./Address";
import MedicalInformation from "./MedicalInformation";
import Schedule from "./Schedule";
import IAppointment from "./IAppointment";

export default class Appointment implements IAppointment {
  public patient: Patient;
  public address: Address;
  public medicalInformation: MedicalInformation;
  public schedule: Schedule;
  public id: number = NaN;

  constructor(
    patient: Patient,
    address: Address,
    medicalInformation: MedicalInformation,
    schedule: Schedule,
    
  ) {
    this.patient = patient;
    this.address = address;
    this.medicalInformation = medicalInformation;
    this.schedule = schedule;
  }
}
