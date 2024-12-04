function setTimeoutPromisified(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// Simple understandinfg how to use promisified function ignore above code

function callback() {
  console.log("Logged after 5 seconds");
}

setTimeoutPromisified(5000).then(callback); //Syntactically cleaner than callbacks
