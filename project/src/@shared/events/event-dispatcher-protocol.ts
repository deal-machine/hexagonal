import { EventInterface, EventHandlerInterface } from "./index.ts";

export interface EventDispatcherInterface {
  get getEventHandlers(): { [eventName: string]: EventHandlerInterface[] };
  notify(event: EventInterface): void;
  register(eventName: string, eventHandler: EventHandlerInterface): void;
  unregister(eventName: string, eventHandler: EventHandlerInterface): void;
  unregisterAll(): void;
}
