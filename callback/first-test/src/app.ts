export function debounce<DebounceFunction extends (...args: any[])=>void>(func:DebounceFunction, wait: number): (...args: Parameters<DebounceFunction>)=>void{
    let timeout: ReturnType<typeof setTimeout>;
    return function(this:unknown, ...args: Parameters<DebounceFunction>){
        // let context = this; 
        // let args = arguments;
        
        clearTimeout(timeout);
        timeout = setTimeout(() =>{
            func.apply(this, args);
        
        }, wait);
    };
}