import CreateScreen from "./CreateScreen";

export default class AddressScreen extends CreateScreen {
  startScreen(): void {
    console.log(` 
      ================================
      Endereço: 
      ================================
    `);
  }

  promptStreet(): string {
    const street: string = this.prompt("Rua: ");
    if (!this.validateNonEmpty(street, "Rua")) {
      return this.promptStreet();
    }
    return street;
  }

  promptHouseNumber(): number {
    const houseNumberString: string = this.prompt("Número da Casa: ");
    if (!this.validateNonEmpty(houseNumberString, "Número da Casa") || 
        !this.validateNumber(houseNumberString, "Número da Casa") || 
        !this.validationLength(houseNumberString, "Número da Casa", 1, 6)) {
      return this.promptHouseNumber();
    }
    return Number(houseNumberString);
  }

  promptCity(): string {
    const city: string = this.prompt("Cidade: ");
    if (!this.validateNonEmpty(city, "Cidade") || !this.validateNonNumber(city, "Cidade")) {
      return this.promptCity();
    }
    return city;
  }

  promptState(): string {
    const state: string = this.prompt("Estado: ");
    if (!this.validateNonEmpty(state, "Estado") || !this.validateNonNumber(state, "Estado")) {
      return this.promptState();
    }
    return state;
  }

  promptCountry(): string {
    const country: string = this.prompt("País: ");
    if (!this.validateNonEmpty(country, "País") || !this.validateNonNumber(country, "País")) {
      return this.promptCountry();
    }
    return country;
  }
}
