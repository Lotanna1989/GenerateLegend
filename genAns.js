// const btn = document.getElementById('btn').addEventListener('click',attemptJoke) had to be changed to li3 for single button change functionality

const btn = document.getElementById('btn')
btn.addEventListener('click', attemptJoke)
// const btn2 = document.getElementById('btn2').addEventListener('click', answerJoke)
const joke = document.getElementById('joke')
const legend = document.getElementById('legend')

let isLegendQuestion = 'false'

const jokes = [
    {
        joke: 'Who is the greatest footballer ever',
        legend: 'Pele of Brazil'
    },

    {
        joke: 'Who is the famous Western Premier of Nigeria',
        legend: 'Obafemi Awolowo'
    },

    {
        joke: 'Who is the founder of Microsoft',
        legend: 'Bill Gates'
    },

    {
        joke: 'The Google Fiber Equiano cable that navigates Africa is named after who',
        legend: 'Olaudah Equiano'
    },

    {
        joke: 'Who was the the first Nigerian president and also who was the then prime minister at 1960',
        legend: 'Nnamdi Azikiwe and Tafawa Balewa'
    },

    {
        joke: 'Algorithm is named after who',
        legend: 'El-Khwarismi'
    },

    {
        joke: 'Who is a popular supercomputer scientist from Africa',
        legend: 'Philip Emeagwali'
    },

    {
        joke: 'Who is the founder of Calendly',
        legend: 'Tope AWOTONA'
    },

    {
        joke: 'Who is the owner of TESLA',
        legend: 'Elon Musk'
    },

    {
        joke: 'Who were the richest men that ever lived',
        legend: 'kING SOLOMON and Mansa Musa'
    },

    {
        joke: 'Who is the founder of facebook, whatsappa and instagram',
        legend: 'Mark zuckerberg'
    },

    {
        joke: 'Who is the the most popular Nigerian footballer',
        legend: 'Austin Okocha'
    },

    {
        joke: 'who is the richest man in Africa',
        legend: 'Aliko Dangote'
    },

    {
        joke: 'Who is the famous queen of England',
        legend: 'Queen Elizabeth'
    },

    {
        joke: 'Who is the famous American president',
        legend: 'Abraham Lincoln'
    }

]

let randomNum = 0




function attemptJoke() {

    if(!isLegendQuestion){
    let randomNum = Math.floor(Math.random() * jokes.length)
    btn.textContent = 'LegendAnswer';
    
    
    legend.textContent = jokes[randomNum].legend
    joke.textContent = jokes[randomNum].joke
    legend.style.visibility = 'hidden'
    isLegendQuestion = true;
    
    } else {
         
            
           legend.style.visibility = 'visible'
           isLegendQuestion = false
           btn.textContent = 'Another Question'
          
        
         }

}

// function answerJoke() {
//     // console.log('wooo')
//    legend.style.visibility = 'visible'
  
// }