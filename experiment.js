const monthlyRent = 500;

const yearlyRent = monthlyRent * 12;
console.log(yearlyRent);

const firstName = "Chandana";
const lastName = "Adi";

const sentence = "My name is" + firstName + " " + lastName;
const sentenceWithTemplate = `My name is ${firstName} ${lastName}`;

console.log(sentence);
console.log(sentenceWithTemplate);

const dog = {
    name: "dog",
    speak() {
      console.log("woof woof");
    },
  };
  
  dog.speak();