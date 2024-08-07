type FuncType = (...args: any[]) => void;

// export function throttle(func: FuncType, delay: number) {
//   let throttling = false;
//   return function(this: any, ...args: any[]) {
//     if (!throttling) {
//       func.apply(this, args);
//       throttling = true;
//       setTimeout(() => {
//         throttling = false;
//       }, delay);
//     }
//   };
// }

// export function throttle(func: Function, wait: number) {
//   let timeout: NodeJS.Timeout | null = null;

//   return function(...args: any[]) {
//       if (!timeout) {
//           func(...args);
//           timeout = setTimeout(() => {
//               timeout = null;
//           }, wait);
//       }
//   };
// }

export function throttle(func: FuncType, delay: number) {
  let last = 0;
  return (...args: any[]) => {
    const now = Date.now();
    if (now - last < delay) return
    last = now;
    return func(...args);
  };
}
//Test
// export function throttle(func: Function, limit: number) {
//   let inThrottle: boolean;
  
//   return function(this:any ,...args: any[]) {
//     if (!inThrottle) {
//       func.apply(this, args);
//       inThrottle = true;
//       setTimeout(() => inThrottle = false, limit);
//     }
//   };
// }
// export const throttle = (callback: Function, delay:number) => {
//   let timeout:any
//   return (...args:any[]) => {
//     if (timeout !== undefined) {
//       return
//     }
  
//     timeout = setTimeout(() => {
//       timeout = undefined
//     }, delay)
  
//     return callback(...args)
//   }
//   }
// export function throttle(func: Function, delay: number) {
//   let throttling = false;
//   return function(this: any, ...args: any[]) {
//     if (!throttling) {
//       func.apply(this, args);
//       throttling = true;
//       setTimeout(() => {
//         throttling = false;
//       }, delay);
//     }
//   };
// }
// export function throttle(func: Function, limit: number) {
//   let inThrottle: boolean;
  
//   return function(this: any, ...args: any[]) {
//     if (!inThrottle) {
//       func.apply(this, args);
//       inThrottle = true;
//       setTimeout(() => inThrottle = false, limit);
//     }
//   };
// }


// NOT WORKS GOOD, WITH ERRORS (bad examples!)
// export function throttle(cb:Function, delay = 1000) {
//   let shouldWait = false
//   let waitingArgs:any
//   const timeoutFunc = () => {
//     if (waitingArgs == null) {
//       shouldWait = false
//     } else {
//       cb(...waitingArgs)
//       waitingArgs = null
//       setTimeout(timeoutFunc, delay)
//     }
//   }

//   return (...args:any) => {
//     if (shouldWait) {
//       waitingArgs = args
//       return
//     }

//     cb(...args)
//     shouldWait = true

//     setTimeout(timeoutFunc, delay)
//   }
// }
// export function throttle(func: Function, delay: number) {
//   let lastExecuted = 0;
//   return function(this: any, ...args: any[]) {
//     const now = Date.now();
//     if (now - lastExecuted > delay) {
//       func.apply(this, args);
//       lastExecuted = now;
//     }
//   };
// }





