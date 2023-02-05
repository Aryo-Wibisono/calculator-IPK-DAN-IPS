let table = document.querySelector(".table");
// menambah data
let tambah_data = document.querySelector(".tambah_data");
// untuk menambah data
tambah_data.addEventListener("click", () => {
    let tambah = table.insertRow(-1);
    let cell1 = tambah.insertCell(0);
    let cell2 = tambah.insertCell(1);
    cell1.innerHTML = `<input type="number" placeholder="Masukkan semester" style="text-align: center; color: black"; flex-grow: 1;width: 100%;/>`;
    cell2.innerHTML = `<input type="text" placeholder="Masukkan IPS anda" style="text-align: center; color: black"; flex-grow: 1;width: 100%;/>`;
});
// untuk menghapus
let hapus = document.querySelector(".hapus")
hapus.addEventListener("click", () => {
    let hapus = table.deleteRow(-1)
});

// MENGHITUNG IPK total ips/ jumlah semester

let hitung_ipk = document.querySelector(".hitung");
hitung_ipk.addEventListener("click", () => {
    let lastRow = table.rows[table.rows.length - 1];
    let cellValue = lastRow.cells[0].value;
    let total_sem = parseFloat(cellValue);
    
    let baris = 0; // memastikan baris memiliki nilai saat diperhitungkan
    for (let i = 1; i < table.rows.length; i++) {
        let nilai = parseFloat(table.rows[i].cells[1].children[0].value);
        if (!isNaN(nilai)) {
            baris += nilai;
        } else {
            alert("Ada entri yang tidak valid dalam tabel, perhitungan tidak dapat dilakukan");
            return;
        }
        total_sem= total_sem
    }
    let ipk = baris / total_sem;
    if (!isNaN(ipk)) {
        let hasil = table.insertRow(-1);
        let cell1 = hasil.insertCell(0);
        cell1.innerHTML = "Total semester anda adalah " + total_sem;
        let cell2 = hasil.insertCell(1);
        cell2.innerHTML = "IPK Anda adalah " + ipk;
    } else {
        alert(total_sem);
    }
});

