// return  npm install slugify yazılır terminale


const slugify = require('slugify'); // modulu dahil etmek

const texting = "how to install a module.";

const slug = slugify(texting); // some-string

console.log(slug); //how-to-install-a-module.

const slug2 = slugify(texting, "*"); // some-string

console.log(slug2) //how*to*install*a*module.

