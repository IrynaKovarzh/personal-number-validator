class PersonalNumberValidator {

    hasAcceptableFormat(personalNumberText : string): boolean {
        let last4Numbers = new RegExp(/\d{4}$/);
        let bdNumbers = new RegExp(/^[0-9]{2}[0-1][0-9][0-3][0-9]-?/);  
        let regexpNumber = new RegExp(/^\d{12}|/.source + bdNumbers.source + last4Numbers.source); 
        return regexpNumber.test(personalNumberText);
    }

    isRealDate = (dateText : string) : boolean => {
        let year, month, day : number;
        let date : Date;
        let date2 : any;

        if (dateText.length == 6) {
            dateText = "19" + dateText;
        }

        year = +dateText.slice(0, 4);
        month = +dateText.slice(4, 6);
        day = +dateText.slice(6, 8);
        
        date = new Date(year, month, day);  
        date2 = date

        return date2
            && Object.prototype.toString.call(date2) === "[object Date]" 
            && !isNaN(date2)
            && date.getFullYear() == year
            && date.getMonth() == month
            && date.getDate() == day;
    }

    isYounger100(personalNumberText : string): boolean {
        let year : number;
        let today : Date;
        let text : string;

        text = (new String(personalNumberText)).replace("-", "");  

        if (text.length == 10) 
            year = 1900 + +(text.slice(0, 2))
        else
            year = +personalNumberText.slice(0, 4);             
                          
        today  = new Date();

        return today.getFullYear() - year < 100;
    }

    isValide(personalNumberText : string): boolean {
        let text : string;

        text = (new String(personalNumberText)).replace("-", "");       

        return this.isRealDate(text.slice(0, text.length - 4))
            && this.isChecksumCorrect(text);
    }

    convertingToNumber = (v : number) : number => {
        let b = v % 10;
        return (v < 10) ? v
                        : (v - b) / 10 + b;
    }

    isChecksumCorrect(numberText : string): boolean {
        let text : string;
        let checksumNumber : number;

        let numberTextLength = numberText.length;                
        text = (numberTextLength == 12) ? numberText.slice(2, numberTextLength - 1)
                                        : numberText.slice(0, numberTextLength - 1);

        checksumNumber = +numberText.substr(numberTextLength - 1, 1);
        
        let checksumCalculationStep1 = text.slice(0, 9).split('')
                                           .map((v, i) => { return (i % 2 == 1) 
                                                        ? +v 
                                                        : this.convertingToNumber((+v) * 2); });

        let sum = 0; 
        checksumCalculationStep1.forEach((v) => { sum += v; }); 

        let lastDigitOfSum = sum % 10;
        let difference = 10 - lastDigitOfSum;
        let lastDigitOfDifference = difference % 10;

        return checksumNumber == lastDigitOfDifference;
    }
  }
  
  export default PersonalNumberValidator  