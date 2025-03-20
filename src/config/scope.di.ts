
import { container, injectable } from 'tsyringe'

export const scope = {
	container<T, R>() {
			return function (target: new (...args: R[]) => T) {
					injectable()(target);
					container.register(target, { useClass: target });
					return target;
			};
	},

	singleton<T, R>() {
			return function (target: new (...args: R[]) => T) {
					injectable()(target);
					container.registerSingleton(target, target);
					return target;
			};
	},

	resolve<T>(token: string | (new (...args: any[]) => T)): T {
			return container.resolve<T>(token);
	}
};