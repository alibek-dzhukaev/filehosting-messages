import { scope } from '@config/scope.di'

import {RequestOptions} from './types'
import { RateLimiter } from '@services/rate-limiter/rate-limiter.service'

@scope.singleton()
export class ApiService {
    private readonly baseUrl = 'http://localhost/api/';

    public constructor(
        private readonly rateLimiter: RateLimiter
    ) {}

    private async request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
        if (!this.rateLimiter.tryRemoveTokens()) {
            const waitTime = this.rateLimiter.getWaitTime();
            throw new Error(`Too many requests. Try in ${waitTime} mc`)
        }
        const url = `${this.baseUrl}${endpoint}`;
        const headers = {
            'Content-Type': 'application/json',
            ...options.headers,
        };

        const response = await fetch(url, {
            method: options.method || 'GET',
            headers,
            body: options.body ? JSON.stringify(options.body) : null,
            credentials: 'include'
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        return await response.json() as Promise<T>;
    }

    public async get<T>(endpoint: string, headers?: Record<string, string>): Promise<T> {
        return this.request<T>(endpoint, { method: 'GET', headers });
    }

    public async post<T>(endpoint: string, body = {}, headers?: Record<string, string>): Promise<T> {
        return this.request<T>(endpoint, { method: 'POST', headers, body });
    }

    public async patch<T>(endpoint: string, body: unknown, headers?: Record<string, string>): Promise<T> {
        return this.request<T>(endpoint, { method: 'PATCH', headers, body });
    }

    public async delete<T>(endpoint: string, headers?: Record<string, string>): Promise<T> {
        return this.request<T>(endpoint, { method: 'DELETE', headers });
    }
}