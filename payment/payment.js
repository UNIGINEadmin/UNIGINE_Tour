document.getElementById("send-to-wa").addEventListener("click", function () {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const method = document.getElementById("method").value;
  const fileInput = document.getElementById("file");
  const adminNumber = "6285136752404"; // Nomor WhatsApp admin

  // Ambil nama pemain
  const player1 = document.getElementById("player1").value.trim();
  const player2 = document.getElementById("player2").value.trim();
  const player3 = document.getElementById("player3").value.trim();
  const player4 = document.getElementById("player4").value.trim();
  const playerReserve = document.getElementById("playerReserve").value.trim();

  // Validasi data
  if (!name || !email || !method || !fileInput.files.length || !player1 || !player2 || !player3 || !player4) {
    alert("Harap lengkapi semua data sebelum mengirim.");
    return;
  }

  // Format pesan WhatsApp
  const message = `*Halo Admin, saya ingin mengirim bukti pembayaran untuk turnamen:*\n\n` +
                 `===================================\n` +
                 `--> Nama Tim: *${name}*\n` +
                 `📞 Nomor Tlp Leader: *${email}*\n` +
                 `💳 Metode Pembayaran: *${method}*\n\n` +
                 `===================================\n` +
                 `👾 Nama Player 1: ${player1}\n` +
                 `👾 Nama Player 2: ${player2}\n` +
                 `👾 Nama Player 3: ${player3}\n` +
                 `👾 Nama Player 4: ${player4}\n` +
                 `👾 Nama Player 5: ${player4}\n` +
                 (playerReserve ? `🛡️ Nama Player Cadangan: ${playerReserve}\n` : '') +
                 `\nKarna Ada kesalahan Cloud, Mohon Upload ulang Bukti Pembayaran Di sini`;


  // Membuat link WhatsApp
  const waLink = `https://wa.me/${adminNumber}?text=${encodeURIComponent(message)}`;

  // Mengunggah file (simulasi untuk WA)
  const file = fileInput.files[0];
  if (file) {
    alert("File Anda siap dikirim. Lanjutkan ke WhatsApp untuk melengkapi.");
    window.open(waLink, "_blank");
  }
});
