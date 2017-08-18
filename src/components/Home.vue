<template>
  <div>
    <p>{{questions.category}}</p>
    <h2>{{questionWithoutNumber}}</h2>
    <div @click="checkAnswer" v-html="options"></div>
    <br>
    <button @click="getQuestion()">"הבא"</button>

  </div>
</template>

<script>
import Question from './Question'
import Service from '.././services/index'

export default {
  name: 'Home',
  data() {
    return {
      questions: ''
    }
  },
  computed: {
    options: function () {
      return `<div>${this.questions.description}</div>`;
    }  ,
    questionWithoutNumber: function () {
       return this.questions.title.replace(/^[.\d\d\d[ ]+/, '');
    }
  },
  methods: {
    getQuestion() {
      Service.getRandomQuestion().then(data => {
        console.log(data)
        this.questions = data
      })
    },
    checkAnswer(e) {
      if (e.target && e.target.parentElement.tagName === 'LI') {

        if (e.target.id.includes('correctAnswer')) {
          e.target.className += ' goodAnswer'
          setTimeout(this.getQuestion, 250)
        }
        else {
          e.target.className += ' badAnswer'
          console.log('not good')
          setTimeout(this.getQuestion, 250)
        }
      }
    }
  },
  mounted() {
    this.getQuestion();
  }
}
</script>
<style>
.goodAnswer {
  background-color: green;
    -webkit-transition: background-color 0.5s ;
  -moz-transition: background-color 0.5s ;
  transition: background-color 0.5s ;
}
.text-highlight {
  background-color: green;
  -webkit-transition: background-color 0.5s;
  -moz-transition: background-color 0.5s;
  transition: background-color 0.5s;
}

.badAnswer {
  background-color: red;
  -webkit-transition: background-color 0.5s ;
  -moz-transition: background-color 0.5s ;
  transition: background-color 0.5s ;
}
</style>

