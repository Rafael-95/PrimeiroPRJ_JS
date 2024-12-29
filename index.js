document.getElementById('accidentForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const lastAccidentDateInput = document.getElementById('lastAccidentDate').value;
    const resultDiv = document.getElementById('result');

    if (!lastAccidentDateInput) {
        resultDiv.textContent = 'Por favor, insira uma data válida.';
        return;
    }

    const lastAccidentDate = new Date(lastAccidentDateInput);
    const currentDate = new Date();

    if (lastAccidentDate > currentDate) {
        resultDiv.textContent = 'A data do último acidente não pode ser no futuro.';
        return;
    }

    const differenceInTime = currentDate - lastAccidentDate;
    const differenceInDays = Math.floor(differenceInTime / (1000 * 60 * 60 * 24));

    resultDiv.textContent = `Já se passaram ${differenceInDays} dias sem acidentes.`;
});
