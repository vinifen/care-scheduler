import Database from "../db/Database";
import PrimaryScreen from "../view/PrimaryScreen";
import AppointmentController from "./AppointmentController";
import IAppointment from "../model/IAppointment";

export default class Router{
  private db: Database<IAppointment> = new Database();
  private initial: PrimaryScreen = new PrimaryScreen(this);
  public apCrtl: AppointmentController = new AppointmentController(this.db);

  constructor(test: boolean = false){
    if(!test){
      this.initial.startScreen();
    }
  }
}