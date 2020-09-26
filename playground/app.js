const obj = {
    name: 'chaitu',
    mobile: 345678,
    city: 'Hyderabad'
}

const { name, city } = obj;
console.log(name);

const transaction = (type, { name }) => {
    console.log(type + ' ' + name)
}

transaction('test', obj);