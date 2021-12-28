export default function addEvent(target, event, onEvent) {
  target.addEventListener(event, onEvent);
  return {
    target,
    event,
    onEvent,
    remove: () => {
      target.removeEventListener(event, onEvent);
    }
  };
}

export function removeEvent(target, event, onEvent) {
  target.removeEventListener(event, onEvent);
}
