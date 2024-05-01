def persegiPanjang(panjang, lebar):
    return panjang * lebar

def persegi(sisi):
    return sisi * sisi

def segitiga(alas, tinggi):
    return 0.5 * alas * tinggi

def hitung_luas(pilihan, *args):
    shapes = {
        '1': (persegiPanjang, 2),
        '2': (persegi, 1),
        '3': (segitiga, 2)
    }
    if pilihan in shapes:
        shape_func, expected_args = shapes[pilihan]
        if len(args) != expected_args:
            return f'Jumlah argumen yang diberikan tidak sesuai. Diperlukan {expected_args} argumen.'
        return shape_func(*args)
    else:
        return 'Pilihan tidak valid'

while True:
    try:
        nama = input("Masukkan nama kamu: ")
        print(f'Halo {nama}')

        jalankan = input('Apakah kamu ingin menjalankan program menghitung Luas Bangun Datar? y/n: ')
        if jalankan.lower() != 'y':
            print('Terimakasih')
            break

        while True:
            print("Pilih Bangun Datar:\n1. Persegi Panjang\n2. Persegi\n3. Segitiga")
            pilihan = input('Pilih 1/2/3: ')
            if pilihan not in ['1', '2', '3']:
                print('MASUKKAN PILIHAN DENGAN TEPAT!')
                continue

            if pilihan == '1':
                panjang = float(input('Masukkan panjang persegi (misal: 10): '))
                lebar = float(input('Masukkan lebar persegi (misal: 5): '))
                print(f'Luas Bangun Datar: {hitung_luas(pilihan, panjang, lebar)}')
            elif pilihan == '2':
                sisi = float(input('Masukkan sisi persegi (misal: 5): '))
                print(f'Luas Bangun Datar: {hitung_luas(pilihan, sisi)}')
            elif pilihan == '3':
                alas = float(input('Masukkan Alas Segitiga (misal: 5): '))
                tinggi = float(input('Masukkan Tinggi Segitiga (misal: 10): '))
                print(f'Luas Bangun Datar: {hitung_luas(pilihan, alas, tinggi)}')

            ulangi = input('Apakah kamu ingin mencoba lagi? y/n: ')
            if ulangi.lower() == 'n':
                print('Terima kasih')
                break

    except ValueError:
        print('Masukkan angka yang valid. Silakan coba lagi.')