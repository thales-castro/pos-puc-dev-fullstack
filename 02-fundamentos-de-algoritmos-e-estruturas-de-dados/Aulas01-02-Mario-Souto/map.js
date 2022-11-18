var myMap = new Map();

//11/11/2011 11 at night.
myMap.set('11/11/2011 - 23:30 - URL', { title: 'Website Title', url: 'Only url' });
myMap.set('11/11/2011 - 23:31 - URL', {});

var resultado = myMap.get('11/11/2011 - 23:30 - URL');
console.log(resultado);