// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]


// Add your functions below:

// function to validate credit card number
const validateCred = (array) => {

    //put apart the check number
    let checkNumber = array.pop();
    let reversedArray = array.reverse();

    // create two empty array to put our number 
    let oddIndex = [];
    let evenIndex = [];

    // create a loop to organize number because of their index number
    for (let i = 0; i < reversedArray.length; i++) {
        if (i % 2 === 0) {
            evenIndex.push(reversedArray[i]);
        } else {
            oddIndex.push(reversedArray[i]);
        };
    };

    // Doubled the even numbers and soustract 9 if they are bigger than 9
    let evenDoubled = evenIndex.map(x => x *2);
    let evenMinus9 = evenDoubled.map(x => {
        if(x > 9) { return x - 9}
        else {return x}});

    // calculate the sum in each array    
    let evenTotal = evenMinus9.reduce((a, b) => a + b);
    let oddTotal = oddIndex.reduce((a, b) => a + b);

    // calculate the total sum and check if they are correct 
    let sum = evenTotal + oddTotal + checkNumber;
    if(sum %10 === 0) {
        return true;
    } else {
        return false;
    };
        
};

// function to return a valide credit card number from an invalid credit card number
const findInvalidCards = (array) => {
    // same as validateCred function
    let checkNumber = array.pop();
    let reversedArray = array.reverse();
    let oddIndex = [];
    let evenIndex = [];
    for (let i = 0; i < reversedArray.length; i++) {
        if (i % 2 === 0) {
            evenIndex.push(reversedArray[i]);
        } else {
            oddIndex.push(reversedArray[i]);
        };
    };
    let evenDoubled = evenIndex.map(x => x *2);
    let evenMinus9 = evenDoubled.map(x => {
        if(x > 9) { return x - 9}
            else {return x}});   
    let evenTotal = evenMinus9.reduce((a, b) => a + b);
    let oddTotal = oddIndex.reduce((a, b) => a + b);
    let sum = evenTotal + oddTotal + checkNumber;

    // calculate the difference
    let diff = sum %10;
    // re-reverse the array; find the index of the extra value and remove it 
    let newArray = array.reverse();
    let show = newArray.indexOf(diff);
    let move = newArray.splice(show, 1);

    let finalArray = newArray.push(checkNumber);
    return newArray;
};

const idInvalidCardCompanies = (array) => {
    const companies = [];
    let amex = 0;
    let visa = 0;
    let mastercard = 0;
    let discover = 0;
    let companyNotFound = 0;
    for (i = 0; i < array.length; i++) {
        switch (array[i][0]) {
            case 3:
            amex++;
            break;
            case 4:
            visa++;
            break; 
            case 5:
            mastercard++;
            break;
            case 6:
            discover++;
            break;
            default:
            companyNotFound++;
            break;     
        };
    }; 
    if(amex > 0) {
        companies.push('Amex');};
    if(visa > 0) {
        companies.push('Visa');};
    if(mastercard > 0) {
        companies.push('Mastercard');};
    if(discover > 0) {
        companies.push('Discover');};
    if(companyNotFound > 0) {
        companies.push('Company not found');};
    return companies;    
};




