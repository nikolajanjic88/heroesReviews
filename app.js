const heroesReviews = [
    {
      id: 1,
      name: 'Fëanor',
      race: 'Noldor',
      img: 'images/1.jpg',
      text: "Fëanor was a Ñoldorin Elf, second King of the Noldor, and one of the Elven kindred that departed from Valinor in the land of Aman, where they had lived with the Valar",
    },
    {
      id: 2,
      name: 'Illidan Stormrage',
      race: 'Night Elf',
      img: 'images/2.jpg',
      text: 'Illidan Stormrage, commonly known as the Betrayer, is the first of the demon hunters, the former self-proclaimed Lord of Outland, the former ruler of the Black Temple, and the original leader of the Illidari. He is the twin brother of Malfurion Stormrage and was, like his sibling, in love with Tyrande Whisperwind.',
    },
    {
      id: 3,
      name: 'Fingolfin',
      race: 'Noldor',
      img: 'images/3.jpg',
      text: 'Fingolfin was the first High King of the Ñoldor in Beleriand; the Ñoldor being one of the three branches of Elves. He was the eldest son of Finwë and Indis, younger brother of Findis, older brother of Irimë and Finarfin, and the younger half-brother of Fëanor. He founded the House of Fingolfin, which ruled the Ñoldor in Middle-earth.',
    }
  ]

const img = document.getElementById('hero-img')
const hero = document.getElementById('name')
const race = document.getElementById('race')
const info = document.getElementById('info')

const prevBtn = document.querySelector('.prev-btn')
const nextBtn = document.querySelector('.next-btn')
const randomBtn = document.querySelector('.random-btn')

let currentItem = 0


function showPerson(person) {
    const item = heroesReviews[person];
    img.src = item.img;
    hero.textContent = item.name;
    race.textContent = item.race;
    info.textContent = item.text;
  }

nextBtn.onclick = () => {
    currentItem++
    if(currentItem > heroesReviews.length - 1) {
        currentItem = 0
    }
    showPerson(currentItem)
}

prevBtn.onclick = () => {
    currentItem--
    if(currentItem < 0) {
        currentItem = heroesReviews.length - 1
    }
    showPerson(currentItem)
}

randomBtn.onclick = () => {
    currentItem = Math.floor(Math.random() * heroesReviews.length);
    showPerson(currentItem);
}