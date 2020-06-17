
// let color = getInput(0)
// let color2 = getInput(1)

// let primaryColors = [red, blue, yellow]
// let comboO1 = color === 'red' && color2 === 'yellow';
// let comboO2 = color ==='yellow' && color2 === 'red';
// let comboP = color ==='red' && color2 === 'blue' || color === 'blue' && color2 === 'red';
// let comboG = color === 'blue' && color2 === 'yellow' || color === 'yellow' && color2 === 'blue'

//  function colorCombinator(color, color2){
// if (color === 'red' && color2 === 'yellow'){
//   return "When you combine red and yellow, you get orange!"
// }
// else if (color ==='yellow' && color2 === 'red'){
//   return "When you combine yellow and red, you get orange!"
// }
// else if(color ==='red' && color2 === 'blue'){
//   return "When you combine red and blue, you get purple!"
// }
// else if( color === 'blue' && color2 === 'red'){
//   return "When you combine blue and red, you get purple!"
// }
// else if(color === 'blue' && color2 === 'yellow'){
//   return "When you combine blue and yellow, you get green!"
// } 
// else if(color === 'yellow' && color2 === 'blue'){
//   return "When you combine yellow and blue, you get green!"
// }
// // else if(color === ){

// }

// }
 
// save the possible color positions



function colorCombinator(color, color2){

    let iRed = color === 'red' || color2 === 'red';
    let iBlue = color === 'blue' || color2 === 'blue';
    let iYellow = color === 'yellow' || color2 === 'yellow'
    
    if (iRed && iYellow) {
        return 'When you combine ' + color + ' and ' + color2 + ', you get orange!'
    } else if ( iRed && iBlue) {
        return 'When you combine ' + color + ' and ' + color2 + ', you get purple!'
    } else if ( iYellow && iBlue) {
        return 'When you combine ' + color + ' and ' + color2 + ', you get green!'
    } else{
return 'Sorry, one of those colors is not a primary color!'
}
}

  
  
  //  
  
  //  }
  
  module.exports = colorCombinator;