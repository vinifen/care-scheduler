import Person from "./Person";

export default class Patient extends Person {
    
    private cpf: number;

    constructor(cpf: number) {
        
        this.cpf = cpf;
    }
