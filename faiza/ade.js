var myForm = document.form.myForm;
var message = document.getElementById("message");

myForm.onSubmit = function () {
    if (myForm.name.value = "") {
        message.innerHTML = "please enter a name";
        return false;
    }
    else {
        message.innerHTML = "";
        return true;
    }
}

