document.addEventListener("DOMContentLoaded", () =>
{
    let passwordObject = {pass1: document.querySelector ("#pass1"), pass2: document.querySelector("#pass2")};
    function validate(){
      let test1 = false;
      let test2 = false;
      if (passwordObject.pass1.value.length >7 && passwordObject.pass2.value.length >7)
      {
        test1 = true;
      }
      if (passwordObject.pass1.value == passwordObject.pass2.value && test1 == true)
      {
        alert("Password is validated");

      }
      else if (test1 == false) {
        alert("Passwords are not at least 8 characters long");
      }
      else {
        alert("Passwords do not match");
      }
    }

    document.getElementById('validate').addEventListener('click', function(){
      validate();
    })

})
