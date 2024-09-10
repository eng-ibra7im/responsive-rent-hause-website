const form = document.querySelector(".form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const conpassword = document.getElementById("conpassword").value;
  const fname = document.getElementById("fname").value;
  const lname = document.getElementById("lname").value;

  console.log(email, password);

  await axios
    .post("https://seramic-v1.onrender.com/api/v1/auth/signup", {
      email: email,
      password: password,
      passwordConfirm: conpassword,
      fname: fname,
      lname: lname,
    })
    .then((res) => {
      if (res.status == 200) {
        const Token = res.data.token;
        const user = JSON.stringify(res.data.data.user);
        console.log(res);
        // Store Data In LocalStorage
        window.localStorage.setItem("token", Token);
        window.localStorage.setItem("user", user);
        // Go To Home Screen
        window.location.href = "/login.html";
      }
    })
    .catch((e) => {
      console.log(e);
    });
});
