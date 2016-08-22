import {ServerModule} from "../../../src/Server/ServerModule";
import {expect} from 'chai';

var instance:ServerModule;

describe("ServerModule", () => {

    beforeEach(() => {
        instance = new ServerModule();
    });

    it('It must have correct instance', () => {
        expect(instance).to.be.instanceOf(ServerModule);
    })
});