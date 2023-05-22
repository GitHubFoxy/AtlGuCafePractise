const submit = document.querySelector("#submit")
submit.addEventListener("click", () => {
const authObject = {
    "login": `${document.querySelector("#login").value}`,
    "password": `${document.querySelector("#password").value}`
}
console.log(JSON.stringify(authObject))
})