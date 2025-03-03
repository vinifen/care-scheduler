import Router from "../router/Router";
import PrimaryScreen from "./PrimaryScreen";
import PromptSync from "prompt-sync";

export default class ListQueriesScreen {
  private primaryScreen: PrimaryScreen;
  private router: Router;
  private prompt = PromptSync();

  constructor(primaryScreen: PrimaryScreen, router: Router) {
    this.primaryScreen = primaryScreen;
    this.router = router;
  }

  public listAppointment() {
    const appointments = this.router.apCrtl.getDbAppointment();

    console.log("===============================");
    console.log("  Consultas Agendadas");
    console.log("===============================");

    
    if (appointments.length === 0) {
      console.log("Nenhuma consulta agendada.");
    } else {
      appointments.forEach((appointment, index) => {
        console.log(`\nConsulta ${index + 1}:`);
        console.log("-------------------------------");
        console.log(`\nID ${appointment.id}`);
        console.log(`Paciente: ${appointment.patient.getName()}`);
        console.log(`CPF: ${appointment.patient.getCpf()}`);
        console.log(`Idade: ${appointment.patient.getAge()}`);
        
        console.log("\nEndereço:");
        console.log(`Rua: ${appointment.address.getStreet()}`);
        console.log(`Número: ${appointment.address.getHouseNumber()}`);
        console.log(`Cidade: ${appointment.address.getCity()}`);
        console.log(`Estado: ${appointment.address.getState()}`);
        console.log(`País: ${appointment.address.getCountry()}`);
        
        console.log("\nInformações Médicas:");
        console.log(`Motivo: ${appointment.medicalInformation.getReason()}`);
        console.log(`Descrição: ${appointment.medicalInformation.getDescription()}`);
        console.log(`Médico: ${appointment.medicalInformation.getDoctorName()}`);
        
        console.log("\nAgendamento:");
        console.log(`Data: ${appointment.schedule.getDate()}`);
        console.log(`Hora: ${appointment.schedule.getTime()}`);
        console.log(`Local: ${appointment.schedule.getLocation()}`);

        console.log("-------------------------------");
      });
    }

    console.log("===============================");
    const returnScreen = this.prompt("Digite qualquer coisa para voltar: ")
    if(returnScreen != null){
      this.primaryScreen.startScreen();
    }
  }
}
