import {IEvent} from "./IEvent";

interface IEventEmitter {
    emitTo(clientId: string, event: IEvent): void;
}

export default IEventEmitter;