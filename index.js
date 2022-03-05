
function isPalindrome(word) {

  const items = word.split('');
  const revItems = [];
  let j = items.length;

  for (let i = 0; i < items.length; i++) {
      j = j - 1;
      revItems.push(items[j]);
  }

  let isEqual = JSON.stringify(items) === JSON.stringify(revItems)
  return isEqual;

} 

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
