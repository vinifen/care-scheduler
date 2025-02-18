import { Validation } from "../Validation";
import PrimaryScreen from "../PrimaryScreen";

export default class AddressScreen extends Validation {
  primaryScreen: PrimaryScreen;

  constructor(primaryScreen: PrimaryScreen){
    super(primaryScreen);
    this.primaryScreen = primaryScreen;
  }

  startAddress(): void{
    console.log(` 
      ================================
      Endereço: 
      ================================
    `);
  }

  promptStreet(): string{
    const street: string = this.prompt("Rua: ");
    if(!this.validateNonEmpty(street, "Rua")){
      return this.promptStreet();
    }
    return street;
  }

  promptHouseNumber(): number {
    const houseNumberString: string = this.prompt("Numero da Casa: ");
    if(!this.validateNonEmpty(houseNumberString, "Numero da Casa") || !this.validateNumber(houseNumberString, "Numero da Casa")  || !this.validationLength(houseNumberString, "Numero da casa", 1, 6)){
      return this.promptHouseNumber();
    }
    const houseNumber: number = Number(houseNumberString);
    return houseNumber;
  }

  promptCity(): string {
    const city: string = this.prompt("Cidade: ");

    if(!this.validateNonEmpty(city, "Cidade") || !this.validateNonNumber(city, "Cidade")){
      return this.promptCity();
    }
    return city;
  }

  promptState(): string {
    const state: string = this.prompt("Estado: ");

    if(!this.validateNonEmpty(state, "Estado") || !this.validateNonNumber(state, "Estado")){
      return this.promptState();
    }
    return state;
  }

  promptCountry(): string {
    const country: string = this.prompt("Pais: ");

    if(!this.validateNonEmpty(country, "Pais") || !this.validateNonNumber(country, "Pais")){
      return this.promptCountry();
    }
    return country;
  }
} 