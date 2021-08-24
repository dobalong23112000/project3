import confirmation from "./confirmation.js";

class people {
  name;
  age;
  sex;
  constructor(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
  }
  phieu(vaccinename, date, totalconfirmation) {
    let phieu = new confirmation(
      this.name,
      this.age,
      this.sex,
      vaccinename,
      date
    );
    totalconfirmation.push(phieu);
  }
}
export default people;
