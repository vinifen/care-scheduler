import ScheduleScreen from "./ScheduleScreen";
import PatientScreen from "./PatientScreen";
import AddressScreen from "./AddressScreen";
import MedicalInfoScreen from "./MedicalInfoScreen";
import Router from "../control/Router";
import IAppointment from "../model/IAppointment";
import PromptSync from "prompt-sync";

export default class EditAppointmentScreen {
  private router: Router;

  constructor(router: Router){
    this.router = router;
  }

  selectAppointment(): void{ 
    const prompt = PromptSync();
    const allAppointments: IAppointment[] = this.router.apCrtl.getDbAppointment();
    
    console.log(`
      Selecione o número da consulta que deseja editar: 
    ====================================================`);
    allAppointments.forEach((appmt, index) => {
      console.log(`${index} - ${appmt.patient.getName()}`)
    });

    const selectedID: number = Number(prompt('Número: '));

    const selectedAppointment = allAppointments.find((appmt) => {
      if (appmt.id === selectedID) { 
        this.selectField(appmt);
        return true;
      }
      return false;
    });
    
    if (selectedAppointment) {
      console.log("Consulta selecionada:", selectedAppointment);
    } else {
      console.log("Nenhuma consulta encontrada com esse ID.");
    }
  }

  selectField(field: IAppointment){

  }
}