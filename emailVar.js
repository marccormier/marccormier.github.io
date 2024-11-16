
function sendEmail() {

Email.send({
    Host : "smtp.elasticemail.com",
    Username : "cormiermac.mc85@gmail.com",
    Password : "F042B22B16DA6C84F1B68B972796D1256DBE",
//     SecureToken : "d7505593-5e96-44d2-9dcf-5f8e9d187e03",
    To : 'cormiermac.mc85@gmail.com',
    From : "cormiermac.mc85@gmail.com",
    Subject : "github visitor",
    Body : uD
}).then(
  //message => alert(message)
);
}