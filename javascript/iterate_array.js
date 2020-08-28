
const buildFibonacciSequence = maxItems => {
    const array = Array.from(Array(maxItems).keys())
    
    let actual = 1
    let previous = null
    return array.map( (_) => {

        if(previous === null) {
            previous = 0
            return 1
        }
        
        const sum = actual + previous 
        previous = actual
        actual = sum
        return sum
    } )

}

module.exports = buildFibonacciSequence 