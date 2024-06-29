function convertTemperature() {
    const celsiusInput = document.getElementById('celsius');
    const fahrenheitInput = document.getElementById('fahrenheit');
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = parseFloat(fahrenheitInput.value);

    if (!isNaN(celsius)) {
        fahrenheitInput.value = (celsius * 9/5) + 32;
    } else if (!isNaN(fahrenheit)) {
        celsiusInput.value = (fahrenheit - 32) * 5/9;
    } else {
        alert('Please enter a valid temperature!');
    }
}
s