


function colorDeconstructor(secondary){

    let dOrange = secondary === 'orange';
    let dPurple = secondary === 'purple';
    let dGreen = secondary === 'green';

        if (dOrange) {
            return 'Orange is made by combining red and yellow!'
        } else if (dPurple) {
            return 'Purple is made by combining red and blue!'
        } else if (dGreen) {
            return 'Green is made by combining blue and yellow!'
        } 
        else{return "Sorry, that's not a secondary color!"
    }
}







module.exports = colorDeconstructor;