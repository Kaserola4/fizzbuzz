test('FizzBuzzService', () => {
    const FizzBuzzService = require('./fizzbuzz-service')

    const explorer1 = { name: "Explorer1", score: 1 }
    const validation1 = FizzBuzzService.applyValidationInExplorer(explorer1)
    expect(validation1).toStrictEqual({name: 'Explorer1', score: 1, trick: 1})
    const explorer3 = { name: "Explorer3", score: 3 }
    const validation2 = FizzBuzzService.applyValidationInExplorer(explorer3) 
    expect(validation2).toStrictEqual({name: "Explorer3", score: 3, trick: "FIZZ"})

    const explorer5 = { name: "Explorer5", score: 5 }
    const validation3 = FizzBuzzService.applyValidationInExplorer(explorer5) 
    expect(validation3).toStrictEqual({name: "Explorer5", score: 5, trick: "BUZZ"})

    const explorer15 = { name: "Explorer15", score: 15 }
    const validation4 = FizzBuzzService.applyValidationInExplorer(explorer15)
    expect(validation4).toStrictEqual({name: "Explorer15", score: 15, trick: "FIZZBUZZ"})

});