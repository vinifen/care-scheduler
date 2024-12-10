"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseScreen = void 0;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
class BaseScreen {
    constructor(primaryScreen) {
        this.prompt = (0, prompt_sync_1.default)();
        this.primaryScreen = primaryScreen;
    }
    validateNonEmpty(input, fieldName) {
        try {
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
        catch (error) {
            error = "Erro validacao da entrada";
            console.error(error);
            return false;
        }
    }
    validateNonLetters(input, fieldName) {
        try {
            const trimInput = input.trim();
            if (/[a-zA-Z]/.test(trimInput)) {
                console.log(`${fieldName} não pode conter letras.`);
                return false;
            }
            return true;
        }
        catch (error) {
            error = "Erro de validacao, nao pode ter letras";
            console.error(error);
            return false;
        }
    }
    validateNonNumber(input, fieldName) {
        try {
            const trimInput = input.trim();
            if (/\d/.test(trimInput)) {
                console.log(`${fieldName} não pode conter números.`);
                return false;
            }
            return true;
        }
        catch (error) {
            error = "Erro de validacao, nao é numero";
            console.error(error);
            return false;
        }
    }
    validateNumber(input, fieldName) {
        try {
            const regex = /^\d+$/;
            if (!regex.test(input)) {
                console.log(`Entrada inválida. O campo ${fieldName} deve conter apenas números.`);
                return false;
            }
            return true;
        }
        catch (error) {
            error = "Erro de validacao do numero";
            console.error(error);
            return false;
        }
    }
    validationLength(input, fieldName, minLength, maxLength) {
        try {
            const inputLength = input.length;
            if (inputLength < minLength || inputLength > maxLength) {
                console.log(`Entrada inválida. O campo ${fieldName} deve ter entre ${minLength} e ${maxLength} dígitos.`);
                return false;
            }
            return true;
        }
        catch (error) {
            error = "Erro na validacao do tamanho da entrada";
            console.error(error);
            return false;
        }
    }
}
exports.BaseScreen = BaseScreen;
