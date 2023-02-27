const btn = document.getElementById('button');

document.getElementById('form')
    .addEventListener('submit', function (event) {
        event.preventDefault();

        btn.value = 'Sending...';
        btn.disabled = true;

        const serviceID = 'service_3rpfxhl';
        const templateID = 'template_slm7gug';

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                btn.disabled = false;
                btn.value = 'Submit';
                alert('Sent!');
            }, (err) => {
                btn.disabled = false;
                btn.value = 'Submit';
                alert(JSON.stringify(err));
            });
    });