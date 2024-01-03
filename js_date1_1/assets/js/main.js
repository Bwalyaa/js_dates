const date1 = new Date ("September 2, 2019 09:00:00")

const date2 = new Date (0)

const date3 = new Date (31556908800)

const date4 = new Date (86400000)

const div = document.createElement("div")
document.body.appendChild(div)

div.innerHTML += "Date 1: " + date1.toString() + "<br>";
div.innerHTML += "Date 2: " + date2.toString() + "<br>";
div.innerHTML += "Date 3: " + date3.toString() + "<br>";
div.innerHTML += "Date 4: " + date4.toString() + "<br>";