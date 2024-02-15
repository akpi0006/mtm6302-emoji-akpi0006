/**
 * Add a section with id and class
 * Use the section class in CSS for adding flex or grid layout
 * Create an array of at least 12 emoji's of your choice
 * Loop over the array to add each emoji and it's code to the grid using section id, see the example below.
**/

const $container = document.getElementById('container')
const container = []
const emojis = [128150, 129392, 128536, 10024, 129419, 127799, 128142, 127872, 128149, 9810, 128139, 128133, 128181]



for (let i = 0; i <=  12; i++) {
    container.push(`
    <p class="emojis"style="text-align: center;">
  <span style="font-size: 5rem;">&#${emojis[i]};</span><br>
  <code>${emojis[i]}</code>
</p>
    
    `)
}

$container.innerHTML += container.join('')
