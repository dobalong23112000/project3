import vacxin from "./vacxin.js";
import people from "./people.js";
import confirmation from "./confirmation.js";

let totalperson = []; // tạo ra biến để lữu dữ liệu người dân
let totalvaccine = []; // biến lưu dữ liệu vaccine
let totalconfirmation = []; // biến lưu các phiế
let person1 = new people("Abc", 30, "female");
let person2 = new people("BBB", 40, "female");
let person3 = new people("Quoc", 70, "male");
let person4 = new people("Anh", 70, "female");
let person5 = new people("Phuong", 70, "female");
let vacxin1 = new vacxin("AstraZeneca", "Tập đoàn AstraZeneca", "England");
let vacxin2 = new vacxin("SPUTNIK V", "Viện Nghiên cứu Gamaleya", "Nga");

person1.phieu("SPUTNIK V", "23/8/2021", totalconfirmation); // sử dụng phương thức để phieu của class person vì person 1 được tiêm 2 mũi vaccine

let confirmation1 = new confirmation(
  "Abc",
  30,
  "female",
  "AstraZeneca",
  "23/8/2021"
);
let confirmation2 = new confirmation(
  "BB",
  40,
  "female",
  "SPUTNIK V",
  "23/8/2021"
);
let confirmation3 = new confirmation(
  "Anh",
  70,
  "female",
  "AstraZeneca",
  "23/8/2021"
);

totalperson.push(person1, person2, person3, person4, person5);
totalvaccine.push(vacxin1, vacxin2);
totalconfirmation.push(confirmation1, confirmation2, confirmation3);

// Câu 1:
function report1() {
  console.log(
    "\n\nThống kê những người dân đã được tiêm ít nhất 1 loại vắc-xin\n\n"
  );
  totalconfirmation.forEach((item, index) => {
    console.log(
      `Tên: ${item.name}, Tuổi: ${item.age}, Tên vaccine: ${item.vaccinename}, Ngày tiêm: ${item.date}`
    );
  }); // Sử dụng vòng lặp chạy qua mảng phiếu để lấy ra thông tin những người được tiêm vaccine
}
report1();
function report2() {
  console.log("\n\nThống kê những người già chưa được tiêm vắc-xin\n\n");
  let older = totalperson.filter((value, index) => {
    return value.age >= 65;
  }); // Lọc ra thông tin của những người dân có độ tuổi trên 65 tuổi
  older.forEach((item, index) => {
    let confirm = totalconfirmation.some((value, index) => {
      return (
        value.name == item.name &&
        item.age == value.age &&
        item.sex == value.sex
      );
    }); /** chạy qua mảng phiếu để lấy ra những người trên 60 tuổi đã được tiêm và chưa được tiêm @return {true or false} */
    if (confirm == false) {
      console.log(
        `Tên: ${item.name}, Tuổi: ${item.age}, Giới tính: ${item.sex}`
      );
    } // Lấy ra kết quả người chưa được tiêm
  });
}
report2();

function report3() {
  let sum = totalconfirmation.reduce((count) => {
    return count + 1;
  }, 0);
  console.log(`\n\n tổng số liều vắc-xin đã tiêm: ${sum}`); // chạy qua mảng để yên ra tổng số phiếu
}
report3();
