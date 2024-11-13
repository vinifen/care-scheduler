export default class Address {
    private state: string;
    private city: string;
    private road: string;
    private number: number;

    constructor(state: string, city: string, road: string, number: number) {
        this.state = state;
        this.city = city;
        this.road = road;
        this.number = number;
    }

    
    public get State(): string {
        return this.state;
    }

    public set State(value: string) {
        this.state = value;
    }

    
    public get City(): string {
        return this.city;
    }

    public set City(value: string) {
        this.city = value;
    }


    public get Road(): string {
        return this.road;
    }

    public set Road(value: string) {
        this.road = value;
    }

    
    public get Number(): number {
        return this.number;
    }

    public set Number(value: number) {
        this.number = value;
    }
}
