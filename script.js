document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('appointment-form');
    const appointmentList = document.getElementById('appointment-list');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const date = document.getElementById('date').value;
        const time = document.getElementById('time').value;

        const li = document.createElement('li');
        li.innerHTML = `<strong>${name}</strong> (${email}) - ${date}, ${time}`;
        appointmentList.appendChild(li);

        form.reset();
    });
});
