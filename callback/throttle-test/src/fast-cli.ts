import { throttle } from "./throttle";

// Example function to be throttled
function logMessage(message:string) {
    console.log(`${new Date().toISOString()}: ${message}`);
  }
  
  // Create a throttled version of logMessage with a delay of 10s
  const throttledLogMessage = throttle(logMessage, 10000);
  
  // Simulate rapid calls to the throttled function
  console.log("Starting...");
  
  setInterval(() => {
    throttledLogMessage("Hello, World!");
  }, 1000); // This interval calls the function every sec, but it will only log once per 10seconds
  
  // // Simulate passing two arguments
  // function logTwoMessages(message1:string, message2:string) {
  //   console.log(`${new Date().toISOString()}: ${message1} ${message2}`);
  // }
  
  // // Create a throttled version of logTwoMessages with a delay of 1000ms
  // const throttledLogTwoMessages = throttle(logTwoMessages, 1000);
  
  // setInterval(() => {
  //   throttledLogTwoMessages("Hello,", "World!");
  // }, 200);