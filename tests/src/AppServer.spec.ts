import {AppServer} from "../../src/AppServer";
import {expect} from 'chai';

var instance:AppServer;

describe("AppServer", () => {

    beforeEach(() => {
        instance = new AppServer();
    });

    it('It must have correct instance', () => {
        expect(instance).to.be.instanceOf(AppServer);
    })
});