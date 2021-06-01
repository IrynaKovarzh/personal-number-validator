import WordProblem from './PersonalNumberValidation'

describe('Check Format', () => {

  it('Check Format YYMMDD-XXXX', () => {
    const question = '900116-6959'
    expect(new WordProblem().hasAcceptableFormat(question)).toBe(true)
  })

  it('Check Format YYMMDDXXXX', () => {
    const question = '9001166959'
    expect(new WordProblem().hasAcceptableFormat(question)).toBe(true)
  })

  it('Check Format 19YYMMDDXXXX', () => {
    const question = '199001166959'
    expect(new WordProblem().hasAcceptableFormat(question)).toBe(true)
  })

  it('Check Format 19YYMMDDXXXX', () => {
    const question = '19900116-6959'
    expect(new WordProblem().hasAcceptableFormat(question)).toBe(false)
  })
})


describe('Validity', () => {

  it('Validity YYMMDD-XXXX -- Valid', () => {
    const question = '900116-6959'
    expect(new WordProblem().isValide(question)).toBe(true)
  })

  it('Validity YYMMDDXXXX -- Valid', () => {
    const question = '9001166959'
    expect(new WordProblem().isValide(question)).toBe(true)
  })

  it('Validity 19YYMMDDXXXX -- Valid', () => {
    const question = '199001166959'
    expect(new WordProblem().isValide(question)).toBe(true)
  })

  it('Validity 19YYMMDDXXXX -- Not Valid', () => {
    const question = '199015166959'
    expect(new WordProblem().isValide(question)).toBe(false)
  })

  it('Validity 19YYMMDDXXXX -- Not Valid', () => {
    const question = '199011466959'
    expect(new WordProblem().isValide(question)).toBe(false)
  })
})

describe('Check Checksum', () => {
  it('Check Checksum Wiki1 -- Correct', () => {
    const question = '198112289874';
    expect(new WordProblem().isChecksumCorrect(question)).toBe(true);  
  })

  it('Check Checksum Wiki2 -- Correct', () => {
    const question2 = '1967091995530';
    expect(new WordProblem().isChecksumCorrect(question2)).toBe(true);  
  })

  it('Check Checksum 19YYMMDDXXXX -- Correct', () => {
    const question = '199001166959';
    expect(new WordProblem().isChecksumCorrect(question)).toBe(true);  
  })

  it('Check Checksum 19YYMMDDXXXX -- Not Correct', () => {
    const question2 = '199001166951';
    expect(new WordProblem().isChecksumCorrect(question2)).toBe(false);  
  })

  it('Check Checksum YYMMDDXXXX -- Correct', () => {
    const question = '199001166959';
    expect(new WordProblem().isChecksumCorrect(question)).toBe(true);  
  })

  it('Check Checksum YYMMDDXXXX -- Not Correct', () => {
    const question2 = '199001166951';
    expect(new WordProblem().isChecksumCorrect(question2)).toBe(false);  
  })
})

describe('Person is not 100+ years old', () => {
  it('She is not 100+ years old - 19YYMMDDXXXX', () => {
    const question = '198112289874';
    expect(new WordProblem().isYounger100(question)).toBe(true);  
  })

  it('She is not 100+ years old - YYMMDDXXXX', () => {
    const question = '67091995530';
    expect(new WordProblem().isYounger100(question)).toBe(true);  
  })

  it('She is 100+ years old - 19YYMMDDXXXX', () => {
    const question = '191112289874';
    expect(new WordProblem().isYounger100(question)).toBe(false);  
  })

  it('She is 100+ years old - YYMMDDXXXX', () => {
    const question = '0112289874';
    expect(new WordProblem().isYounger100(question)).toBe(false);  
  })
})
