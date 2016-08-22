import {injectable, inject} from "inversify";
import {BasicEventEmitter} from "../BasicEventEmitter";
import IEventEmitter from "../EventSystem/IEventEmitter";
import {Types} from "../EventSystem/EventClinetType";
import {SystemStartedEvent} from "./Events/SystemStartedEvent";

@injectable()
export class ServerEngine {

    constructor(@inject(BasicEventEmitter) private eventEmitter: IEventEmitter) {
    }

    run() {
        this.eventEmitter.emitTo(Types.MainBus, new SystemStartedEvent());
    }
}