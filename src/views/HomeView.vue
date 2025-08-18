<template>
  <header>Click a passage to quote it at the end of your notes!</header>

  <div class="container">
    <!-- Book Content -->
    <div class="book-section">
      <div class="book-content">
        <h2>Republic, Plato</h2>
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
  name: "HomeView",
  data() {
    return {
    contents: `BOOK II. Thrasymachus is pacified, but the intrepid Glaucon insists on
continuing the argument. He is not satisfied with the indirect manner
in which, at the end of the last book, Socrates had disposed of the
question ‘Whether the just or the unjust is the happier.’ He begins by
dividing goods into three classes:—first, goods desirable in
themselves; secondly, goods desirable in themselves and for their
results; thirdly, goods desirable for their results only. He then asks
Socrates in which of the three classes he would place justice. In the
second class, replies Socrates, among goods desirable for themselves
and also for their results. ‘Then the world in general are of another
mind, for they say that justice belongs to the troublesome class of
goods which are desirable for their results only. Socrates answers
that this is the doctrine of Thrasymachus which he rejects. Glaucon
thinks that Thrasymachus was too ready to listen to the voice of the
charmer, and proposes to consider the nature of justice and injustice
in themselves and apart from the results and rewards of them which the
world is always dinning in his ears. He will first of all speak of the
nature and origin of justice; secondly, of the manner in which men
view justice as a necessity and not a good; and thirdly, he will prove
the reasonableness of this view.`,
    notes: ``,
  };
  },
  methods: {
    quote(ev) {
      console.log(ev);
      this.notes += "“" + ev.target.innerText + "”";
      // let selection = ev.target.value.substring(ev.target.selectionStart, ev.target.selectionEnd);
      // console.log(selection);
    }
  },
  computed: {
    lines() {
      return this.contents.split(".");
    }
  }
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