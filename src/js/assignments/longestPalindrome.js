
const isPrime = (number) => {
 if (number===1) return false;
  else if(number === 2) return true;
  else
  {
    for(let i = 2; i <= Math.sqrt(number); i++)
    {
      if(number % i === 0) return false;
    }
    return true;
  }
} 

console.log(isPrime(9));

function is_Palindrome(str) {
var rev = str.split("").reverse().join("");
return str == rev;
}

function longest_palindrome(input){

var max_length = 0,
maxp = '';

for(var i=0; i < input.length; i++) 
{
var subs = input.substr(i, input.length);

for(var j=subs.length; j>=0; j--) 
{
var sub_subs_str = subs.substr(0, j);
if (sub_subs_str.length <= 1)
continue;

if (is_Palindrome(sub_subs_str))
{
if (sub_subs_str.length > max_length) 
{
max_length = sub_subs_str.length;
maxp = sub_subs_str;
}
}
}
}

return maxp;
}
console.log(longest_palindrome("abracadabra"));

console.log(longest_palindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE")); 