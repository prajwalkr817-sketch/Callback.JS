// 1. Write a function to reverse a string without using reverse().
function reverse(str){
 let newStr = '';
 for(let i=str.length-1;i>=0;i--){
 newStr = newStr + str[i];
 }
 console.log(newStr)
 }
 reverse("Prajwal");
// explanation 1->>first we take an empty string and will apply for loop on the previous string and iteration will begin from the last index of string and will be stored in the new string.

// 2. Write a function to check whether a string is a palindrome.
function palindrome_check(str){
 let newStr = '';
 for(let i=str.length-1;i>=0;i--){
 newStr = newStr + str[i];
 }
 if(str==newStr){
 console.log("This is a Palindrome.")
 } else {
 console.log("This is not a Palindrome.")
 }
 }
 palindrome_check("Judge");
 palindrome_check("Dhoni");
// explanation 2->> first we reverse the given string using for loop and store the reversed string in new variable,and then using conditional statements we check the given and the reversed string are they same or not.

// 3. Write a function to count vowels and consonants in a string.
function count(str){
 let vowel = 0;
 let consonant = 0;
 for(let char of str){
 if(char==='a'||char==='e'||char==='i'||char==='o'||char==='u'){
    vowel++ ;
 } else {
 consonant++ ;
 }
 }
 console.log("count of vowel :",vowel);
 console.log("count of consonant :",consonant);
 }
 count("elephant");
// explanation 3->> first we define two variable named vowel and consonant count and initially take the value as zero,and then we apply for of loop to go to each character of the string after that for each character we check with vowel(a,e,i,o,u) if found even count will increase by 1 if not found consonant count will increase by 1.

// 4. Write a function to find the second-largest distinct number in an array.
function second_largest(array){
 let newarr = new Set(array);
 let res = Array.from(newarr);
 let sortedArray = res.sort((a,b)=> a-b);
 console.log(sortedArray[sortedArray.length-2])
 }
 second_largest([2,5,9,2,21,50,63,70,63,90,50]);
// explanation 4->>first we convert the given array into set to remove the duplicate element and then the set into a new array and after that we sort the array in ascending order and after that our result is the second last element.

// 5. Write a function to remove duplicate elements from an array without using Set.
function remove_duplicacy(array){
 let res = [];
 for(let i=0;i<array.length;i++){
 let isDuplicate = false ;
 for(let j=0;j<res.length;j++){
 if(array[i]===res[j]){
 isDuplicate = true ;
 break;
 }
 }
 if(!isDuplicate){
 res.push(array[i]);
 }
 }
 console.log(res);
 }
 remove_duplicacy([2,5,9,2,21,50,63,70,63,90,50]);
// explanation 5->> first we take an empty array and apply nested for loop in the loop we check if the element of original array is equal to the element in res array using conditional statements if the element found then we change the isduplicate variable to true and break from the loop after that and then push the unique element to empty array.

// 6. Write a function to find the sum of all even numbers in an array.
function sum_of_even(array){
 let evenSum = 0;
 for(let char of array){
 if(char%2===0){
 evenSum = evenSum + char ;
 }
 }
 console.log(evenSum);
 }
 sum_of_even([8,2,5,6,9,10,4,7,9,3,13,17,18,19]);
// explanation 6->> first we take a variable named evensum with value=0,and go to each element of the array using for-of loop and then using conditional statement we check if the element is even or not if even found then we store the number in evensum variable.

// 7. Write a function to find the frequency of a given element in an array.
// lets assume we are finding the frequency of element 7 in an array.
function frequency(array){
 let frequencyOfElement = 0;
 for(let char of array){
 if(char===7){
 frequencyOfElement++ ;
 }
 }
 console.log(frequencyOfElement);
 }
 frequency([7,8,13,9,20,8,7,7,15]);
// explanation 7->>first we take a variable with value=0,and go to each element of the array using for-of loop and then using conditional statement we check each value with the element(of which we have to find frequency) if the condition goes true then we ++ the count.

// 8. Write a function to check whether two strings are anagrams.
function check_Anagram(str1,str2){
 if(str1.length===str2.length && str1.split('').sort().join('')===str2.split('').sort().join('')){
 console.log("This is an anagrams.");
 } else {
 console.log("This is not an anagrams.")
 }
 }
 check_Anagram("yummy","talk");
 check_Anagram("hello","world");
 check_Anagram("the eyes","they see");
// explanation 8->> first we check the length of the two given string and also compare each element of both the strings with the help of conditional statement.if the condition goes true we will print this is an anagrams otherwise not.

// 9. Write a function to move all zeros to the end of an array while maintaining the order of non-zero elements.
function moveZerosToEnd(arr){
 let insertPosition = 0;
 let newArr = [];
 let zeroCount = 0;
 for(let i=0;i<arr.length;i++){
 if(arr[i]!==0){
 newArr[insertPosition]=arr[i];
 insertPosition++;
 } else if(arr[i]===0){
 zeroCount++;
 }
 }
 for(let j=0;j<zeroCount;j++){
 newArr.push(0);
 }
 console.log(newArr);
 }
 moveZerosToEnd([0,3,50,68,78,0,0,45,0]);
// explanation 9->> we initate with taking a variable name insertPosition with value =0,an empty array,and a variable named zerocount with value=0. and then i applied for loop onthe given array and check the condition if the element!==0 then we add in the new arraywith the given sequence and if the element found zero we pushed it in the end of the array.
