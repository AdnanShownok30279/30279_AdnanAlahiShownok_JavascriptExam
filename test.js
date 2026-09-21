const rawAppointments = [
{
id: "APT-201",
status: "COMPLETED",
doctor: { name: "Dr. Karim Uddin", dept: "Cardiology" },
patient: { name: "Nabila Rahman", contact: { phone: "01811000001", email: "nabila@mail.com" } },
fee: 1200,
discount: { code: "SENIOR", amount: 0 },
tests: [ { code: "ECG", price: 800 }, { code: "ECHO", price: 2500 } ],
followUpFee: 0
},
{
id: "APT-202",
status: "SCHEDULED",
doctor: { name: "Dr. Nusrat Jahan", dept: "Medicine" },
patient: { name: "" },
fee: 900,
discount: null,
tests: [ { code: "CBC", price: 400 } ],
followUpFee: 300
},
null,
{
id: "APT-204",
status: "COMPLETED",
doctor: { name: "Dr. Karim Uddin", dept: "Cardiology" },
patient: null,
fee: 1200,
discount: { code: "", amount: 500 },
tests: [],
followUpFee: null
},
{
id: "APT-205",
status: "CANCELLED",
doctor: { name: "Dr. Shirin Akter", dept: "Pediatrics" },
patient: { name: "Tamim Iqbal", contact: { phone: null } },
fee: 800,
tests: [ { code: "XRAY", price: 1500 } ]
},
{
id: "APT-206",
status: "COMPLETED",
doctor: { name: "Dr. Nusrat Jahan", dept: "Medicine" },
patient: { name: "Sumaiya Islam", contact: { phone: "01811000003" } },
fee: 900,
discount: { code: "CORP20", amount: 300 },
tests: [ { code: "CBC", price: 400 }, { code: "LFT", price: 1100 } ],
followUpFee: 300
}
];



console.log([].every(a => a.status == "COMPLETED"));
console.log(rawAppointments.find(a => a?.id == "APT-999").status)