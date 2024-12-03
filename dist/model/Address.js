"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Address {
    constructor(street, houseNumber, city, state, country) {
        this.street = street;
        this.houseNumber = houseNumber;
        this.city = city;
        this.state = state;
        this.country = country;
    }
    getState() {
        return this.state;
    }
    setState(state) {
        this.state = state;
    }
    getCity() {
        return this.city;
    }
    setCity(city) {
        this.city = city;
    }
    getStreet() {
        return this.street;
    }
    setStreet(street) {
        this.street = street;
    }
    getHouseNumber() {
        return this.houseNumber;
    }
    setHouseNumber(houseNumber) {
        this.houseNumber = houseNumber;
    }
    getCountry() {
        return this.country;
    }
    setCountry(country) {
        this.country = country;
    }
    displayAddress() {
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
exports.default = Address;
