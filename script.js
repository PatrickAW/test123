function login() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    const validUser="admin";
    const validPass="12345";

    if(username=validUser && password=validPass) {
        message.style.color="green";
        message.textContent="Login berhasil PATBENRAFDIM!";
        message.textContent="YESBISABISA";
    } else {
        message.style.color="red";
        message.textContent="Username atau password salah.";
    }
}