//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. 

// Numero di chilometri da percorrere

const km = Number(prompt("Inserisci il numero di chilometri da percorrere"))
console.log(km)

// età del passeggero 
const age = Number(prompt("Inserisci la tua età"))
console.log(age)

// Il prezzo del biglietto è definito in base ai km (0.21 € al km)
const price = km * 0.21
console.log(price)

// sconto del 20% per i minorenni
const under_18 = price * 20 / 100
console.log(under_18)

// sconto del 40% per gli over 65
const over_65 = price * 40 / 100
console.log(over_65)

if (age < 18) {
    // va applicato uno sconto del 20% per i minorenni
    console.log(under_18)
} else if (age > 65) {
    // va applicato uno sconto del 40% per gli over 65
    console_log(over_65)
    }
    


/*
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- 
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
  Questo richiederà un minimo di ricerca.

  tools: 
- const
- Number
- Expressions and operators
- if  else if 
*/
