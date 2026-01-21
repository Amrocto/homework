const url = 'https://pokeapi.co/api/v2/pokemon/ditto';

const xhr = new XMLHttpRequest();
xhr.open('GET', url);
xhr.send();
xhr.addEventListener('load', function(){
    if(this.status >= 200 && this.status < 300) {
        try{
            const data = JSON.parse(this.response);
            const newUrl = data.abilities[0].ability.url;
            const xhr2 = new XMLHttpRequest();
            xhr2.open('GET', newUrl);
            xhr2.send();
            xhr2.addEventListener('load', function(){
                const data = JSON.parse(this.response);
                const englishEntry = data.effect_entries.find(entry => entry.language.name === 'en'); 
                console.log(englishEntry.effect);
            })
        }
        catch(err){
            console.error('json parse failed occured', err);
        }
    } else console.error('nerwork failed occured', this.status);
})