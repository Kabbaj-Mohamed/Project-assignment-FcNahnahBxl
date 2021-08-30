let name = document.querySelector('#name')
let email = document.querySelector('#email')
let message = document.querySelector('#message')
let submit = document.querySelector('#submit')

// qd click : 
submit.addEventListener('click', (e) => {
    e.preventDefault();
    const data = {
        name: name.value,
        email: email.value,
        message: message.value,
        submit: submit.value
    };

    fetch('http://localhost:3000/contactform', {
        method: 'POST', // or 'PUT'
        headers: {'Content-Type': 'application/json',},
        body: JSON.stringify(data),
    })
        .then(data => {
            console.log('Success:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

})

