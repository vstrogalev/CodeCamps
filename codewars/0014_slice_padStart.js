// Century From Year

/*
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
Task
Given a year, return the century it is in.
Examples
1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
2742 --> 28
*/

function century(year) {
  const strYear = year.toString().padStart(4, '0');
  
  if (strYear.slice(-2) == '00') return Number(strYear.slice(0,-2))

  return Number(strYear.slice(0,-2))+1
}

//---------BETTER
const century = year => Math.ceil(year/100)
