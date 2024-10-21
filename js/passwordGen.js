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
  contt.innerHTML="<center><h2>Random PassWord Generator</h2>"+"<h3>"+password+"</h3>"+"<input type='button' value='Changer' onclick='passwordGenerator(random_number)'/>";
  return password;
}
