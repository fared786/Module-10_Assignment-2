
// Question 1: Function named with calculateDifference
function calculateDifference(num1, num2){
    let difference = num1-num2;
    return difference;
}
console.log(calculateDifference(30,20));

// Question 2: Function named with isOdd
function isOdd(num){
    if(num % 2 !=0){
        return true;
    }else{
        return false;
    }
}
console.log(isOdd(3));
console.log(isOdd(4));

// Question 3: Function named with findMin
function findMin(array){
    let smallest_num = array[0];
    for (let i =1; i<array.length; i++){
        if(array[i]<smallest_num){
            smallest_num=array[i];
        }
    }
    return smallest_num;
}
console.log(findMin([2,3,6,7,10,9,5]));

// Question 4: Function with filtered even numbers in Array.
function filterEvenNumbers(array){
    let newArray = [];
    for( let i=0; i<array.length; i++){
        if(array[i] % 2 == 0){
           newArray.push(array[i]);
        }
    }
    return newArray;
}
console.log(filterEvenNumbers([1,2,3,4,5,6,7,10]));

// Question 5: Function with sortArrayDescending numbers in Array.
function sortArrayDescending(array){
    let final_array = array.sort((a,b)=>b-a);
    return final_array;
}
console.log(sortArrayDescending([5,8, 3, 1, 9, 11,7]));

// Question 6: Function with lowercaseFirstLetter
function lowercaseFirstLetter(str){
    let new_str =str[0].toLowerCase() + str.slice(1);
    return new_str;
}
console.log(lowercaseFirstLetter("Hello"));

// Question 7: Function named countVowels
function countVowels(str){
    if(!str){
        return 0;
    }
    const vowels ='aeiouAEIOU';
    count = [...str].filter(char=>vowels.includes(char)).length;
    return count;
}
console.log(countVowels("Bangladesh"));


// Question 8: Function with findAverage numbers in Array.
function findAverage(array){
    let sum =0;
    for(let i =0; i<array.length; i++){
        sum +=array[i];
    }
    let ave = sum/array.length
    return ave;
}
console.log(findAverage([4,2,3,6,8]));

