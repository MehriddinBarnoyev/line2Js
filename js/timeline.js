const timelineData = {
    "2017": {
      title: "2017",
      text: "PDP asos solindi. O'z oldiga ulkan maqsadlarni qo'ygan holda, o'quv markazi ochildi.",
      image: "https://pdp.uz/static/media/2017.a638fc9169f3eaa46c3b.jpg"
    },
    "2019": {
      title: "2019",
      text: "600 kishiga moʻljallangan yangi markaz ochilishi. Dasturchilarni intensiv tarzda tayyorlash uchun birinchi bootcamp kurslari taqdim etildi.",
      image: "https://pdp.uz/static/media/2019.b72d8cecbd741fbf7559.jpg"
    },
    "2020": {
      title: "2020",
      text: " Birinchi onlayn darslar: PDP Onlayn. Dasturlashni butun dunyodagi hamyurtlarimiz oʻrganishiga imkoniyat yaratildi va hozirda 20 ta davlatlardan 700 nafardan ortiq talabalar foydalanishmoqda.",
      image: "https://pdp.uz/static/media/2020.9bc87f08712b05f3d52d.jpg"
    },
    "2021": {
      title: "2021",
      text: "Sigʻimi 3000 tagacha boʻlgan yangi markaz ochilishi. Dasturchilarni ish bilan taʼminlash uchun autsors va rekruting kompaniyalari ochildi.",
      image: "https://pdp.uz/static/media/2021.25bbf1f3e8d85f6e3d13.jpg"
    },
    "2022": {
      title: "2022",
      text: "PDP University – ilgʻor mutaxassislarni tayyorlashga yoʻnaltirilgan toʻlaqonli IT Universiteti tashkil qilindi",
      image: "https://pdp.uz/static/media/2022.9856348908e5f55ba309.jpg"
    },
    "2023": {
      title: "2023",
      text: "PDP School - O'zbekistondagi birinchi bor ITga ixtisoslashgan xususiy maktabga asos solindi",
      image: "https://pdp.uz/static/media/2023.d9ae42be3bdd48c84347.jpg"
    }
  };
  
  document.querySelectorAll('.year').forEach(yearElement => {
    yearElement.addEventListener('click', () => {
      // Remove active class from all years
      document.querySelectorAll('.year').forEach(el => el.classList.remove('active'));
  
      // Add active class to clicked year
      yearElement.classList.add('active');
  
      // Update content
      const year = yearElement.dataset.year;
      document.getElementById('yearTitle').textContent = timelineData[year].title;
      document.getElementById('yearText').textContent = timelineData[year].text;
      document.getElementById('yearImage').src = timelineData[year].image;
    });
  });
  