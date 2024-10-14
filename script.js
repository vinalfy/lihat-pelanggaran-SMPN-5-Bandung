// Validasi NISN dan Nama Siswa
const siswaData = {
    "0098149840": "Vino Alfiano Yusuf"
};

// Daftar pelanggaran tetap
const pelanggaran = [
    { nama: 'Telat Datang', poin: 10 },
    { nama: 'Ke Kantin Saat Jam Pelajaran', poin: 15 },
    { nama: 'Makan Saat Jam Pelajaran', poin: 5 },
    { nama: 'Merusak Fasilitas', poin: 20 }
];

const MAX_POIN = 100; // Batas maksimal poin

// Fungsi untuk menampilkan pelanggaran dan menghitung total poin
function generatePelanggaran() {
    const nisnSiswa = document.getElementById("nisnSiswa").value;
    const namaSiswa = document.getElementById("namaSiswa").value;
    const errorMessage = document.getElementById("errorMessage");

    // Validasi input NISN dan Nama Siswa
    if (nisnSiswa === "" || namaSiswa === "") {
        errorMessage.textContent = "Masukkan NISN dan Nama Siswa terlebih dahulu!";
        return;
    }

    // Cek apakah NISN dan Nama Siswa sesuai
    if (siswaData[nisnSiswa] && siswaData[nisnSiswa] !== namaSiswa) {
        errorMessage.textContent = "NISN DENGAN NAMA ANDA TIDAK COCOK ULANGI LAGI!";
        return;
    } else if (!siswaData[nisnSiswa] && namaSiswa === siswaData["0098149840"]) {
        errorMessage.textContent = "NAMA DENGAN NISN ANDA TIDAK COCOK ULANGI LAGI!";
        return;
    } else if (!siswaData[nisnSiswa]) {
        errorMessage.textContent = "NISN tidak ditemukan!";
        return;
    }

    // Hapus pesan error jika validasi berhasil
    errorMessage.textContent = "";

    // Menampilkan hasil pelanggaran
    const hasilNama = document.getElementById("hasilNama");
    hasilNama.textContent = `${namaSiswa} mendapatkan total poin pelanggaran:`;

    const listPelanggaran = document.getElementById("listPelanggaran");
    listPelanggaran.innerHTML = ""; // Kosongkan list sebelumnya

    let totalPoin = 0;

    // Tambahkan pelanggaran ke dalam list
    pelanggaran.forEach(pelanggaranItem => {
        const li = document.createElement("li");
        li.textContent = `${pelanggaranItem.nama} - Poin ${pelanggaranItem.poin}`;
        listPelanggaran.appendChild(li);

        totalPoin += pelanggaranItem.poin;
    });

    // Tampilkan total poin
    const totalPoinElement = document.getElementById("totalPoin");
    totalPoinElement.textContent = "Total Poin: " + totalPoin + " / " + MAX_POIN;
}
