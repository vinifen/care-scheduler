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
        console.log(`${fieldName} não pode estar vazio.`);
        return false;
      }
      return true;
    }catch(error){
      error = "Erro validacao da entrada";
      console.error(error);
      return false
    }
  }

  validateNonLetters(input: string, fieldName: string){
    try {
      const trimInput = input.trim();
      if(/[a-zA-Z]/.test(trimInput)){
        console.log(`${fieldName} não pode conter letras.`);
        return false;
      }   
      return true;   
    }catch(error){
      error = "Erro de validacao, nao pode ter letras";
      console.error(error);
      return false;
    }
  }

  validateNonNumber(input: string, fieldName: string): boolean {
    try{ 
      const trimInput = input.trim();
      if (/\d/.test(trimInput)) {
        console.log(`${fieldName} não pode conter números.`);
        return false;
      }
      return true;
    }catch(error){
      error = "Erro de validacao, nao é numero";
      console.error(error);
      return false
    }
  }

  validateNumber(input: string, fieldName: string): boolean {
    try{ 
      const regex = /^\d+$/;
    
      if (!regex.test(input)) {
        console.log(`Entrada inválida. O campo ${fieldName} deve conter apenas números.`);
        return false;
      }
    
      return true;
    }catch(error){
      error = "Erro de validacao do numero";
      console.error(error);
      return false
    }
  }

  validationLength(input: string, fieldName: string, minLength: number, maxLength: number): boolean{
    try{ 
      const inputLength = input.length;
      if (inputLength < minLength || inputLength > maxLength) {
        console.log(`Entrada inválida. O campo ${fieldName} deve ter entre ${minLength} e ${maxLength} dígitos.`);
        return false;
      }
      return true;
    }catch(error){
      error = "Erro na validacao do tamanho da entrada";
      console.error(error);
      return false
    }
  }
}
