/* 
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. 

Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:

- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
  Questo richiederà un minimo di ricerca.

  tools: 
- const
- Number
- Expressions and operators
- if - else if

*/

//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. 

// Numero di chilometri da percorrere

const km = Number(prompt("Inserisci il numero di chilometri da percorrere")) // 227
console.log(km)

// età del passeggero 
const age = Number(prompt("Inserisci la tua età")) //28
console.log(age)

// Il prezzo del biglietto è definito in base ai km (0.21 € al km)
const price = km * 0.21
console.log(price)