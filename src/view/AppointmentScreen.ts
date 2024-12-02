import { BaseScreen } from "./BaseScreen";
import PrimaryScreen from "./PrimaryScreen";
import PatientScreen from "./PatientScreen";
import Router from "../control/Router";
import AddressScreen from "./AddressScreen";
import MedicalInfoScreen from "./MedicalInfoScreen";
import ScheduleScreen from "./ScheduleScreen";

export default class AppointmentScreen extends BaseScreen {
  primaryScreen: PrimaryScreen;
  private patientScreen: PatientScreen;
  private router: Router;
  private addressScreen: AddressScreen;
  private medicalInfoScreen: MedicalInfoScreen;
  private scheduleScreen: ScheduleScreen;

  constructor(
    primaryScreen: PrimaryScreen, 
    router: Router, 
    patientScreen: PatientScreen, 
    addressScreen: AddressScreen, 
    medicalInfoScreen: MedicalInfoScreen, 
    scheduleScreen: ScheduleScreen
  ) {
    super(primaryScreen);
    this.primaryScreen = primaryScreen;
    this.router = router;
    this.patientScreen = patientScreen;
    this.addressScreen = addressScreen;
    this.medicalInfoScreen = medicalInfoScreen;
    this.scheduleScreen = scheduleScreen;
  }

  public registerAppointment(): void {
    this.patientScreen.startPatient();
    const name = this.patientScreen.promptName();
    const age = this.patientScreen.promptAge();
    const cpf = this.patientScreen.promptCPF();

    this.addressScreen.startAddress();
    const street = this. addressScreen.promptStreet();
    const houseNumber = this. addressScreen.promptHouseNumber();
    const city = this. addressScreen.promptCity();
    const state = this.addressScreen.promptState();
    const country = this.addressScreen.promptCountry();

    this.medicalInfoScreen.startMedicalInfo();

    this.scheduleScreen.startScheduleScreem();
    


    console.log(`Consulta agendada com sucesso!`);
    console.log(`Nome: ${name}, Idade: ${age}, CPF: ${cpf}`);

    this.primaryScreen.startScreen();
  }
}
