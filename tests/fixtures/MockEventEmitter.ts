import IEventEmitter from "../../src/EventSystem/IEventEmitter";
import {IEvent} from "../../src/EventSystem/IEvent";

export class MockEventEmitter implements IEventEmitter {

    private eventsStack: IEvent[] = [];

    emitTo(clientId: string, event: IEvent): void {
        this.eventsStack.push(event);
    }

    reset() {
        this.eventsStack = [];
    }

    get eventsEmitted() {
        return this.eventsStack;
    }
}