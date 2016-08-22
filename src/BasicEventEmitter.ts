import IEventEmitter from "./EventSystem/IEventEmitter";
import {injectable} from "inversify";
import {IEvent} from "./EventSystem/IEvent";

@injectable()
export class BasicEventEmitter implements IEventEmitter {

    emitTo(clientId: string, event: IEvent): void {
    }
}