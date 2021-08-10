module.exports = function toReadable (number) {
    let answer = ''
    const numberLength = String(number).length
    const firstNumberWord = String(number)[0]
    const secondNumberWord = String(number)[1]
    const thirdNumberWord = String(number)[2]
    const dozens = numberLength === 2
        ? numberList[String(number)[0] + String(number)[1]]
        : numberList[String(number)[1] + String(number)[2]]
    if (numberLength === 3) {
        if (dozens) {
            answer += `${numberList[firstNumberWord]} hundred ${dozens}`
        } else if (!Number(secondNumberWord) && !Number(thirdNumberWord)) {
            answer += `${numberList[firstNumberWord]} hundred`
        } else if (!Number(secondNumberWord)) {
            answer += `${numberList[firstNumberWord]} hundred ${numberList[thirdNumberWord]}`
        } else {
            answer += `${numberList[firstNumberWord]} hundred ${numberList[secondNumberWord + '0']} ${numberList[thirdNumberWord]}`
        }
    }
    if (numberLength === 2) {
        if (dozens) {
            answer += `${dozens}`
        } else {
            answer += `${numberList[firstNumberWord + '0']} ${numberList[secondNumberWord]}`
        }
    }
    if (numberLength === 1) {
        answer += numberList[firstNumberWord]
    }
    return answer
}
const numberList = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
}
