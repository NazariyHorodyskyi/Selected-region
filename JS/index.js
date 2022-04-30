const countriesSelect = document.querySelector('#countries');
const regionsSelect = document.querySelector('#regions');
const citiesSelect = document.querySelector('#cities');

window.onload = () => {

    const addOptionsInSelect = (select) => {
        COUNTRIES.forEach((country, index) => {
            select.append(new Option(country.name, index));
        });
    };

    const clearOptionsSelect = (select) => {
        for(let op of Array.from(select)) {
            select.remove(op);
        }

    }


addOptionsInSelect(countriesSelect);
let states;

countriesSelect.addEventListener('change', () => {
    regionsSelect.disabled = false;
    
     states = COUNTRIES[Number(countriesSelect.value)].states;
     
     clearOptionsSelect(regionsSelect);

     states.forEach((state, index) => {
        regionsSelect.append(new Option(state.name, index));
     });
})

regionsSelect.addEventListener('change', () => {
    citiesSelect.disabled = false;
    const cities = states[Number(regionsSelect.value)].cities;
    
    clearOptionsSelect(citiesSelect);

    cities.forEach(city => {
        citiesSelect.append(new Option(city.name));
    })

    
})

} // finish onload

