import { scope } from '@config/scope.di';

import {RouteHandler} from './types';

@scope.singleton()
export class RouterService {
    private routes: Record<string, VoidFunction> = {};
    private currentPath: string = window.location.pathname;
    private handlers: RouteHandler[] = [];

    constructor() {
        window.addEventListener('popstate', this.handlePopState.bind(this));
    }

    /**
     * Adds a route and its corresponding handler.
     */
    public addRoute(path: string, handler: VoidFunction): void {
        if (this.routes[path]) {
            console.warn(`Route "${path}" is already defined. Overwriting it.`);
        }
        this.routes[path] = handler;
    }

    /**
     * Navigates to the specified path.
     */
    public navigate(path: string): void {
        if (this.currentPath === path) {
            return;
        }

        window.history.pushState({}, '', path);
        this.updateCurrentPath(path);
    }

    public goBack() {
        window.history.back();
    }

    public get canGoBack() {
        return window.history.length;
    }

    /**
     * Subscribes to route changes.
     */
    public subscribe(handler: RouteHandler): void {
        this.handlers.push(handler);
    }

    /**
     * Unsubscribes from route changes.
     */
    public unsubscribe(handler: RouteHandler): void {
        this.handlers = this.handlers.filter((h) => h !== handler);
    }

    /**
     * Returns the current path.
     */
    public getCurrentPath(): string {
        return this.currentPath;
    }

    /**
     * Executes the handler for the current route.
     */
    public executeCurrentRoute(): void {
        const handler = this.routes[this.currentPath];

        if (handler) {
            handler();
        } else {
            console.warn(`No route defined for path "${this.currentPath}"`);
        }
    }

    /**
     * Handles the popstate event (back/forward navigation).
     */
    private handlePopState(): void {
        this.updateCurrentPath(window.location.pathname);
    }

    /**
     * Updates the current path and notifies subscribers.
     */
    private updateCurrentPath(path: string): void {
        this.currentPath = path;
        this.notifyHandlers(path);
        this.executeCurrentRoute();
    }

    /**
     * Notifies all subscribers of a route change.
     */
    private notifyHandlers(path: string): void {
        this.handlers.forEach((handler) => handler(path));
    }
}