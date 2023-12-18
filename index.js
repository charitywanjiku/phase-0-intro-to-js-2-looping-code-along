const names = ["Guadalupe", "Ollie", "Akin"];
function writeCards(names) {
  let thankYouMessages = [];
  for (let i = 0; i < names.length; i++) {
  let message = `Thank you, ${names[i]}, for the wonderful surprise gift!`;

  thankYouMessages.push(message);
  }
 return thankYouMessages;
}
console.log(writeCards(names));
function countDown(number){
  let  z = 10;
  while(z>=0){
    console.log(z);
    z--;
  }
}
countDown(10);