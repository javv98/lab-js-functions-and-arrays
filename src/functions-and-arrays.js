// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(num1, num2) {
    if (num1 > num2) {
        return num1
    } else if (num2 > num1) {
        return num2
    } else {
        return num1, num2
    }
}




// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(arrWords) {
    if (arrWords.length === 0) {
    return null
    }

    let longestWord = arrWords[0]
    arrWords.forEach(function(word) {
        if (word.length > longestWord.length) {
            longestWord = word
        }
    })
    return longestWord
}

console.log(findLongestWord(words))



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(arrNums) {
    let sumTotal = 0
    arrNums.forEach (function(number){
        sumTotal += number
    })
    return sumTotal
}




// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(arrNums) {
    if (arrNums.length === 0) {
        return 0
    }
    return sumNumbers(arrNums)/arrNums.length

}


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(arrWords, wordSearch) {
    if (arrWords.length === 0) {
        return null
    }

    let indexWord = 0
    arrWords.forEach(function(word) {
        if (word === wordSearch) {
            indexWord += 1
        }
    })

    if (indexWord !== 0) {
        return true
    } else {
        return false
    }
}


/* Dudas: Los return no se pueden escribir dentro de un forEach no? Por qué
no me estaba funcionado un if que estaba debajo de un forEach, siempre tienen que estar arriba?*/