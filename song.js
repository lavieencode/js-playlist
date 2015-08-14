function Song( title, artist, duration ) {
  this.title = title;
  this.artist = artist;
  this.duration = duration;
  this.isPlaying = false;
}

Song.prototype.play = function() {
  this.isPlaying = true;
};

Song.prototype.stop = function() {
  this.isPlaying = false;
};

//Generates HTML code for index.html
Song.prototype.toHTML = function() {
  var htmlString = '<li';
  
  //Checks if song is currently playing
  if (this.isPlaying) {
    htmlString += ' class="current"';
  }
  
  htmlString += '>';
  htmlString += this.title;
  htmlString += ' - ';
  htmlString += this.artist;
  htmlString += '<span class="duration">';
  htmlString += this.duration;
  htmlString += '</span></li>';
  
  return htmlString;
};