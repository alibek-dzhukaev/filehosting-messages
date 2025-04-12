export interface RateLimiterOptions {
	bucketSize: number;
	tokensPerInterval: number;
	interval: number;
}
