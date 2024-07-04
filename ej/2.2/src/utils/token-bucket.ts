// tokenBucket.ts

export class TokenBucket {
    tokens: number;
    capacity: number;
  
    constructor(capacity: number, refillRate: number) {
      this.tokens = capacity;
      this.capacity = capacity;
      setInterval(() => this.add(refillRate), 1000);
    }
  
    private add(refillRate: number) {
      const refilledTokensCount = this.tokens + refillRate;
      this.tokens = refilledTokensCount > this.capacity ? this.capacity : refilledTokensCount;
    }
  
    remove() {
      if (this.tokens > 0) {
        this.tokens--;
        return 200;
      }
      return 429;
    }
  }
  