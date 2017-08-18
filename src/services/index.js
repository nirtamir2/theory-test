import axios from 'axios'

function getAllQuestions() {

  return (axios.get('http://localhost:3000/rss').then(data => data.data.channel.item));
}

function getRandomQuestion() {
  return getAllQuestions().then(allQuestions => {
    let random = Math.round(Math.random() * allQuestions.length);
    let aa = allQuestions[random]
    return aa;
    // Promise.resolve(aa)
  })
}

export default {getAllQuestions, getRandomQuestion};
