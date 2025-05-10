function tampilkanInput() {
    const jenis = document.getElementById("bangun").value;
    const container = document.getElementById("inputContainer");
    let html = "";
  
    if (jenis === "kubus") {
      html = `
        <div class="form-group">
          <label>Sisi:</label>
          <input type="number" id="sisi" />
        </div>
      `;
    } else if (jenis === "tabung") {
      html = `
        <div class="form-group">
          <label>Jari-jari:</label>
          <input type="number" id="jari" />
        </div>
        <div class="form-group">
          <label>Tinggi:</label>
          <input type="number" id="tinggiTabung" />
        </div>
      `;
    } else if (jenis === "persegiPanjang") {
      html = `
        <div class="form-group">
          <label>Panjang:</label>
          <input type="number" id="panjang" />
        </div>
        <div class="form-group">
          <label>Lebar:</label>
          <input type="number" id="lebar" />
        </div>
        <div class="form-group">
          <label>Tinggi:</label>
          <input type="number" id="tinggiPersegi" />
        </div>
      `;
    }
  
    container.innerHTML = html;
    document.getElementById("hasil").innerHTML = "";
  }
  
  function hitung() {
    const jenis = document.getElementById("bangun").value;
    let hasil = "";
  
    if (jenis === "kubus") {
      const sisi = parseFloat(document.getElementById("sisi").value);
      const volume = Math.pow(sisi, 3);
      const luas = 6 * Math.pow(sisi, 2);
      hasil = `Volume Kubus: ${volume} <br>Luas Permukaan: ${luas}`;
    } else if (jenis === "tabung") {
      const jari = parseFloat(document.getElementById("jari").value);
      const tinggi = parseFloat(document.getElementById("tinggiTabung").value);
      const volume = Math.PI * Math.pow(jari, 2) * tinggi;
      const luas = 2 * Math.PI * jari * (jari + tinggi);
      hasil = `Volume Tabung: ${volume.toFixed(2)} <br>Luas Permukaan: ${luas.toFixed(2)}`;
    } else if (jenis === "persegiPanjang") {
      const panjang = parseFloat(document.getElementById("panjang").value);
      const lebar = parseFloat(document.getElementById("lebar").value);
      const tinggi = parseFloat(document.getElementById("tinggiPersegi").value);
      const volume = panjang * lebar * tinggi;
      const luas = 2 * (panjang * lebar + panjang * tinggi + lebar * tinggi);
      hasil = `Volume Balok: ${volume} <br>Luas Permukaan: ${luas}`;
    } else {
      hasil = "Pilih bangun terlebih dahulu!";
    }
  
    document.getElementById("hasil").innerHTML = hasil;
  }
  