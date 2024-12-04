const kiosks = new Set<string>()

export function kioskStore() {
  return {
    addKiosk: (clientId: string) => kiosks.add(clientId),
    removeKiosk: (clientId: string) => kiosks.delete(clientId),
    hasKiosk: (clientId: string) => kiosks.has(clientId),
  }
}
