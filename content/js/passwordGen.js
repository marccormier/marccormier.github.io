const random_number = Math.floor(Math.random() * 13) + 8; //Bettween 1 and 10
function passwordGenerator(length) {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ01234567890123456789012345678901234567890123456789!@#$%&*()_-+=!@#$%&*()_-+=!@#$%&*()_-+=!@#$%&*()_-+=";

  const password = [...Array(length)].reduce((accumulator, _element) => {
    const randomIndex = Math.floor(Math.random() * chars.length);
    return accumulator + chars[randomIndex];
  }, "");
  console.log(password);
  let contt=document.getElementById('content');
  contt.innerHTML="<center><h1>Random PassWord Generator</h1>"+"<h2>"+password+"</h2>"+"<input type='button' value='Changer' onclick='passwordGenerator(random_number)'/>";
/*
  document.body.innerHTML="<center><h1>Random PassWord Generator</h1>"+"<h2>"+password+"</h2>"+"<input type='button' value='Changer' onclick='passwordGenerator(random_number)'/>"+"<br/><br/><input type='button' value='goBack' onclick='window.history.back()'/>"+"</center>";
*/
  return password;
}
