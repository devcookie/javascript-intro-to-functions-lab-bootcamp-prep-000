function shout(string) {
  return string.toUpperCase()
}

function whisper(string) {
  return string.toLowerCase()
}

function logShout(string) {
  var shout = string;
  if(shout.toUpperCase() === string) {
    console.log(string)
  } else {
    shout = string.toUpperCase()
    console.log(shout)
  }
}

function logWhisper(string) {
  var whisper = string;
  if(whisper.toUpperCase() === string) {
    console.log(string)
  } else {
    whisper = string.toUpperCase()
    console.log(shout)
  }
}