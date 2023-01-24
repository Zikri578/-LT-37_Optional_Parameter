// membuat function calculateArea
function calculateArea(lebar1, panjang, satuan) {
    // membuat variabel satuan menjadi centi meter
    satuan = "Cm";

    lebar1 = parseFloat(prompt("Masukkan Lebar Ukuran Benda Tersebut :  ", lebar1));
    panjang = parseFloat(prompt("Masukkan Panjang Ukuran Benda Tersebut : ", panjang));

    let luas = lebar1 * panjang;
    alert(`Luas Ukuran Benda Tersebut yaitu : ${luas} ${satuan}`);
}

function greet(name, age){
    name = prompt("Masukkan Nama : ", name);;
    age = prompt("Masukkan Umur", age);

    alert(`Hallo ${name} umur anda ${age}`);

}