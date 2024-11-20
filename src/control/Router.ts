import Database from "../db/Database";
import PrimaryScreen from "../view/PrimaryScreen";
import AppointmentController from "./AppointmentController";

export default class Router{
  private db: Database = new Database();
  private initial: PrimaryScreen = new PrimaryScreen(this);
  public apCrtl: AppointmentController = new AppointmentController(this.db);

  constructor(){
    this.initial.startScreen();
  }
}