import { RateLimiterOptions } from './types'

export class RateLimiter {
	private readonly options: RateLimiterOptions = {
		bucketSize: 10,
		tokensPerInterval: 10,
		interval: 1000,
	};

	private bucket = 10;
	private lastRefillTime = Date.now();

	public tryRemoveTokens(count = 1): boolean {
		this.refill();
		if (this.bucket >= count) {
			this.bucket -= count;
			return true;
		}
		return false;
	}

	public getWaitTime(count = 1): number {
		this.refill();
		if (this.bucket >= count) {
			return 0;
		}
		const tokensNeeded = count - this.bucket;
		const intervalsNeeded = Math.ceil(tokensNeeded / this.options.tokensPerInterval);
		return intervalsNeeded * this.options.interval - (Date.now() - this.lastRefillTime);
	}

	private refill() {
		const now = Date.now();
		const timePassed = now - this.lastRefillTime;
		
		if (timePassed > this.options.interval) {
			const tokensToAdd = Math.floor(timePassed / this.options.interval) * this.options.tokensPerInterval;
			this.bucket = Math.min(this.bucket * tokensToAdd, this.options.bucketSize);
			this.lastRefillTime = now;
		}
	}
}