


function colorDeconstructor(secondary){

  if (secondary === 'orange') {
      return 'Orange is made by combining red and yellow!'
    } else if (secondary === 'purple') {
       return 'Purple is made by combining red and blue!'
    } else if (secondary === 'green') {
        return 'Green is made by combining blue and yellow!'
    } 
    else {
        return "Sorry, that's not a secondary color!"
    }
}







module.exports = colorDeconstructor;