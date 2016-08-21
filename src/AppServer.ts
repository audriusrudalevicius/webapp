import "reflect-metadata";
import "bluebird";
import {Kernel} from "inversify";
import IModule from "./interfaces/IModule";

export class AppServer {
    private kernel = new Kernel();
    private modules: IModule[] = [];

    register(module: IModule) {
        this.modules.push(module);
    }

    run(overrides?: any) {
        this.modules.forEach((module: IModule) => module.register(this.kernel, overrides));
    }
}