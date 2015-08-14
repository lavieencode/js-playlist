# js-playlist
A Treehouse project, working with JavaScript constructors and prototypes.

In this project, which wraps up Treehouse's Object-Oriented Programming badge, I was tasked with adding functionality to provided files to create a simple (non-functioning, musically speaking) web app using JavaScript.

*Functions*:

**SONG**<br>
**Play**: Sets the song as playing using ```isPlaying```<br>
**Stop**: Sets the song as not playing (```isPlaying = false```)

**PLAYLIST**<br>
**Add**: Pushes the passed-through ```song``` to the ```songs``` array<br>
**Play**: Plays current song based on array index<br>
**Stop**: Holds place in array, but calls above ```stop``` song prototype function<br>
**Next**: Sets the next song in the ```songs``` array, calling the above ```play``` prototype function

*Provided files*: style.css, index.html (static)

As always, please feel free to create a pull request if you have suggestions on cleaner or more efficient code! :)
