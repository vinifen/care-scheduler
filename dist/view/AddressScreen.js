"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseScreen_1 = require("./BaseScreen");
class AddressScreen extends BaseScreen_1.BaseScreen {
    constructor(primaryScreen) {
        super(primaryScreen);
        this.primaryScreen = primaryScreen;
    }
    startAddress() {
        console.log(` 
      ================================
      Sessão 2: Endereço
      ================================
    `);
    }
    promptStreet() {
        const street = this.prompt("Rua: ");
        if (!this.validateNonEmpty(street, "Rua")) {
            return this.promptStreet();
        }
        return street;
    }
    promptHouseNumber() {
        const houseNumberString = this.prompt("Numero da Casa: ");
        if (!this.validateNonEmpty(houseNumberString, "Numero da Casa") || !this.validateNumber(houseNumberString, "Numero da Casa") || !this.validationLength(houseNumberString, "Numero da casa", 1, 6)) {
            return this.promptHouseNumber();
        }
        const houseNumber = Number(houseNumberString);
        return houseNumber;
    }
    promptCity() {
        const city = this.prompt("Cidade: ");
        if (!this.validateNonEmpty(city, "Cidade") || !this.validateNonNumber(city, "Cidade")) {
            return this.promptCity();
        }
        return city;
    }
    promptState() {
        const state = this.prompt("Estado: ");
        if (!this.validateNonEmpty(state, "Estado") || !this.validateNonNumber(state, "Estado")) {
            return this.promptState();
        }
        return state;
    }
    promptCountry() {
        const country = this.prompt("Pais: ");
        if (!this.validateNonEmpty(country, "Pais") || !this.validateNonNumber(country, "Pais")) {
            return this.promptCountry();
        }
        return country;
    }
}
exports.default = AddressScreen;
