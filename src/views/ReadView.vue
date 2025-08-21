<template>
  <header>Click a passage to quote it at the end of your notes!</header>

  <div class="container">
    <!-- Book Content -->
    <div class="book-section">
      <div class="book-content">
        <h2>{{title}}, {{author}}</h2>
        <p @click="quote($event)" v-for="(line, key) in lines" :key="key" class="snippet">
          {{line}}
        </p>
      </div>
    </div>

    <!-- Notes Section -->
    <div class="notes-section">
      <h2>📝 Your Notes</h2>
      <textarea placeholder="Write your thoughts, ideas, or questions here..." v-model="notes"></textarea>
    </div>
  </div>
</template>

<script>

export default {
  name: "ReadView",
  async created() {
    await this.catalog();
    this.get_book(this.$route.params.id);
  },
  data() {
    return {
    title: 'untitled',
    author: 'unknown',
    contents: 'empty',
    notes: '',
    books: [],
  };
  },
  methods: {
    quote(ev) {
      console.log(ev);
      this.notes += "“" + ev.target.innerText + "”";
      // let selection = ev.target.value.substring(ev.target.selectionStart, ev.target.selectionEnd);
      // console.log(selection);
    },
    async get_book(id) {
        let book = this.books.filter((book) => {return book.id == id})[0];
        fetch(book.path).then(response => response.text()).then(data => {
            this.contents = data;
        })
        this.title = book.title;
        this.author = book.author;
    },
    async catalog() {
        await fetch("catalog.json").then(res => res.json()).then(data => {
            console.log(data);
            this.books = data;
        })
    }
  },
  computed: {
    lines() {
      return this.contents.replaceAll("\n", "").split(/(.*?[.!?](?![’”]))/).filter((e) => {return e});
    },
    
  },
  
};
</script>


<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Georgia, serif;
  background-color: #f0f2f5;
  color: #333;
}

header {
  background-color: #3e4e5e;
  color: white;
  padding: 1rem 2rem;
  text-align: center;
  font-size: 1.5rem;
}

.snippet:hover {
  background: rgba(0,0,0, 0.3);
  border-radius: 10px;
}

.container {
  display: flex;
  flex-direction: row;
  height: calc(100vh - 70px);
}

.book-section,
.notes-section {
  flex: 1;
  padding: 2rem;
  overflow-y: auto;
}

.book-section {
  background-color: #fffaf0;
  border-right: 1px solid #ddd;
}

.notes-section {
  background-color: #ffffff;
}

.book-content {
  max-width: 600px;
  margin: auto;
  line-height: 1.7;
}

.notes-section h2 {
  margin-top: 0;
}

textarea {
  padding: 1rem;
  width: 100%;
  height: 80%;
  font-family: "Segoe UI", sans-serif;
  border: 1px solid #ccc;
  border-radius: 6px;
  background-color: #f9f9f9;
}

@media (max-width: 768px) {
  .container {
    flex-direction: column;
  }

  .book-section,
  .notes-section {
    height: auto;
    padding: 1.5rem;
  }

  textarea {
    height: 300px;
  }
}
</style>