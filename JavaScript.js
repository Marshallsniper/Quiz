document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    const hair = document.querySelector('input[name="hair"]:checked');
    const eyes = document.querySelector('input[name="eyes"]:checked');
    const age = document.querySelector('input[name="age"]:checked');
    const zodiac = document.querySelector('input[name="zodiac"]:checked');
    const time = document.querySelector('input[name="time"]:checked');

    if (hair && eyes && age && zodiac && time) {
        let color = '';

        // Simple logic to determine color based on answers
        if (hair.value === 'blonde') {
            color = 'Yellow';
        } else if (hair.value === 'brown') {
            color = 'Brown';
        } else if (hair.value === 'black') {
            color = 'Black';
        } else if (hair.value === 'red') {
            color = 'Red';
        }

        if (eyes.value === 'blue') {
            color += ' and Blue';
        } else if (eyes.value === 'green') {
            color += ' and Green';
        } else if (eyes.value === 'brown') {
            color += ' and Brown';
        } else if (eyes.value === 'hazel') {
            color += ' and Hazel';
        }

        // Additional logic can be added for age, zodiac, and time
        
        document.getElementById('result').innerText = `Your personality color is: ${color}`;
    } else {
        alert('Please answer all questions.');
    }
});
