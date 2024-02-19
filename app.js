/**
 * Write a for-loop that loops through 1 to 15.
 * If the number is odd, print "Your Last Name"
 * if the  number is even print "Your Frist Name"
 * if the number is divisible by 5, print "Frist/Last Name"
 */

for (let i = 1; i <= 15; ++i){
    if(i % 5 === 0){
        console.log(`${i} Amin Ibrahim`)
    }
    
    else if(i % 2 === 0){
        console.log(`${i} Amin`)
    }

    else{
        console.log(`${i} Ibrahim`)
    }
}
// 