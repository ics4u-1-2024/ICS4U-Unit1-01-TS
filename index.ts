/**
 * The program shows how to get input
 *   and deal with numbers.
 *
 * By:      Mr. Coxall
 * Version: 1.0
 * Since:   2020-01-01
 */

import { createPrompt } from 'bun-promptx'

const name = createPrompt('What is your name? ')
console.log(`Hey there ${String(name.value)}`)

const ageString = createPrompt('What is your age? ')
let ageNumber = parseInt(ageString.value)
ageNumber = ageNumber - 10
console.log(`Age is > ${ageNumber}`)

console.log('\nDone.')