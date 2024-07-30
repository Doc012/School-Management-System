document.addEventListener('DOMContentLoaded', () => {
    fetch('components/header/header.html')
    .then(response => {
        if (!response){
            throw new Error('Network response was no ok')
        }
        return response.text();
    })
    .then(data => {
        document.getElementById('header').innerHTML = data;
    })
    .catch(error => {
        console.error('There was a problem with the fetch operation:', error);
    })
})
