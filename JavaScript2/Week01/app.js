"use strict";

{
  const bookTitles = [
    // Replace with your own book titles
    "harry_potter_chamber_secrets",
    "the_power_of_habits",
    "capital",
    "why_marx_was_right",
    "the_life_of_pie",
    "desert_flower",
    "madol_duwa",
    "the_first_teacher",
    "the_nordic_theory_of_everything",
    "a_village_by_the_sea",
  ];

  // Replace with your own code
  function makeList(array) {
    const ul = document.createElement("ul");
    document.body.appendChild(ul);
    for (let i = 0; i < array.length; i++) {
      //create elemants
      const list = document.createElement("li");
      const name = document.createElement("h2");
      const author = document.createElement("h4");
      const language = document.createElement("p");
      const description = document.createElement("p");
      const container = document.createElement("div");
      const container2 = document.createElement("div");

      //iterate through the array
      const book = books[array[i]];

      //create classes and id's
      list.setAttribute("id", `book_${i}`);
      container.setAttribute("class", "container");
      container2.setAttribute("class", "container2");

      name.textContent = book["title"];
      author.textContent = `by ${book["author"]}`;
      language.textContent = `Language: ${book["language"]}`;
      description.textContent = `DESCRIPTION: ${book["description"]}`;
      container.appendChild(name);
      container.appendChild(author);
      container2.appendChild(language);
      container2.appendChild(description);
      list.appendChild(container);
      list.appendChild(container2);
      ul.appendChild(list);
    }
  }

  const books = {
    harry_potter_chamber_secrets: {
      title: "Harry Potter and the Chamber of Secrets",
      language: "English",
      author: "J.K. Rowling",
      description:
        "In the second book of the Harry Potter series, Harry uncovers a dark secret lurking within the walls of Hogwarts School of Witchcraft and Wizardry.",
    },
    the_power_of_habits: {
      title: "The Power of Habits",
      language: "English",
      author: "Charles Duhigg",
      description:
        "This book explores the science behind habits, and how we can change them to improve our lives and achieve our goals.",
    },
    capital: {
      title: "Capital",
      language: "English",
      author: "Karl Marx",
      description:
        "This classic work of political and economic theory argues that capitalism inevitably leads to exploitation and inequality.",
    },
    why_marx_was_right: {
      title: "Why Marx Was Right",
      language: "English",
      author: "Terry Eagleton",
      description:
        "This book defends Karl Marx's ideas against common criticisms, arguing that his ideas are still relevant in today's world.",
    },
    the_life_of_pie: {
      title: "The Life of Pi",
      language: "English",
      author: "Yann Martel",
      description:
        "This novel follows the story of a young Indian boy named Pi, who is stranded on a lifeboat in the Pacific Ocean with a Bengal tiger.",
    },
    desert_flower: {
      title: "Desert Flower",
      language: "English",
      author: "Waris Dirie",
      description:
        "This autobiography tells the story of Waris Dirie, a Somali model and activist who campaigns against female genital mutilation.",
    },
    madol_duwa: {
      title: "Madol duwa",
      language: "Sinhala",
      author: "Martin Wickramasinghe",
      description:
        "This novel tells the story of a young boy named Upali growing up in a rural village in Sri Lanka.",
    },
    the_first_teacher: {
      title: "The First Teacher",
      language: "English",
      author: "Chingiz Aitmatov",
      description:
        "This novella follows the story of a young boy in a remote village in the mountains of Kyrgyzstan, and his relationship with his first teacher.",
    },
    the_nordic_theory_of_everything: {
      title: "The Nordic Theory of Everything",
      language: "English",
      author: "Anu Partanen",
      description:
        "This book explores the social and political systems of Nordic countries, and argues that they offer a model for a more just and equitable society.",
    },
    a_village_by_the_sea: {
      title: "A Village by the Sea",
      language: "English",
      author: "Anita Desai",
      description:
        "This children's book tells the story of a family living in a small fishing village in India.",
    },
  };

  const bookThumbnails = {
    harry_potter_chamber_secrets: {
      source: "./img/harry_potter_chamber_secrets.jpeg",
    },

    the_power_of_habits: {
      source: "./img/the_power_of_habits.jpeg",
    },

    capital: {
      source: "./img/capital.jpeg",
    },

    why_marx_was_right: {
      source: "./img/why_marx_was_right.jpeg",
    },

    the_life_of_pie: {
      source: "./img/the_life_of_pie.jpeg",
    },

    desert_flower: {
      source: "./img/desert_flower.jpeg",
    },

    madol_duwa: {
      source: "./img/madol_duwa.jpeg",
    },

    the_first_teacher: {
      source: "./img/the_first_teacher.jpeg",
    },

    the_nordic_theory_of_everything: {
      source: "./img/the_nordic_theory_of_everything.jpeg",
    },

    a_village_by_the_sea: {
      source: "./img/a_village_by_the_sea.jpeg",
    },
  };
  function imageAdding(array) {
    const ul = document.querySelector("ul");
    const keys = Object.keys(bookThumbnails);
    for (let i = 0; i < array.length; i++) {
      const book = books[array[i]];
      const li = document.getElementById(`book_${i}`);
      const img = document.createElement("img");
      img.src = bookThumbnails[keys[i]].source;
      img.setAttribute("alt", books[bookTitles[i]]["title"]);
      li.appendChild(img);
    }
  }
  makeList(bookTitles);
  imageAdding(bookTitles);
}
