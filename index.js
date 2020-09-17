// Validating single card number function
function validateCred(cardNumber) {
  cardNumber.reverse();
    const testNumber = cardNumber.map((number, index) => {
      if (index % 2 == 0) {
        return number
      } else if (index % 2 != 0) {
          if (number * 2 > 9) {
            number = number * 2 - 9;
              return number;
          } else if (number * 2 <= 9) {
              number = number * 2;
                return number;
            }
        }
    }) 
  cardNumber.reverse();
    let creditCardDigitSum = testNumber.reduce(function(currentValue, nextValue) {
      return currentValue + nextValue;
    })
      if (creditCardDigitSum % 10 == 0) {
        return true;
      } else {
          return false;
        }
}

// Finding a nested array of invalid cards.
let invalidCards = [];
  function findInvalidCards(batchCards) {
    for (let i = 0; i < batchCards.length; i++) {
      if (validateCred(batchCards[i]) === false) {
        invalidCards.push(batchCards[i])
      }
    }
  } 

// Creating array of companies that mailed out cards with invalid numbers. Will delete duplicates if there are any.
function idInvalidCardCompanies(invalidNums) {
  let invalidCompanyCards = [];
    for (let i = 0; i < invalidNums.length; i++) {
      if (invalidNums[i][0] === 3) {
        invalidCompanyCards.push('Amex (American Express)')
      } else if (invalidNums[i][0] === 4) {
          invalidCompanyCards.push('Visa')
        } else if (invalidNums[i][0] === 5) {
            invalidCompanyCards.push('Mastercard')
          } else if (invalidNums[i][0] === 6) {
              invalidCompanyCards.push('Discover') 
            } else {
                console.log("Company not found.")
            }
    }
  let duplicateCompanies = invalidCompanyCards.filter((c, index) => {
    return invalidCompanyCards.indexOf(c) === index;
  })
    console.log(duplicateCompanies);
}




