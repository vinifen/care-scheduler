import PromptSync from "prompt-sync";
import PrimaryScreen from "./PrimaryScreen";

export abstract class BaseScreen {
  primaryScreen: PrimaryScreen; 
  prompt = PromptSync();

  constructor(primaryScreen: PrimaryScreen) {
    this.primaryScreen = primaryScreen;
  }

  validateNonEmpty(input: string, fieldName: string): boolean {
    try{ 
      const trimInput = input.trim();
      if (trimInput === '0') {
        console.log('Processo cancelado pelo usuário.');
        this.primaryScreen.startScreen();
        return false;
      }
      if (trimInput === '') {
        throw new Error(`${fieldName} não pode estar vazio.`);
      }
      return true;
    } catch (error: Error | any) {
      console.error(error.message);
      return false; 
    }
  }

  validateNonLetters(input: string, fieldName: string): boolean {
    try {
      const trimInput = input.trim();
      if(/[a-zA-Z]/.test(trimInput)) {
        throw new Error(`${fieldName} não pode conter letras.`);
      }
      return true;
    } catch (error: Error | any) {
      console.error(error.message);
      return false; 
    }
  }

  validateNonNumber(input: string, fieldName: string): boolean {
    try{ 
      const trimInput = input.trim();
      if (/\d/.test(trimInput)) {
        throw new Error(`${fieldName} não pode conter números.`);
      }
      return true;
    } catch (error: Error | any) {
      console.error(error.message);
      return false;
    }
  }

  validateNumber(input: string, fieldName: string): boolean {
    try{ 
      const regex = /^\d+$/;
      if (!regex.test(input)) {
        throw new Error(`Entrada inválida. O campo ${fieldName} deve conter apenas números.`);
      }
      return true;
    } catch (error: Error | any) {
      console.error(error.message);
      return false;  
    }
  }

  validationLength(input: string, fieldName: string, minLength: number, maxLength: number): boolean {
    try{ 
      const inputLength = input.length;
      if (inputLength < minLength || inputLength > maxLength) {
        throw new Error(`Entrada inválida. O campo ${fieldName} deve ter entre ${minLength} e ${maxLength} dígitos.`);
      }
      return true;
    } catch (error: Error | any) {
      console.error(error.message);
      return false;  
    }
  }
}
