async function waitFor2seconds() {
    return new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  module.exports = { waitFor2seconds };