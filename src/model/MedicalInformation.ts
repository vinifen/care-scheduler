export default class MedicalInformation {
    private reason: string;
    private description: string;
    private doctorName: string;

    constructor(reason: string, description: string, doctorName: string) {
        this.reason = reason;
        this.description = description;
        this.doctorName = doctorName;
    }

    public getReason(): string {
        return this.reason;
    }

    public setReason(reason: string): void {
        this.reason = reason;
    }

    public getDescription(): string {
        return this.description;
    }

    public setDescription(description: string): void {
        this.description = description;
    }

    public getDoctorName(): string {
        return this.doctorName;
    }

    public setDoctorName(doctorName: string): void {
        this.doctorName = doctorName;
    }

    public displayMedicalInfo(): void {
        console.log(`
            ================================
            Informações Médicas:
            ================================
            Motivo da Consulta: ${this.getReason()}
            Descrição: ${this.getDescription()}
            Médico Responsável: ${this.getDoctorName()}
        `);
    }
    
}
