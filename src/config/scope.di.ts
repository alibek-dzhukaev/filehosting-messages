import { container, injectable } from 'tsyringe'

export const scope = {
	container<T, R>() {
		return function (target: new (...args: R[]) => T) {
			injectable()(target)
			container.register(target.name, { useClass: target })
			return target
		}
	},
	singleton<T, R>() {
		return function (target: new (...args: R[]) => T) {
			injectable()(target)
			container.registerSingleton(target.name, target)
			return target
		}
	},
	resolve<T, R>(token: string | (new (...args: R[]) => T)): T {
		return container.resolve<T>(token)
	}
}