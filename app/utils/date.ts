export function now() {
  return new Date()
}

export function fromSToMillis(seconds: number) {
  return seconds * 1000
}

export function fromMillisToS(millis: number) {
  return Math.floor(millis / 1000)
}
