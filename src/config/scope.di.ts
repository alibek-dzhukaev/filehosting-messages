import { container, injectable } from 'tsyringe'

type Constructor<T, Args extends any[] = any[]> = new (...args: Args) => T;

export const scope = {
	container<T, Args extends unknown[]>() {
		return function (target: Constructor<T, Args>) {
			injectable()(target);
			container.register(target.name, { useClass: target });
			return target;
		};
	},

	singleton<T, Args extends unknown[]>() {
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