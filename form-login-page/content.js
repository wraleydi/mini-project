function penjumlahan(angka1, angka2) {
    return angka1 + angka2
}

document.getElementById('gas').addEventListener('click', function() {
    let Angka1 = parseFloat(document.getElementById('angka1').value) ;
    let Angka2 = parseFloat(document.getElementById('angka2').value) ;

    let hasil = penjumlahan(Angka1, Angka2);
    
    document.getElementById('hasil').textContent = 'hasil: ' + hasil;
});