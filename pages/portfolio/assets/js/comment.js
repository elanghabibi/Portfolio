const scriptURL =
  "https://script.google.com/macros/s/AKfycbxHFf1V1Q9fE6S38pSkj5THhguBzLlvSFY4ploCodnJlaMWs3y_IYgx_UD7f1W4F66v2g/exec"; // Ganti dengan URL Apps Script

document.getElementById("commentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let nama = document.getElementById("nama").value;
  let komentar = document.getElementById("komentar").value;

  // 🔹 Kirim data dengan waktu yang sudah diformat
  fetch(scriptURL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nama: nama, komentar: komentar}),
  })
    .then(() => {
      alert("Komentar berhasil dikirim!");
      document.getElementById("commentForm").reset();
      loadComments();
    })
    .catch((error) => {
      console.error("Error:", error);
    });
});

// 🔹 Fungsi untuk memuat komentar dari Spreadsheet
function loadComments() {
  fetch(scriptURL)
    .then((response) => response.json())
    .then((data) => {
      let commentHTML = "";
      data.forEach((comment) => {
        commentHTML += `<div class="comment-box">
                          <p><strong>${comment.nama}</strong></p>
                          <p>${comment.komentar}</p>
                        </div>`;
      });
      document.getElementById("commentSection").innerHTML = commentHTML;
    })
    .catch((error) => console.error("Error:", error));
}

loadComments();


function openComment() {
  let comment = document.getElementById("modalComment");
  comment.style.display = "flex";
  body.classList.add("no-scroll");
}

function closeComment() {
  let comment = document.getElementById("modalComment");
  comment.style.display = "none";
  body.classList.remove("no-scroll");
}
