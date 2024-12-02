import PromptSync from "prompt-sync";
import PrimaryScreen from "./PrimaryScreen";
import Router from "../control/Router";
import IAppointment from "../model/IAppointment";
import { BaseScreen } from "./BaseScreen";
import PatientScreen from "./PatientScreen";

export default class AppointmentScreen extends BaseScreen {
  private primaryScreen: PrimaryScreen;
  private router!: Router;
  private patientScreen: PatientScreen;

  constructor(primaryScreen: PrimaryScreen, router: Router, patientScreen: PatientScreen) {
    
    this.patientScreen = patientScreen;
    this.primaryScreen = primaryScreen;
    this.router = router
    super(this.primaryScreen);
  }

  registerGenerealInformation() {
      this.patientScreen.promptName();
      this.patientScreen.prompt();

      console.log(` 
        ================================
        Consulta criada com sucesso:
        ================================
        Nome: ${name}
        Idade: ${age}
        CPF: ${cpf}
        Endereço: Rua ${street}, Nº ${houseNumber}, ${city} ,${state}, ${country}
        Motivo: ${reason}
        Descrição: ${description}
        Médico: ${doctorName}
        Data: ${date}
        Hora: ${time}
        Local: ${location}
      `);

      continueRegistering = false;
    }
    this.primaryScreen.startScreen();
  }
}
