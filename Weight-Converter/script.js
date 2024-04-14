function convertWeight(number) {
    if (isNaN(number)) {
        return {'gram': 0, 'pounds': 0};
    }
    gram = number * 1000;
    pounds = number * 2.20462;
    return {'gram': gram.toFixed(2), 'pounds': pounds.toFixed(2)};
}

// Mendapatkan referensi ke elemen-elemen HTML
const kgInput = document.getElementById('kg');
const gramResult = document.getElementById('gramResult');
const poundsResult = document.getElementById('poundsResult');

// Menambahkan event listener untuk mendengarkan perubahan pada input Kilogram
kgInput.addEventListener('input', function() {
    let kgValue = parseFloat(this.value); // Mendapatkan nilai Kilogram dalam tipe data float
    if (isNaN(kgValue)) {
        kgValue = 0;
    }
    const convertedValues = convertWeight(kgValue); // Mengonversi nilai Kilogram ke Gram dan Pounds
    gramResult.textContent = convertedValues.gram + ' g'; // Menampilkan nilai Gram
    poundsResult.textContent = convertedValues.pounds + ' lbs'; // Menampilkan nilai Pounds
});