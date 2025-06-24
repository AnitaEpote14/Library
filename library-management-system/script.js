// Generate book cards dynamically for each category using JavaScript

const sections = [
  {
    title: "Textbooks",
    books: [
      { title: "A walk in the night", img: "textbooks/literature.jpg" },
      { title: "Principle of Economics", img: "textbooks/economics.jpg" },
      { title: "Introduction to computer science ", img: "textbooks/cs.jpg" },
      { title: "Mathematics ", img: "textbooks/maths.jpg" },
      { title: "Python ", img: "textbooks/python.jpg" },
    ],
  },
  {
    title: "Trending Books",
    books: [
      { title: "The Da Vinci Code", img: "trending books/da-vinci.jpg" },
      { title: "Gone Girl", img: "trending books/gone-girl.jpg" },
      { title: "Atomic Habits", img: "trending books/atomic-habits.jpg" }
    ],
  },
  {
    title: "Spiritual Books",
    books: [
      { title: "Encountering the Old Testament", img: "spiritual/old-testament.jpg" },
      { title: "The Purpose Driven Life", img: "spiritual/purpose-driven.jpg" }
    ],
  }
];

const catalogRoot = document.body;

sections.forEach(section => {
  const container = document.createElement("div");
  container.className = "catalog-section";

  const heading = document.createElement("h2");
  heading.textContent = section.title;
  container.appendChild(heading);

  const row = document.createElement("div");
  row.className = "book-row";

  section.books.forEach(book => {
    const card = document.createElement("div");
    card.className = "book-card";

    card.innerHTML = `
      <img src="${book.img}" alt="${book.title}">
      <p>${book.title}</p>
      <button>Borrow</button>
    `;

    row.appendChild(card);
  });

  container.appendChild(row);
  catalogRoot.appendChild(container);
});
