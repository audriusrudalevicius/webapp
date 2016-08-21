import {interfaces} from "inversify";
import IModule from "../interfaces/IModule";
import IServiceLocator from "../interfaces/IServiceLocator";

export class ServerEngineModule implements IModule {
    modules(kernel: interfaces.Kernel): void {
        kernel.bind<interfaces.Kernel>("Kernel").toConstantValue(kernel);
    };

    register(serviceLocator?: IServiceLocator, overrides?: any): void {
    }
}