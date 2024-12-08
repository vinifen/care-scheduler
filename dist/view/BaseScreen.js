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
    validateNonNumber(input, fieldName) {
        const trimInput = input.trim();
        if (/\d/.test(trimInput)) {
            console.log(`${fieldName} não pode conter números.`);
            return false;
        }
        return true;
    }
    validateNumber(input, fieldName) {
        const regex = /^\d+$/;
        if (!regex.test(input)) {
            console.log(`Entrada inválida. O campo ${fieldName} deve conter apenas números.`);
            return false;
        }
        return true;
    }
    validationLength(input, fieldName, minLength, maxLength) {
        const inputLength = input.length;
        if (inputLength < minLength || inputLength > maxLength) {
            console.log(`Entrada inválida. O campo ${fieldName} deve ter entre ${minLength} e ${maxLength} dígitos.`);
            return false;
        }
        return true;
    }
}
exports.BaseScreen = BaseScreen;
