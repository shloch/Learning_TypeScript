import { Invoice } from './classes/invoice.js'
import { ListTemplate } from './classes/ListTemplate.js';
import { Payment } from './classes/Payments.js'
import { HasFormatter } from './interfaces/hasFormatter'

// let docOne: HasFormatter;
// let docTwo: HasFormatter;


// docOne = new Invoice('yoshi', 'web work', 250)
// docTwo = new Payment('mario', 'plumbing work', 200);

// let docs: HasFormatter[] = [];
// docs.push(docOne);
// docs.push(docTwo);
// console.log('docs', docs)

const form = document.querySelector('.new-item-form') as HTMLFontElement

//inputs
const type = document.querySelector('#type') as HTMLInputElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul = document.querySelector('ul.item-list') as HTMLUListElement;
const list = new ListTemplate(ul);

form.addEventListener('submit', (e: Event) => {
    e.preventDefault()

    let doc: HasFormatter;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }
    list.render(doc, type.value, 'end');
})

//Generics

const addUID = <T extends object>(obj: T) => {
    let uid = Math.floor(Math.random() * 100);
    return { ...obj, uid };
}

let docOne = addUID({ name: 'yoshi', age: 40 });
console.log(docOne);