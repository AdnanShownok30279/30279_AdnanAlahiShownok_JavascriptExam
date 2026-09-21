function loadAppointmentPage(aptId) {
fetchAppointment(aptId)
.then(apt => {
fetchDoctor(apt.doctorId);
console.log(apt.doctorId);
})
.then(doctor => {
console.log("Doctor:", doctor.name);
})
.catch(err => console.log("Failed:", err.message));
}