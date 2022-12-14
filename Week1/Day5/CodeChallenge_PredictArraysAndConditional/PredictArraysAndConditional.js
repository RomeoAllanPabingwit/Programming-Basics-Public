
// ----Code Snippet 1----

function displayContactInfo() {
    var auntContactInfo = ["Paula", "Smith", "1234 Main Street", "St. Louis", "MO", 12345];
    console.log(auntContactInfo);
}

/* T-Diagram

var              |          value
------------------------------------------------
auntContactInfo  | ["Paula", "Smith", "1234 Main Street", "St. Louis", "MO", 12345]

console: Paula, Smith, 1234 Main Street", St. Louis, MO, 12345

*/

// ---- Code Snippet 2----

function displayGrocerylist() {
    var produce = ["apples", "oranges"];
    var frozen = ["broccoli", "ice cream"];
    frozen.push("hashbrowns");
    console.log(frozen);
}

/* T-Diagram

var              |          value
------------------------------------------------
produce          | ["apples", "oranges"]
frozen           | ["broccoli", "ice cream"] > ["broccoli", "ice cream", "hashbrowns"]

console: broccoli, ice cream, hashbrowns

*/

// ----Code Snippet 3----

var movieLibrary = ["Bambi", "E.T.", "Toy Story"];
movieLibrary.push("Zoro");
movieLibrary[1] = "Beetlejuice";
console.log(movieLibrary);

/* T-Diagram

var              |          value
------------------------------------------------
movieLibrary     | ["Bambi", "E.T.", "Toy Story"] > ["Bambi", "E.T.", "Toy Story", "Zoro"] > ["Bambi", "Beetlejuice", "Toy Story", "Zoro"]

console: Bambi, Beetlejuice, Toy Story, Zoro
*/

