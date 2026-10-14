// 1. Parsons

// Goal output: `Grade: B` when `score` is `85`.


// A   else if (score >= 80) 
// B   const score = 85;
// C   if (score >= 90) {
// D   grade = "B";
// E   let grade = "";
// F   grade = "A";
// G   } else {
// H   grade = "C";
// I   }
// J   console.log(`Grade: ${grade}`);
// X   if (score >= 80) 
// Y   if (score = 90) 

const score = 85; //B, C, A, D, J

if (score >= 90) {           
    grade = "A"; 
    else if (score >= 80)
        grade = "B";
}
console.log(`Grade: ${grade}`);

