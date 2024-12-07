export default class Address {
    private state: string;
    private city: string;
    private street: string;
    private houseNumber: string;
    private country: string;

    constructor(street: string, housestring: string, city: string, state: string, country: string) {
        this.street = street;
        this.houseNumber = housestring;
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

    public getHouseNumber(): string {
        return this.houseNumber;
    }

    public setHouseNumber(houseNumber: string): void {
        this.houseNumber= houseNumber;
    }

    public getCountry(): string {
        return this.country;
    }

    public setCountry(country: string): void {
        this.country = country;
    }

    public displayAddress(): void {
        console.log(`
            ================================
            Endereço:
            ================================
            Rua: ${this.getStreet()}
            Número da Casa: ${this.getHouseNumber()}
            Cidade: ${this.getCity()}
            Estado: ${this.getState()}
            País: ${this.getCountry()}
        `);
    }
}
