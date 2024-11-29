function toggleMode(mode) {
  const standartBtn = document.getElementById("standart");
  const bootcampBtn = document.getElementById("bootcamp");

  if (mode === "standart") {
    standartBtn.classList.add(
      "bg-green-500",
      "text-white",
      "text-xl",
      "shadow-md"
    );
    standartBtn.classList.remove("text-gray-700");
    bootcampBtn.classList.remove(
      "bg-green-500",
      "text-white",
      "text-xl",
      "shadow-md"
    );
    bootcampBtn.classList.add("text-gray-700");
  } else {
    bootcampBtn.classList.add(
      "bg-green-500",
      "text-white",
      "text-xl",
      "shadow-md"
    );
    bootcampBtn.classList.remove("text-gray-700");
    standartBtn.classList.remove(
      "bg-green-500",
      "text-white",
      "text-xl",
      "shadow-md"
    );
    standartBtn.classList.add("text-gray-700");
  }
}

const images = [
  {
    src: "https://api.logobank.uz/media/logos_png/asaxiy-01.png",
    alt: "Asaxiy",
  },
  {
    src: "https://api.logobank.uz/media/logos_png/%D0%A3%D0%B7%D0%BF%D1%80%D0%BE%D0%BC%D1%81%D1%82%D1%80%D0%BE%D0%B9%D0%B1%D0%B0%D0%BD%D0%BA-01.png",
    alt: "SQB",
  },
  {
    src: "https://cbu.uz/upload/iblock/8ae/image_2022_08_01_15_35_28.png",
    alt: "Asakabank",
  },
  {
    src: "https://api.logobank.uz/media/logos_png/infin-01.png",
    alt: "InfinBank",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/1200px-Visa_Inc._logo.svg.png",
    alt: "Visa",
  },
  {
    src: "https://marketing.uz/uploads/articles/2767/article-original.png",
    alt: "Tenge Bank",
  },
  {
    src: "https://api.logobank.uz/media/logos_png/Kadastr_agentligi-01.png",
    alt: "Kadastr",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Upwork-logo.svg/2560px-Upwork-logo.svg.png",
    alt: "Upwork",
  },
  { src: "https://api.logobank.uz/media/logos_png/Uzum-01.png", alt: "Uzum" },
  {
    src: "https://api.logobank.uz/media/logos_png/Click-01_hjB080W.png",
    alt: "Click",
  },
];
const hamkorlar = document.getElementById("hamkorlar");
hamkorlar.innerHTML = images
  .map(
    (image) =>
      `<img src="${image.src}" alt="${image.alt}" class="w-32 h-32 object-contain">`
  )
  .join("");

const afzallik = [
  {
    src: "https://pdp.uz/static/media/location.20fd5f1f965c1747dce2a4bdf7eabd2c.svg",
    alt: "location",
  },
  {
    src: "https://pdp.uz/static/media/monitor.4441e5c098005b61afa145dfc09f8e9b.svg",
    alt: "Komputer savodxonligi",
  },
  {
    src: "https://pdp.uz/static/media/teacher.bb7a41d38f344bdf9a9b8247c08b5c6a.svg",
    alt: "Qo'shimcha darslar",
  },
  {
    src: "https://pdp.uz/static/media/briefcase.a3d580bb69d764039de6185687d80027.svg",
    alt: "Co-working 24/7",
  },
  {
    src: "https://pdp.uz/static/media/home-wifi.5dbaab6fa3d43ace4c9c33415903be4b.svg",
    alt: "Bepul Wi-Fi",
  },
  {
    src: "https://pdp.uz/static/media/double-users.148bf6260e7522a3899c5f28ec48b22c.svg",
    alt: "Mentor",
  },
  {
    src: "https://pdp.uz/static/media/teacher-2.aba5d2267bd454a7202b764b41bf343a.svg",
    alt: "HR darslari",
  },
  {
    src: "https://pdp.uz/static/media/book-check.14b1a63df538c2c6198f1c3c747f50b9.svg",
    alt: "Real loyihalar",
  },
  {
    src: "https://pdp.uz/static/media/teacher.bb7a41d38f344bdf9a9b8247c08b5c6a.svg",
    alt: "Internship (stajirovka)",
  },
  {
    src: "https://pdp.uz/static/media/fountain-pen.9821877d0df0f8392b578c6dac74d679.svg",
    alt: "Master class hamda workshoplar ",
  },
];

const afzallikLar = document.getElementById("afzallik-img");

afzallikLar.innerHTML = afzallik
    .map(
        (feature) => `
        <div class="flex-shrink-0 flex flex-col items-center gap-4">
            <div class="bg-green-50 p-6 rounded-full w-24 h-24 flex items-center justify-center">
                <img src="${feature.src}" alt="${feature.alt}" class="w-10 h-10">
            </div>
            <p class="text-sm text-center text-gray-700">${feature.alt}</p>
        </div>
    `
    )
    .join("");