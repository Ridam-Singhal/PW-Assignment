// Function that takes persons object as input and return person name and street
function objectValues(obj) {

    return {
        name: obj["name"],
        street: obj["address"]["street"],
    }
}



const person = {
    name: "Mithun",
    age: 21,
    address: {
      street: "B8, Block B, Industrial Area.",
      city: "Sector 62, Noida",
      state: "Uttar Pradesh",
    },
  };

  console.log(objectValues(person));

  // OUTPUT
  // { name: 'Mithun', street: 'B8, Block B, Industrial Area.' }