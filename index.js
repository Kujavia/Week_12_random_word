

const alphabet = 'АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ';
const a = Math.floor(Math.random() * alphabet.length);
const b = Math.floor(Math.random() * alphabet.length);
const c = Math.floor(Math.random() * alphabet.length);
const d = Math.floor(Math.random() * alphabet.length);


const word =alphabet[a]+alphabet[b]+alphabet[c]+alphabet[d];
console.log(word)
const title_my = document.getElementById('title1');
title_my.innerText = word