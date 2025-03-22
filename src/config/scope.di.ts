import { container, injectable, inject } from 'tsyringe'

type Constructor<T, R extends never[] = never[]> = new (...args: R) => T;

export const scope = {
	container<T, Args extends never[]>() {
		return function (target: Constructor<T, Args>) {
			injectable()(target);
			container.register(target.name, { useClass: target });
			return target;
		};
	},
	singleton<T, Args extends never[]>() {
		return function (target: Constructor<T, Args>) {
			injectable()(target);
			container.registerSingleton(target.name, target);
			return target;
		};
	},

	resolve<T>(token: string | Constructor<T>): T {
		return container.resolve<T>(typeof token === 'string' ? token : token.name);
	},

	inject<T>(token: string | symbol | Constructor<T>) {
		return function (
			target: object,
			propertyKey: string | symbol | undefined,
			parameterIndex: number
		) {
			const resolvedToken = typeof token === 'function' ? token.name : token;
			inject(resolvedToken)(target, propertyKey as string | symbol, parameterIndex);
		};
	}
};