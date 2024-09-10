const form = document.querySelector("form");
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  console.log(email, password);

  await axios
    .post("https://seramic-v1.onrender.com/api/v1/auth/login", {
      email: email,
      password: password,
    })
    .then((res) => {
      if (res.status == 200) {
        const Token = res.data.token;
        const user = JSON.stringify(res.data.data.user);
        console.log(res);
        // Store Data In LocalStorage
        window.localStorage.setItem("token", Token);
        // window.localStorage.setItem("user", user);
        // Go To Home Screen
        window.location.href = "/";
      }
    })
    .catch((e) => {
      console.log(e);
    });
});


const login=document.querySelector(".btn");
const logout=document.querySelector(".btn00");

if(window.localStorage.getItem("token")){
    login.style.display="none";
    logout.style.display="block";
    window.location.href = "/";
}

logout.addEventListener("click", () => {
    window.localStorage.removeItem("token");
        logout.style.display="none";
        login.style.display="block";
});