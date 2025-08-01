// Ambil elemen-elemen yang diperlukan
const form = document.getElementById('contact-form');
const resultDiv = document.getElementById('form-result');
const welcomeDiv = document.getElementById('welcome-name');

// Saat form disubmit
form.addEventListener('submit', function (e) {
    e.preventDefault(); // Supaya halaman tidak reload

    // Ambil nilai input
    const nama = form.nama.value.trim();
    const email = form.email.value.trim();
    const pesan = form.pesan.value.trim();

    // ✅ Validasi sederhana
    if (!nama || !email || !pesan) {
        resultDiv.innerHTML = `<p class="error">⚠️ Semua field wajib diisi!</p>`;
        return;
    }

    // ✅ Tampilkan Welcoming Speech di Home
    welcomeDiv.innerHTML = `<h2 style="color:#e75480; animation: fadeIn 1s;">Hi ${nama}!</h2>`;

    // ✅ Tampilkan hasil submit di bawah Contact
    resultDiv.innerHTML = `
        <div class="result-box">
            <p><strong>Nama:</strong> ${nama}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Pesan:</strong> ${pesan}</p>
        </div>
    `;

    // Reset form setelah submit
    form.reset();
});
