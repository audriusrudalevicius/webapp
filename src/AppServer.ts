import "reflect-metadata";
import "bluebird";
import {Kernel} from "inversify";
import IModule from "./Interfaces/IModule";
import {ServerEngine} from "./Server/ServerEngine";
import {ServerModule} from "./Server/ServerModule";

export class AppServer {
    private kernel = new Kernel();
    private modules: IModule[] = [];

    constructor() {
        this.register(new ServerModule());
    }

    register(module: IModule) {
        this.modules.push(module);
        module.modules(this.kernel);
    }

    run(overrides?: any) {
        let server = this.kernel.get<ServerEngine>(ServerEngine);
        this.modules.forEach((module: IModule) => module.register(this.kernel, overrides));
        server.run();
    }
}