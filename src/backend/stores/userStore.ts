interface UserData {
  userUuid?: string;
  resolve?: (value: unknown) => void;
}

const users = new Map<string, UserData>()

export function userStore() {
  return {
    addUser: (clientId: string, data: UserData) => users.set(clientId, data),
    getUser: (clientId: string) => users.get(clientId),
    getUsers: () => users,
    removeUser: (clientId: string) => users.delete(clientId),
    hasUser: (clientId: string) => users.has(clientId),
  }
}
