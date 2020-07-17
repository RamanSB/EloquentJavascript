// Ex 9.1
/*
1) car and cat
2) pop and prop
3) ferret, ferry, and ferrari
4) Any word ending in ious
5) A whitespace character followed by a period, comma, colon, or semicolon
6) A word longer than six letters
7) A word without the letter e (or E)
*/

let q1RegExp = /ca(r|t)/;
let q2RegExp = /pr?op/;
let q3RegExp = /ferr(et|y|ari)/;
let q4RegExp = /(\w*)(ious)\b/;
let q5RegExp = /\s[\.,:;]/;
let q6RegExp = /\w{7,}/;
let q7RegExp = /\b[^\WeE]+\b/; // /\b[^\We]+\b/i,



function verify(regexp, yes, no) {
  // Ignore unfinished exercises
  if (regexp.source == "...") return;
  for (let str of yes) if (!regexp.test(str)) {
    console.log(`Failure to match '${str}'`);
  }
  for (let str of no) if (regexp.test(str)) {
    console.log(`Unexpected match for '${str}'`);
  }
}


verify(q1RegExp,
       ["my car", "bad cats"],
       ["camper", "high art"]);

verify(q2RegExp,
      ["pop culture", "mad props"],
      ["plop", "prrrop"]);

verify(q3RegExp,
      ["ferret", "ferry", "ferrari"],
      ["ferrum", "transfer A"]);

verify(q4RegExp,
      ["how delicious", "spacious room"],
      ["ruinous", "consciousness"]);

verify(q5RegExp,
       ["bad punctuation ."],
       ["escape the period"]);

verify(q6RegExp,
      ["hottentottententen"],
      ["no", "hotten totten tenten"]);

verify(q7RegExp,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape", "BEET"]);


/* Quoting Style */
let text = "'I'm the cook,' he said, 'it's my job.'";

// Change this call.
//ToDo: Q2
console.log(text.replace(/\'/));


//Q3
//Must allow for signs to be present (prefixed) optional /(+|-)
//No letters allowed except from eE [^\]
let number = /[+-]?\d?\.?[eE]?[+-]?(\d|.)\d*/;

// Tests:
for (let str of ["1", "-1", "+15", "1.55", ".5", "5.",
                 "1.3e2", "1E-4", "1e+12"]) {
  if (!number.test(str)) {
    console.log(`Failed to match '${str}'`);
  }
}
for (let str of ["1a", "+-1", "1.2.3", "1+1", "1e4.5",
                 ".5.", "1f5", "."]) {
  if (number.test(str)) {
    console.log(`Incorrectly accepted '${str}'`);
  }
}
