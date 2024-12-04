// function promisifiedSetTimeout() {
//   const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("resolved");
//     }, 3000);
//   });
//   return p;
// }

// promisifiedSetTimeout().then((res) => {
//   console.log(res);
// });

function timeoutPromise(delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Done");
    }, delay);
  });
}

timeoutPromise(1000).then((result) => {
  console.log(result);
});
/*
**Understanding Promises Under the Hood**

**A Promise's Lifecycle**

A Promise in JavaScript is essentially an object representing the eventual completion (or failure) of an asynchronous operation and its resulting value. It goes through three states:

1. **Pending:** The initial state where the operation is still in progress.
2. **Fulfilled:** The operation completed successfully, and the Promise has a resolved value.
3. **Rejected:** The operation failed, and the Promise has a reason for failure.

**Creating a Promise**

When you create a Promise, you provide an executor function to the `Promise` constructor. This function takes two arguments: `resolve` and `reject`.

```javascript
const myPromise = new Promise((resolve, reject) => {
  // Asynchronous operation here
  setTimeout(() => {
    const result = "Success!";
    resolve(result); // Resolve the Promise with the result
  }, 1000);
});
```

**How the Executor Works**

1. **Asynchronous Operation:** The executor function typically contains asynchronous operations like network requests, file I/O, or timers.
2. **Resolving:** If the operation completes successfully, the `resolve` function is called with the result value. This transitions the Promise to the "fulfilled" state.
3. **Rejecting:** If an error occurs, the `reject` function is called with the error reason. This transitions the Promise to the "rejected" state.

**Consuming a Promise**

You can consume a Promise using the `.then()` and `.catch()` methods.

```javascript
myPromise.then((result) => {
  console.log("Promise fulfilled:", result);
}).catch((error) => {
  console.error("Promise rejected:", error);
});
```

**Behind the Scenes**

When you call `.then()`, the Promise object internally stores the provided callback function. If the Promise is already fulfilled or rejected, the callback is executed immediately. Otherwise, the callback is queued to be executed once the Promise's state changes.

The Promise object maintains a queue of callbacks for both fulfillment and rejection. When the Promise is resolved or rejected, the appropriate callbacks are executed in the order they were added to the queue.

**Key Points to Remember:**

- Promises provide a cleaner way to handle asynchronous operations than callbacks.
- They help avoid callback hell and make code more readable.
- The `Promise` object manages the state of the asynchronous operation and its result.
- The executor function determines the outcome of the Promise.
- The `.then()` and `.catch()` methods are used to handle the Promise's resolution or rejection.

By understanding these core concepts, you can effectively use Promises to write more robust and maintainable asynchronous JavaScript code.
*/
