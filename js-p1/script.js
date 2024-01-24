const API_URL = "http://numbersapi.com/"

document.addEventListener('DOMContentLoaded', function() {
    const responseContainer = document.getElementById('response-container');

    const submitButton = document.getElementById('submit-button');

    async function handleSubmit() {
        responseContainer.innerHTML = '';

        const typedNumber = document.getElementById('typed-number').value;
        
        // let requests = []

        // for(let i = 0; i < 4; i++) {
        //     const request = axios.get(`${API_URL}${typedNumber}?json`)
        //         .then(response => {
        //             const p = document.createElement('p');

        //             p.innerText = response.data.text;

        //             responseContainer.appendChild(p);
        //         })
        //         .catch(error => {
        //             console.error(error);
        //         });

        //     requests.push(request);
        // }

        // Promise.all(requests)

        for(let i = 0; i<4; i++) {
            const data = await axios.get(`${API_URL}${typedNumber}?json`)

            const p = document.createElement('p');
            p.innerText = response.data.text;
            responseContainer.appendChild(p);
        }
    }

    
    submitButton.addEventListener('click', handleSubmit);
})