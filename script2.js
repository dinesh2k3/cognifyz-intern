const now = new Date();
const currentHour = now.getHours();
let greeting;

if (currentHour < 12) {
    greeting = "Good morning!";
} else if (currentHour < 18) {
    greeting = "Good afternoon!";
} else {
    greeting = "Good evening!";
}
alert(greeting);
