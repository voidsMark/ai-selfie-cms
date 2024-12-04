interface ClientData {
  userUuid?: string;
  resolve?: (value: unknown) => void;
}

const clients = new Map<string, ClientData>()

export function useClients() {
  return {
    addClient: (clientId: string, data: ClientData) => clients.set(clientId, data),
    getClient: (clientId: string) => clients.get(clientId),
    removeClient: (clientId: string) => clients.delete(clientId),
    hasClient: (clientId: string) => clients.has(clientId),
  }
}

// wassap fellas.

// Are you still lubricator or already funny round
