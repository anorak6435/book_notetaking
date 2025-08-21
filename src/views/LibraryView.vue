<template>
  <div class="about">
    <h1>Library</h1>
    <div class="book-list">
      <router-link :to="`/read/${book.id}`" v-for="(book, index) in books" :key="index" class="book">
        <div >
          <h2>{{ book.title }}</h2>
          <img :src="book.cover" :alt="book.title" width="100" height="150" />
          <h5>Author: {{ book.author }}</h5>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: "HomeView",
  created() {
    this.catalog();
  },
  data() {
    return {
      books: [],
    };
  },
  methods: {
    async catalog() {
      await fetch("catalog.json")
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          this.books = data;
        });
    },
  },
};
</script>

<style scoped>

.about {
    justify-content: center;
}
.book-list {
  display: flex;
  justify-content: center;
  gap: 10px;
  width: 80%;
  margin: auto;
}
.book {
  flex: 1;
  background-color: #fffaf0;
}
.book:hover {
  background-color: #cac8c3;
  cursor: pointer;
}
a {
  text-decoration: none;
  color: black;
}
</style>