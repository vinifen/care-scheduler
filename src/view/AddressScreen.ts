import { BaseScreen } from "./BaseScreen";
import PrimaryScreen from "./PrimaryScreen";

export default class AddressScreen extends BaseScreen {
  primaryScreen: PrimaryScreen;

  constructor(primaryScreen: PrimaryScreen){
    super(primaryScreen);
    this.primaryScreen = primaryScreen;
  }

  startAddress(): void{
    console.log(` 
      ================================
      Sessão 2: Endereço
      ================================
    `);
  }

  promptStreet(): string{
    const street: string = this.prompt("Rua:");
    if(!this.validateNonEmpty(street, "Rua")){
      this.promptStreet();
    }
    return street;
  }

  promptHouseNumber(): number {
    const houseNumberString: string = this.prompt("Numero da Casa:");
    if(!this.validateNonEmpty(houseNumberString, "Numero da Casa") || !this.validateNumber(houseNumberString, "Numero da Casa", 1, 7)){
      this.promptHouseNumber();
    }
    const houseNumber: number = Number(houseNumberString);
    return houseNumber;
  }

  promptCity(): string {
    const city: string = this.prompt("Cidade:");

    if(!this.validateNonEmpty(city, "Cidade") || !this.validateNonNumber(city, "Cidade")){
      this.promptCity();
    }
    return city;
  }

  promptState(): string {
    const state: string = this.prompt("state:");

    if(!this.validateNonEmpty(state, "Estado") || !this.validateNonNumber(state, "Estado")){
      this.promptState();
    }
    return state;
  }

  promptCountry(): string {
    const country: string = this.prompt("country:");

    if(!this.validateNonEmpty(country, "Cidade") || !this.validateNonNumber(country, "Cidade")){
      this.promptCountry();
    }
    return country;
  }
} 