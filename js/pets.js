
const adoptPet=(img)=>{
    console.log()
    const adoptContainer = document.getElementById('adoptChart');
    const adoptImage = document.createElement('div');
    adoptImage.innerHTML=`
    <img src=""/>
    `

    adoptContainer.append(adoptImage)
}

// /////////////////////////
const loadCategories = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/categories')
        .then(res => res.json())
        .then(data => displayCategories(data.categories))
        .catch(error => console.log(error))
}

const loadAllPets = () => {
    fetch('https://openapi.programming-hero.com/api/peddy/pets')
        .then(res => res.json())
        .then(data => displayAllPets(data.pets))
        .catch(error => console.log(error));
}

const loadCategoryPets = (id)=>{
    fetch(`https://openapi.programming-hero.com/api/peddy/category/${id}`)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error));
}
// display
const displayCategories = (categories) => {
    const categoriesContainer = document.getElementById('btn-container');

    categories.forEach(item => {
        const buttonContainer = document.createElement('div');
        console.log(item.category)
        buttonContainer.innerHTML = `
        <button id="${item.category}" onclick="loadCategoryPets(${item.category})" class="btn btn-neutral btn-outline">${item.category}</button>
        `
        categoriesContainer.append(buttonContainer);
    })
}


const displayAllPets = (pets) => {
    const petsContainer = document.getElementById('pets-chart');
    pets.forEach(pet => {
        
        // show the pets ass a card
        const card = document.createElement('div');
        card.innerHTML = `
        <div class="card bg-base-100 w-96 shadow-sm  ">
  <figure class="px-10 pt-10">
    <img
      src=${pet.image}
      alt="Shoes"
      class="rounded-xl" />
  </figure>
  <div class="card-body text-left">
    <h2 class="card-title">${pet.pet_name}</h2>
    ${pet.breed == undefined ? '<P>Breed: Not available</P>' : `<p>Breed: ${pet.breed}</p>`}
    ${pet.date_of_birth== undefined ? '<P>Birth: Not available</P>': `<p>Birth: ${pet.date_of_birth}</p>`}
    ${pet.gender == undefined ? '<P>Gender: Not available</P>': `<p>Gender: ${pet.gender}</p>`}
    ${pet.price === null  ? '<P>Price: Not available</P>': `<p>Price: ${pet.price} $</p>`}
    
    <div class="card-actions flex justify-around">
      <button class="btn btn-outline btn-accent"><img class="w-8 h-8" src="https://img.icons8.com/?size=80&id=gaPaLIcj658F&format=png"/></button>
    
      <button onclick="adoptPet(${pet.image})" class="btn btn-outline btn-accent">Adopt</button>
      <button class="btn btn-outline btn-accent">Details</button>
    </div>
  </div>
</div>
        `

        petsContainer.append(card);
    })
}


loadCategories()
loadAllPets()






// {
//     "status": true,
//     "message": "successfully fetched all the pets data",
//     "pets": [
//         {
//             "petId": 1,
//             "breed": "Golden Retriever",
//             "category": "Dog",
//             "date_of_birth": "2023-01-15",
//             "price": 1200,
//             "image": "https://i.ibb.co.com/p0w744T/pet-1.jpg",
//             "gender": "Male",
//             "pet_details": "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
//             "vaccinated_status": "Fully",
//             "pet_name": "Sunny"
//         },
//         {
//             "petId": 2,
//             "breed": "Siamese",
//             "category": "Cat",
//             "date_of_birth": "2022-09-05",
//             "price": 800,
//             "image": "https://i.ibb.co.com/3Wzz41D/pet-2.jpg",
//             "gender": "Female",
//             "pet_details": "This affectionate female Siamese cat is known for her vocal nature and love for attention. Born on September 5, 2022, she enjoys interactive play and snuggles. Fully vaccinated and priced at $800, she's the perfect fit for cat lovers who appreciate an intelligent, engaging, and sociable feline companion.",
//             "vaccinated_status": "Fully",
//             "pet_name": "Mia"
//         },
//         {
//             "petId": 3,
//             "category": "Rabbit",
//             "date_of_birth": "2022-04-20",
//             "price": 1500,
//             "image": "https://i.ibb.co.com/s3PXSwD/pet-3.jpg",
//             "gender": "Male",
//             "pet_details": "This male African Grey rabbit is a small, friendly companion born on April 20, 2022. He prefers a calm environment and enjoys gentle handling. Partially vaccinated, he's a great choice for rabbit lovers who want a peaceful, easygoing pet. Priced at $1500, he's perfect for a quiet home environment.",
//             "vaccinated_status": "Partially",
//             "pet_name": "Coco"
//         },
//         {
//             "petId": 4,
//             "breed": "Holland Lop",
//             "category": "Rabbit",
//             "date_of_birth": "2023-06-30",
//             "price": 200,
//             "image": "https://i.ibb.co.com/4g3Jrjf/pet-4.jpg",
//             "gender": "Female",
//             "pet_details": "This adorable female Holland Lop rabbit, born on June 30, 2023, is known for her calm and gentle nature. She thrives in quiet environments and enjoys being handled with care. Priced at $200, she is an ideal pet for those looking for a low-maintenance, friendly rabbit. Note that she is not vaccinated.",
//             "vaccinated_status": "Not",
//             "pet_name": "Nibbles"
//         },
//         {
//             "petId": 5,
//             "breed": "Beagle",
//             "category": "Dog",
//             "date_of_birth": null,
//             "price": 900,
//             "image": "https://i.ibb.co.com/BwnvDMY/pet-5.jpg",
//             "gender": "Female",
//             "pet_details": "This curious female Beagle was born on March 22, 2023, and loves to explore and play. She is great with kids and enjoys outdoor adventures. Fully vaccinated and priced at $900, she's perfect for an active family looking for a loyal, energetic companion.",
//             "vaccinated_status": "Fully",
//             "pet_name": "Bella"
//         },
//         {
//             "petId": 6,
//             "breed": "Bengal",
//             "category": "Cat",
//             "price": 950,
//             "image": "https://i.ibb.co.com/PFbWMGk/pet-6.jpg",
//             "gender": "Male",
//             "pet_details": "This playful male Bengal cat, born on November 10, 2022, is full of energy and loves to climb and engage with toys. Fully vaccinated and priced at $950, he's ideal for active households looking for a curious and adventurous feline friend.",
//             "vaccinated_status": "Fully",
//             "pet_name": "Leo"
//         },
//         {
//             "petId": 7,
//             "breed": "Bengal",
//             "category": "Cat",
//             "date_of_birth": "2022-11-10",
//             "price": 950,
//             "image": "https://i.ibb.co.com/QXbXctF/pet-7.jpg",
//             "gender": "Male",
//             "pet_details": "This male Bengal cat, born on November 10, 2022, is energetic and playful. He loves exploring, climbing, and playing with interactive toys. Fully vaccinated and priced at $950, he's perfect for anyone looking for an active, intelligent, and lively cat.",
//             "vaccinated_status": null,
//             "pet_name": "Max"
//         },
//         {
//             "petId": 8,
//             "breed": "Beagle",
//             "category": "Dog",
//             "date_of_birth": "2023-03-22",
//             "price": 1200,
//             "image": "https://i.ibb.co.com/MCDfNqN/pet-8.jpg",
//             "pet_details": "Born on March 22, 2023, this female Beagle is curious and loves outdoor adventures. Fully vaccinated, she enjoys playing with children and exploring new places. Priced at $1200, she's a perfect fit for families looking for a playful and affectionate dog.",
//             "vaccinated_status": "Fully",
//             "pet_name": "Luna"
//         },
//         {
//             "petId": 9,
//             "breed": "Beagle",
//             "category": "Dog",
//             "date_of_birth": "2023-03-22",
//             "price": null,
//             "image": "https://i.ibb.co.com/XyXBtb8/pet-9.jpg",
//             "gender": "Male",
//             "pet_details": "This male Beagle, born on March 22, 2023, is curious, playful, and great with children. Fully vaccinated and priced at $1900, he is perfect for families looking for an active, adventurous companion that loves to explore.",
//             "vaccinated_status": "Fully",
//             "pet_name": "Buddy"
//         },
//         {
//             "petId": 10,
//             "breed": "Labrador Retriever",
//             "category": "Dog",
//             "date_of_birth": "2023-05-15",
//             "price": 1100,
//             "image": "https://i.ibb.co.com/hg9XBJV/pet-10.jpg",
//             "gender": "Female",
//             "pet_details": "This cheerful female Labrador is a playful bundle of joy. Born on May 15, 2023, she loves water and outdoor activities. Fully vaccinated and priced at $1100, she's perfect for families who enjoy active lifestyles.",
//             "vaccinated_status": "Fully",
//             "pet_name": "Daisy"
//         },
//         {
//             "petId": 11,
//             "breed": "French Bulldog",
//             "category": "Dog",
//             "date_of_birth": "2023-07-20",
//             "price": 2500,
//             "image": "https://i.ibb.co.com/47Sxf3X/pet-11.jpg",
//             "gender": "Male",
//             "pet_details": "This adorable male French Bulldog, born on July 20, 2023, is known for his playful and affectionate nature. Fully vaccinated and priced at $2500, he makes a perfect companion for apartment living.",
//             "vaccinated_status": "Fully",
//             "pet_name": "Ollie"
//         },
//         {
//             "petId": 12,
//             "breed": "Poodle",
//             "category": "Dog",
//             "date_of_birth": "2023-08-10",
//             "price": 1500,
//             "image": "https://i.ibb.co.com/R9ZHvDD/pet-12.jpg",
//             "gender": "Female",
//             "pet_details": "This elegant female Poodle, born on August 10, 2023, is intelligent and eager to learn. Fully vaccinated and priced at $1500, she's perfect for families looking for a trainable and loving companion.",
//             "vaccinated_status": "Fully",
//             "pet_name": "Chloe"
//         },
//         {
//             "petId": 13,
//             "breed": "Netherland Dwarf",
//             "category": "Rabbit",
//             "date_of_birth": "2023-05-10",
//             "price": 180,
//             "image": "https://i.ibb.co.com/f4MRfWZ/pet-13.jpg",
//             "gender": "Male",
//             "pet_details": "This tiny male Netherland Dwarf rabbit, born on May 10, 2023, is perfect for small spaces. He enjoys gentle handling and loves to explore. Priced at $180, he's great for first-time rabbit owners.",
//             "vaccinated_status": "Not",
//             "pet_name": "Pip"
//         },
//         {
//             "petId": 14,
//             "breed": "Mini Rex",
//             "category": "Rabbit",
//             "date_of_birth": "2023-06-01",
//             "price": 220,
//             "image": "https://i.ibb.co.com/MPJmYwc/pet-14.jpg",
//             "gender": "Female",
//             "pet_details": "This sweet female Mini Rex rabbit, born on June 1, 2023, is known for her soft fur and friendly personality. Priced at $220, she's a great choice for families looking for a cuddly companion. Note that she is not vaccinated.",
//             "vaccinated_status": "Not",
//             "pet_name": "Fluffy"
//         },
//         {
//             "petId": 15,
//             "breed": "Holland Lop",
//             "category": "Rabbit",
//             "date_of_birth": "2023-07-15",
//             "price": 200,
//             "image": "https://i.ibb.co.com/RQ6smFK/pet-15.jpg",
//             "gender": "Male",
//             "pet_details": "This charming male Holland Lop rabbit, born on July 15, 2023, is playful and enjoys hopping around. Priced at $200, he makes a wonderful pet for children. He is not vaccinated.",
//             "vaccinated_status": "Not",
//             "pet_name": "Binky"
//         },
//         {
//             "petId": 16,
//             "breed": "English Angora",
//             "category": "Rabbit",
//             "date_of_birth": "2023-08-05",
//             "price": 300,
//             "image": "https://i.ibb.co.com/zZHPJNh/pet-16.jpg",
//             "gender": "Female",
//             "pet_details": "This fluffy female English Angora rabbit, born on August 5, 2023, is known for her long, luxurious fur. Priced at $300, she's perfect for families who enjoy grooming and cuddling. She is not vaccinated.",
//             "vaccinated_status": "Not",
//             "pet_name": "Snowball"
//         },
//         {
//             "petId": 17,
//             "breed": "Maine Coon",
//             "category": "Cat",
//             "date_of_birth": "2022-12-01",
//             "price": 1200,
//             "image": "https://i.ibb.co.com/85w4kSt/pet-17.jpg",
//             "gender": "Male",
//             "pet_details": "This majestic male Maine Coon, born on December 1, 2022, is known for his gentle demeanor and friendly personality. Fully vaccinated and priced at $1200, he's great with families and other pets.",
//             "vaccinated_status": "Fully",
//             "pet_name": "Thor"
//         }
//     ]
// }