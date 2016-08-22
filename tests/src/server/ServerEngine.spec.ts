import {expect} from 'chai';
import {MockEventEmitter} from "../../fixtures/MockEventEmitter";
import {ServerEngine} from "../../../src/Server/ServerEngine";
import {SystemStartedEvent} from "../../../src/Server/Events/SystemStartedEvent";

var instance:ServerEngine;
var mockEventEmitter = new MockEventEmitter();

describe("ServerEngine", () => {

    beforeEach(() => {
        instance = new ServerEngine(mockEventEmitter);
        mockEventEmitter.reset();
    });

    it('It must have correct instance', () => {
        expect(instance).to.be.instanceOf(ServerEngine);
    });

    it('It must emit event on run', () => {
        instance.run();
        expect(mockEventEmitter.eventsEmitted.length).to.eq(1);
        expect(mockEventEmitter.eventsEmitted[0]).to.be.instanceOf(SystemStartedEvent);
    });
});