import { scope } from '@config/scope.di';

export const enum StorageType {
  LOCAL = 'local',
  SESSION = 'session',
}

@scope.container()
export class StorageService {
  private readonly storageMap: Record<StorageType, Storage> = {
    local: localStorage,
    session: sessionStorage,
  };

  setItem<T>(key: string, value: T, storageType = StorageType.LOCAL): void {
    const storage = this.getStorage(storageType);

    storage.setItem(key, JSON.stringify(value));
  }

  getItem<T>(key: string, storageType: StorageType.LOCAL): T | null {
    const storage = this.getStorage(storageType);
    const item = storage.getItem(key);

    return item ? (JSON.parse(item) as T) : null;
  }

  removeItem(key: string, storageType: StorageType.LOCAL): void {
    const storage = this.getStorage(storageType);

    storage.removeItem(key);
  }

  clear(storageType: StorageType = StorageType.LOCAL): void {
    const storage = this.getStorage(storageType);

    storage.clear();
  }

  private getStorage(storageType: StorageType): Storage {
    const storage = this.storageMap[storageType];

    if (!storage) {
      throw new Error(`Invalid storage type: ${storageType}`);
    }

    return storage;
  }
}
