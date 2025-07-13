const books = [
  {
    title: "Diary of a Wimpy Kid- Dog Days",
    author: "Jeff Kinney",
    image: "images/dogdays.jpg",
    description: "A novel set in the Roaring Twenties exploring wealth, love, and tragedy."
  },
  {
    title: "Diary of a Wimpy Kid- Hard Luck",
    author: "Jeff Kinney",
    image: "E:/Library/BookImg/Hardluck.jpg",
    description: "A powerful novel about racial injustice in the Deep South."
  },
  {
   title: "Diary of a Wimpy Kid- The Meltdown",
    author: "Jeff Kinney",
    image: "E:/Library/BookImg/meltdown.jpg",
    description: "A dystopian tale of government surveillance and totalitarianism."
  },
  {
    title: "The Serpent's Revenge",
    author: "Sudha Murty",
    image: "E:/Library/BookImg/serpentrevenge.jpg",
    description: "A novel set in the Roaring Twenties exploring wealth, love, and tragedy."
  },
  {
    title: "How I Taught my Grandmother to read and other stories",
    author: "Sudha Murty",
    image: "E:/Library/BookImg/taught.jpg",
    description: "A powerful novel about racial injustice in the Deep South."
  },
  {
   title: "The Upside Down King",
    author: "Sudha Murty",
    image: "E:/Library/BookImg/upsidedown.jpg",
    description: "A dystopian tale of government surveillance and totalitarianism."
  },
  {
    title: "How the sea became salty",
    author: "Sudha Murty",
    image: "E:/Library/BookImg/salty.jpg",
    description: "A novel set in the Roaring Twenties exploring wealth, love, and tragedy."
  },
  {
    title: "Gopi Diaries - Coming Home",
    author: "Sudha Murty",
    image: "E:/Library/BookImg/cominghome.jpg",
    description: "A powerful novel about racial injustice in the Deep South."
  },
  {
   title: "The Sage with Two Horns",
    author: "Sudha Murty",
    image: "E:/Library/BookImg/2horns.jpg",
    description: "A dystopian tale of government surveillance and totalitarianism."
  },
  {
    title: "The Man from the Egg",
    author: "Sudha Murty",
    image: "E:/Library/BookImg/manfromegg.jpg",
    description: "A novel set in the Roaring Twenties exploring wealth, love, and tragedy."
  },
  {
    title: "The Old man and his god",
    author: "Sudha Murty",
    image: "E:/Library/BookImg/oldman.jpg",
    description: "A powerful novel about racial injustice in the Deep South."
  },
  {
   title: "The Mother I never knew",
    author: "Sudha Murty",
    image: "E:/Library/BookImg/mother.jpg",
    description: "A dystopian tale of government surveillance and totalitarianism."
  },
  {
    title: "Here, There and Everywhere",
    author: "Sudha Murty",
    image: "E:/Library/BookImg/herethere.jpg",
    description: "A novel set in the Roaring Twenties exploring wealth, love, and tragedy."
  },
  {
    title: "Wise and Otherwise",
    author: "Sudha Murty",
    image: "E:/Library/BookImg/wiseotherwise.jpg",
    description: "A powerful novel about racial injustice in the Deep South."
  }
];

const bookList = document.getElementById("book-list");

books.forEach(book => {
  const card = document.createElement("div");
  card.className = "book-card";
  card.innerHTML = `
    <img src="${book.image}" alt="${book.title}" />
    <div class="book-info">
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p>${book.description}</p>
    </div>
  `;
  bookList.appendChild(card);
});
