const flowers = 
[
    {
        'id' : 'option1',
        'url' : '1.jpg',
        'title' : 'ALSTROEMERIA ',
        'desc' : 'Alstroemeria represents devotion and friendship. The twists and turns in the flower represent the trials and tribulations that happen in friendship.'
    },
    {
        'id' : 'option2',
        'url' : '2.jpg',
        'title' : 'AMARYLLIS ',
        'desc' : 'Amaryllis represents a splendid beauty and pride. This flower type can also represent worth'
    },
    {
        'id' : 'option3',
        'url' : '3.png',
        'title' : 'ANEMONE ',
        'desc' : 'Anemone comes from the Greek word anemos which means ‘wind.’  That is why the anemone flower is known as the ‘Wind Flower.’ If this flower is given in a negative matter it stands for fading hope and being forsaken. If given on a positive note it can represent anticipation.'
    }
]


const template = document.getElementById('flowers_temp').innerHTML;
var newTmp = Mustache.render(template, flowers);
console.log(newTmp);
document.getElementById('sample').innerHTML = newTmp;