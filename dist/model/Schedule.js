"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Schedule {
    constructor(date, time, location) {
        this.date = date;
        this.time = time;
        this.location = location;
    }
    getDate() {
        return this.date;
    }
    setDate(date) {
        this.date = date;
    }
    getTime() {
        return this.time;
    }
    setTime(time) {
        this.time = time;
    }
    getLocation() {
        return this.location;
    }
    setLocation(location) {
        this.location = location;
    }
    displaySchedule() {
        console.log(` 
      ================================
      Agendamento:
      ================================
      Data: ${this.getDate()}
      Hora: ${this.getTime()}
      Local: ${this.getLocation()}
    `);
    }
}
exports.default = Schedule;
