import people from "./people.js";

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
