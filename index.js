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
  if(whisper.toLowerCase() === string) {
    console.log(string)
  } else {
    whisper = string.toLowerCase()
    console.log(whisper)
  }
}