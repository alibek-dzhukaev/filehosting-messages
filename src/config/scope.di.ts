import { container, injectable } from 'tsyringe'

/* eslint-disable  @typescript-eslint/no-explicit-any */
type Constructor<T, R extends any[] = any[]> = new (...args: R) => T;

export const scope = {
	/* eslint-disable  @typescript-eslint/no-explicit-any */
	container<T, Args extends any[]>() {
		return function (target: Constructor<T, Args>) {
			injectable()(target);
			container.register(target.name, { useClass: target });
			return target;
		};
	},
	/* eslint-disable  @typescript-eslint/no-explicit-any */
	singleton<T, Args extends any[]>() {
		return function (target: Constructor<T, Args>) {
			injectable()(target);
			container.registerSingleton(target.name, target);
			return target;
		};
	},

	resolve<T>(token: string | Constructor<T>): T {
		return container.resolve<T>(typeof token === 'string' ? token : token.name);
	},
};