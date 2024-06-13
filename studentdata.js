// Global Variables
let student = [];
// let students = [
//   '<tr><td id="name"></td><td id="age"></td><td id="contact-no"></td><td id="email-id"><td id="educational"></td><td id="address"></td></tr>'
// ];


// entry function
// function start() {
//   document.getElementById("index").hidden = false;
// }

function dataFunction() {
  // showing first page only
  console.log("dataFunction");
  document.getElementById("page-one").hidden = false;
  document.getElementById("show").hidden = true;
}


// inputing data
function inputData() {
  // console.log("inputData--", inputData());
  let information = {};



  information["firstName"] = document.getElementById("first-name").value;

  information["lastName"] = document.getElementById("last-name").value;

  information["contactNo"] = document.getElementById("contact-no").value;
  information["DOB"] = document.getElementById("age").value;
  information["emailID"] = document.getElementById("email-id").value;
  information["education"] = document.getElementById("educational").value;
  information["addressl1"] = document.getElementById("address-l1").value;

  information["addressl2"] = document.getElementById("address-l2").value;

  information["addressl3"] = document.getElementById("address-l3").value;
  


  student.push(information);
  console.log("ENTRY  ", student);





}


// listing

function listFunction() {
  document.getElementById("page-one").hidden = true;
  document.getElementById("show").hidden = false;
  showData();
}
function showData() {
  let tableOutput = "<table>";

  tableOutput +=
    "<thead><tr><th>Student Name</th> <th>DOB</th> <th>Contact No</th> <th>Email </th><th>Education Details</th><th>Address</th></tr></thead>";

  for (let i = 0; i < student.length; i++) {
    let output = student[i];
      

    let outputString =

      '<tr><td class="name">' +
      output.firstName +
      " " +
      output.lastName + ""
       +
       '</td>' + '<td class="age">' +
      output.DOB+
      '<td class="contact-no">'+
      output.contactNo+
      '</td>' + '<td class="email-id">'+
      output.emailID +
      '</td>' +
      '<td class="schooling">' +
      output.education  +
       '</td>' +
       '<td class="address-l1">' + 
       output.addressl1 + " " + output.addressl2 +" "  + output.addressl3 +
      "</td></tr>";
    tableOutput += outputString;
    console.log("addData", output);
  }

  tableOutput += "</table>";

  document.getElementById("table-list").innerHTML = tableOutput;
}
// function clearFunction() {

// };
window.onload = function () {
  dataFunction();
};


/* <th>Sr No</th><th>Roll No</th> */
// '<td id="sr-no">01</td>' +
//  '<td id="roll-no">101</td>'+
{/* <tr><td id="sr-no"></td><td id="roll-no"> */}
