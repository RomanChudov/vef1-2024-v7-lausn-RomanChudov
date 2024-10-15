/**
 * Verkefni 7 í Vefforritun 1, 2024.
 * Notar jsdoc til að skrifa lýsingu á föllum, inntaki og úttaki.
 * Kveikið á `Check JS` í Visual Studio Code til að sjá mögulegar villur.
 * Notar `console.assert` til að athuga hvort föll virki rétt.
 */

//------------------------------------------------------------------------------
// Fastar

/** Íslenskir sérhljóðar */
const CONSONANTS = "bcdfghjklmnpqrstvwxz".split("");

/** Íslenskir samhljóðar */
const VOWELS = "aeiouyáéýúíóöæ".split("");

//------------------------------------------------------------------------------
// Hjálparföll

/**
 * Athuga hvort óþekkt gildi sé strengur eða ekki.
 * @param {unknown} str Óþekkt gildi sem athuga á hvort sé strengur.
 * @returns `true` ef `str` er strengur, annars `false`.
 */
// Skilgreinum anonymous fall og bindum við breytuna `isString`
const isString = (str) => typeof str === "string";

// Prófum fallið
console.assert(isString("hi") === true, "isString: skilar `true` fyrir streng");
console.assert(isString(42) === false, "isString: skilar `false` fyrir tölu");
console.assert(isString(null) === false, "isString: skilar `false` fyrir null");

/**
 * Öruggt fall sem skilar fylki af strengjum úr gefnum streng, skipt upp með
 * gefnum afmkarkara (separator).
 * @param {string} str Hugsanlegur strengur sem skal skipta.
 * @returns {string[]} Fylki af strengjum eða tóma fylkið ef afmarkari kom
 * ekki fram.
 */
function split(str, separator = " ") {
  if (!isString(str)) {
    return [];
  }

  return str.split(separator);
}

//------------------------------------------------------------------------------
// Grunnföll sem skilgreina á

function longest(str) {
  if (isString(str)) {
    const stru = split(str);
    i = 0;
    for (x in stru) {
      if (stru[x].length > stru[i].length) {
        i = x;
      }
    }
    return stru[i];
  } else {
    return null;
  }
}

console.assert(longest("halló hæ") === "halló", "5 er stærri en 2");
console.assert(longest("halló hæ bææææ") === "halló", "fysrtur kemur first");
console.assert(longest("") === "", "tóm gefur tóm");
console.assert(longest(true) === null, "ekki streng gefur null");

function shortest(str) {
  if (isString(str)) {
    const stru = split(str);
    i = 0;
    for (x in stru) {
      if (stru[x].length < stru[i].length) {
        i = x;
      }
    }
    return stru[i];
  } else {
    return null;
  }
}
console.assert(shortest("halló hæ") === "hæ", "2 er minna en 5");
console.assert(shortest("halló hæ bææææ ha") === "hæ", "fysrtur kemur fyrstur");
console.assert(shortest("") === "", "tóm gefur tóm");
console.assert(shortest(true) === null, "ekki streng gefur null");

function reverse(str) {
  if (isString(str)) {
    const split = str.split("");
    const reversed = split.reverse();

    return reversed.join("");
  }
  return null;
}
console.assert(
  reverse("halló") === "óllah",
  "reverse: snýr við einföldum streng"
);
console.assert(
  reverse(false) === null,
  "reverse: ef ekki strengur, skila null"
);

function palindrome(str) {
  if (isString(str) && str !== "") {
    const reversed = reverse(str);
    return str.toLowerCase() === reversed.toLowerCase();
  } else {
    return false;
  }
}
console.assert(palindrome("halló") === false, "ekki samhverf");
console.assert(palindrome("Hæh") === true, "samhverf");
console.assert(palindrome("") === false, "tóm ekki samhverf");
console.assert(palindrome(29) === false, "ekki streng false");

function vowels(str) {
  if (isString(str)) {
    const streng = str.split("");
    i = 0;
    for (x in streng) {
      for (y in VOWELS) {
        if (streng[x].toLowerCase() === VOWELS[y].toLowerCase()) {
          i = i + 1;
        }
      }
    }
    return i;
  } else {
    return 0;
  }
}
console.assert(vowels("halló") === 2, "2 sérhljóða");
console.assert(vowels(false) === 0, "ekki streng");

function consonants(str) {
  if (isString(str)) {
    const streng = str.split("");
    i = 0;
    for (x in streng) {
      for (y in CONSONANTS) {
        if (streng[x].toLowerCase() === CONSONANTS[y].toLowerCase()) {
          i = i + 1;
        }
      }
    }
    return i;
  } else {
    return 0;
  }
}
console.assert(consonants("halló") === 3, "3 samhljóða");
console.assert(consonants(false) === 0, "ekki streng");

//------------------------------------------------------------------------------
// Leiðbeint ferli

function start() {
  // Útfæra
}
