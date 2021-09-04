import people from "./people.js";
console.log("goodbye hello");
class confirmation extends people {
  vaccinename;
  date;
  constructor(name, age, sex, vaccinename, date) {
    super(name, age, sex);
    this.vaccinename = vaccinename;
    this.date = date;
  }
}
export default confirmation;
