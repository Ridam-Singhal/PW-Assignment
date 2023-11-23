let username = "@#$%";
let firstLetter = username.charAt(0);
let capitalFirstLetter = username.charAt(0).toUpperCase();

firstLetter === capitalFirstLetter
  ? console.log(username)
  : console.log(username.charAt(0).toUpperCase() + username.slice(1));
