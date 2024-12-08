import Address from "./Address";
import MedicalInformation from "./MedicalInformation";
import Patient from "./Patient";
import Schedule from "./Schedule";

export default interface IAppointment {
  patient: Patient;
  address: Address;
  medicalInformation: MedicalInformation;
  schedule: Schedule;
  id: number;
}