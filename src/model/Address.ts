export default class Address {
  private state: string;
  private city: string;
  private street: string;
  private houseNumber: number;
  private country: string;

  constructor(street: string, houseNumber: number, city: string, state: string, country: string) {
    this.street = street;
    this.houseNumber = houseNumber;
    this.city = city;
    this.state = state;
    this.country = country;  
  }

  public getState(): string {
    return this.state;
  }

  public setState(state: string): void {
    this.state = state;
  }

  public getCity(): string {
    return this.city;
  }

  public setCity(city: string): void {
    this.city = city;
  }

  public getStreet(): string {
    return this.street;
  }

  public setStreet(street: string): void {
    this.street = street;
  }

  public getHouseNumber(): number {
    return this.houseNumber;
  }

  public setHouseNumber(houseNumber: number): void {
    this.houseNumber= houseNumber;
  }

  public getCountry(): string {
    return this.country;
  }

  public setCountry(country: string): void {
    this.country = country;
  }
}
