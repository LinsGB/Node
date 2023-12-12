const {setTimeout} = require('timers/promises')

// async

const asyncFunction1 = async () => {
    console.log('[asyncFunction1] Before')
    await setTimeout(1000)
    console.log('[asyncFunction1] After')
}

asyncFunction1()
console.log('Intresting')

asyncFunction1().then(() => {
    console.log('Intresting')
})