// Примеры палиндромов:
// Казак
// А роза упала на лапу Азора
// Do geese see God?
// Madam, I’m Adam
function isPalindrome (string) {
    let left = 0,
        right = string.length - 1;
    while (left <= right) {
        if (string[left].toLowerCase().search(/[a-z]/) === -1) {
            left++;
        }
        else if (string[right].toLowerCase().search(/[a-z]/) === -1) {
            right--;
        }
        else if (string[left].toLowerCase() === string[right].toLowerCase()) {
            left++;
            right--;
        }
        else {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome('Казак'));
console.log(isPalindrome('А роза упала на лапу Азора'));
console.log(isPalindrome('Do geese see God'));
console.log(isPalindrome('Madam, I’m Adam'));
console.log(isPalindrome('kachok'));
console.log(isPalindrome('er       213456521        []]]                e'));
console.log(isPalindrome('adamImAda'));
console.log(isPalindrome(''));