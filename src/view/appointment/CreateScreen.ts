import { Validation } from "../Validation";
import PrimaryScreen from "../PrimaryScreen";
import Router from "../../router/Router";

export default abstract class CreateScreen extends Validation {
  constructor(public primaryScreen: PrimaryScreen) {
    super(primaryScreen);
  }

  abstract startScreen(): void;
}
