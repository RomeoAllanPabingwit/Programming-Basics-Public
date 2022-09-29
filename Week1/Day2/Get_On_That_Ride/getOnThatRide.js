// 1st Condition. Height requirement is greater that 52.

var height = 53;
if (height > 52) {
    console.log ("Get on that ride, kiddo!");
}
else {
    console.log ("Sorry kiddo. Maybe next year");
}

// Stretch Feature 1: Conditional statement to require both height and age.

var height = 52;
var age = 13;
if (height > 52 && age >= 12) {
    console.log ("Get on that ride, kiddo!");
}
else {
    console.log ("Sorry kiddo. Maybe next year");
}

// Stretch Feature 2: Conditional statement to require either height requirement or age requirement must be met. 

var height = 52;
var age = 13;
if (height > 52) {
    console.log ("Get on that ride, kiddo!");
}
else if (age >=12) {
    console.log ("Get on that ride, kiddo!");
}
else {
    console.log ("Sorry kiddo. Maybe next year");
}
