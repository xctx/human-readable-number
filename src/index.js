module.exports = function toReadable(number) {

    if (number == 0) return 'zero';

    const digits = number.toString().padStart(3, 0).split(''); //string-em number to look '013','002' ...
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let o = ones[digits[2]];
    let h = ones[digits[0]];
    let t = '';

    if (+digits[1] < 2) {
        t = ones[+(digits[1] + digits[2])];
        o = '';
    } else {
        t = tens[+digits[1]];
    }

    return ((h + (!h ? '' : ' hundred ') + (!t ? '' : t + ' ' + o)).trim());
}