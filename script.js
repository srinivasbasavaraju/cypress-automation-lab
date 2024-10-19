document.getElementById('countryInput').addEventListener('input', function() {
    const suggestions = ["India", "United States", "Canada", "Australia", "Germany"];
    const input = this.value.toLowerCase();
    const suggestionBox = document.getElementById('suggestionBox');
    suggestionBox.innerHTML = '';

    if (input) {
        const filteredSuggestions = suggestions.filter(country => country.toLowerCase().startsWith(input));
        filteredSuggestions.forEach(country => {
            const div = document.createElement('div');
            div.innerText = country;
            div.className = 'suggestion-item';
            div.onclick = () => {
                document.getElementById('countryInput').value = country;
                suggestionBox.innerHTML = '';
            };
            suggestionBox.appendChild(div);
        });
    }
});

function showAlert() {
    alert('This is an alert!');
}

function showConfirm() {
    confirm('This is a confirm dialog. Do you agree?');
}
