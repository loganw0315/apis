


const button = document.querySelector('button');

const buttonPress = event => {
    axios.get('https://swapi.dev/api/planets/2').then((res) => {
        for(let i = 0; i < res.data.residents.length; i++){
            axios.get(`${res.data.residents[i]}`).then((res) => {
                let resident = document.createElement('h2');
                let main = document.querySelector('main')
                resident.textContent = res.data.name;
                main.appendChild(resident);
            })
        }
    })  
}

button.addEventListener('click', buttonPress)