module.exports = function toReadable (number) {
    
  const digitOnes = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
  const digitTens = [,,'twenty','thirty','fourty','fifty','sixty','seventy','eighty','ninety'];

  const digits = number.toString().split('').reverse();

  let one = digitOnes[number];
  if (number < 20){
    return one;
  }

  let ten = digitTens[digits[0]]+' '+digitOnes[digits[1]];;
  if ((number < 100) || (digits[1] == 0)){
    return ten;
  }
  
  if (number < 1000){
    return digitOnes[digits[0]]+' hundred '+ ten +' '+one;
  }
  
}
