import PromptSync from "prompt-sync";
import PrimaryScreen from "./PrimaryScreen";

export abstract class BaseScreen {
  primaryScreen: PrimaryScreen; 
  prompt = PromptSync();

  constructor(primaryScreen: PrimaryScreen) {
    this.primaryScreen = primaryScreen;
  }

  validateNonEmpty(input: string, fieldName: string): boolean {
    const trimInput = input.trim();
    if (trimInput === '0') {
      console.log('Processo cancelado pelo usuário.');
      this.primaryScreen.startScreen();
      return false;
    }
    if (trimInput === '') {
      console.log(`${fieldName} não pode estar vazio.`);
      return false;
    }
    return true;
  }

  validateNonNumber(input: string, fieldName: string): boolean {
    const trimInput = input.trim();
    if (/\d/.test(trimInput)) {
      console.log(`${fieldName} não pode conter números.`);
      return false;
    }
    return true;
  }

  validateNumber(input: string, fieldName: string, minLength: number, maxLength: number): boolean {
    const regex = /^\d+$/;
  
    if (!regex.test(input)) {
      console.log(`Entrada inválida. O campo ${fieldName} deve conter apenas números.`);
      return false;
    }
  
    const inputLength = input.length;
    if (inputLength < minLength || inputLength > maxLength) {
      console.log(`Entrada inválida. O campo ${fieldName} deve ter entre ${minLength} e ${maxLength} dígitos.`);
      return false;
    }
  
    return true;
  }
}
