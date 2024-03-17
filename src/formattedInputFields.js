// Function to format input based on provided mask
function formatInput(input, mask) {
    let index = 0;
    let formattedInput = '';
    // Iterate over the mask and replace 'X' with corresponding characters from input
    for (let i = 0; i < mask.length; i++) {
      if (mask[i] === 'X') {
        formattedInput += input[index];
        index++;
      } else {
        formattedInput += mask[i];
      }
    }
    return formattedInput;
  }
  
  module.exports = { formatInput };
  