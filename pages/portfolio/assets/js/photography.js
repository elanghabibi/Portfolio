let images = document.querySelectorAll(".gallery .img");

let path = "../../../assets/images/fotografii/";

let modalText = [
  { //1
    caption: "Senja mengajarkan bahwa yang indah pun harus pergi",
    date: "28 Maret 2021"
  },
  { //2
    caption: "Langit biru dan hijau pepohonan berpadu dalam damai",
    date: "22 Juli 2023"
  },
  { //3
    caption: "Perjalanan kecil hari ini, kenangan besar di masa depan",
    date: "26 November 2023"
  },
  { //4
    caption: "Sendiri di jalan, tapi selalu di temani oleh mimpi",
    date: "08 Desember 2023"
  },
  { //5
    caption: "Tak perlu terburu-buru, yang penting tetap melaju",
    date: "08 Desember 2023"
  },
  { //6
    caption: "Menikmati perjalanan, membawa pulang ketenangan",
    date: "27 Desember 2023"
  },
  { //7
    caption: "Langit, Gunung, dan Sawah mengajarkan ketenangan dalam kesederhanaan",
    date: "18 Juni 2024"
  },
  { //8
    caption: "Hutan sunyi, tangga sepi, tetapi langkahmu tetap berarti",
    date: "24 Agustus 2024"
  },
  { //9
    caption: "Setiap jepretan adalah cerita yang tak akan gugur oleh waktu",
    date: "24 Agustus 2024"
  },
  { //10
    caption: "Setiap cabang memiliki arah, tapi tetap berasal dari akar yang sama",
    date: "24 Agustus 2024"
  },
  { //11
    caption: "Momen sederhana hari ini bisa jadi kenangan berharga di masa depan",
    date: "24 Agustus 2024"
  },
  { //12
    caption: "Daun gugur bukan akhir, tetapi jeda sebelum kehidupan tumbuh kembali",
    date: "24 Agustus 2024"
  },
  { //13
    caption: "Jangan takut berubah, bahkan pohon pun melepaskan daunnya",
    date: "24 Agustus 2024"
  },
  { //14
    caption: "Bahkan hal kecil bisa bersinar dalam sorotan yang tepat",
    date: "15 September 2024"
  },
  { //15
    caption: "Berani berbeda adalah cara untuk bersinar",
    date: "15 September 2024"
  },
  { //16
    caption: "Menonjol bukan soal ukuran, tapi tentang keberanian menjadi unik",
    date: "15 September 2024"
  },
  { //17
    caption: "Terus melaju, meski jalurmu tak seperti yang lain",
    date: "16 September 2024"
  },
  { //18
    caption: "Biarkan mimpimu melayang melebihi tingginya langit",
    date: "17 September 2024"
  },
  { //19
    caption: "Tak perlu bebas sepenuhnya untuk tetap bersinar",
    date: "25 Oktober 2024"
  },
];

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

for (let i = 0; i < images.length; i++) {
  let reversedIndex = images.length - 1 - i; // Membalik urutan
  images[i].style.backgroundImage = `url('${path}photo${reversedIndex + 1}.jpg')`;
}

const photographyPost = document.getElementById("photographyPost")

photographyPost.textContent = `${modalText.length}`