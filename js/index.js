function stringLength(string) {
  if(string.length < 1 || string.length > 10) {
    return Error;
  } else 
  return string.length;
  }
 

// console.log(stringLength('Victoriatumwebaze'));

module.exports = {stringLength}
