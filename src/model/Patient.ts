export default class Patient {
    private name: string;
    private cpf: string;
    private age: string;

    constructor(name: string, cpf: string, age: string) {
        this.name = name;
        this.cpf = cpf;
        this.age = age;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getCpf(): string {
        return this.cpf;
    }

    public setCpf(cpf: string): void {
        this.cpf = cpf;
    }

    public getAge(): string {
        return this.age;
    }

    public setAge(age: string): void {
        this.age = age;
    }

    public displayPatientInfo(): void {
        console.log(`
            ================================
            Informações do Paciente:
            ================================
            Nome: ${this.getName()}
            CPF: ${this.getCpf()}
            Idade: ${this.getAge()} anos
        `);
    }
}
