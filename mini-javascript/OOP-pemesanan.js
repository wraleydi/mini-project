class Film{
    constructor(judul, genre, harga) {
        this.judul = judul
        this.genre = genre
        this.harga = harga
        this.daftar = []
    }

    addFilm(film) {
        this.daftar.push(film);
    }

    daftarFilm() {
        console.log("Daftar Film:\n")
        this.daftar.forEach(film => {
            console.log(`Judul: ${film.judul}\nGenre: ${film.genre}\nharga: ${film.harga}\n--------------------------------\n`);
        });
    }
}

let film = new Film();
film.addFilm(new Film("Upin Ipin", "Komedi", 50000));
film.addFilm(new Film("Spongebob", "Komedi", 40000));
film.addFilm(new Film("Power Ranger", "Action, Petualangan", 60000));
film.daftarFilm();

class Pemesanan{
    constructor(nama_pemesan, judul_film, jumlah_tiket) {
        this.nama = nama_pemesan
        this.film = judul_film
        this.tiket = jumlah_tiket
    }

    hargaPemesanan() {
        let jumlah = this.film.harga * this.tiket;
        console.log("--------Daftar Pemesanan--------\n")
        console.log(`Pemesan: ${this.nama}\nJudul Film: ${this.film.judul}\nJumlah Tiket: ${this.tiket}\nTotal Harga: ${jumlah}\n--------------------------------\n`); 
    }
}

let pemesanan1 = new Pemesanan("Joni", film.daftar[0], 2);
let pemesanan2 = new Pemesanan("Budi", film.daftar[2], 5);
pemesanan1.hargaPemesanan();
pemesanan2.hargaPemesanan();
