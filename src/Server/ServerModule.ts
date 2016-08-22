import {interfaces} from "inversify";
import IModule from "../Interfaces/IModule";
import IServiceLocator from "../Interfaces/IServiceLocator";
import IEventEmitter from "../EventSystem/IEventEmitter";
import {BasicEventEmitter} from "../BasicEventEmitter";

export class ServerModule implements IModule {
    modules(kernel: interfaces.Kernel): void {
        kernel.bind<interfaces.Kernel>("Kernel").toConstantValue(kernel);
        kernel.bind<IEventEmitter>(BasicEventEmitter).to(BasicEventEmitter).inSingletonScope();
    };

    register(serviceLocator?: IServiceLocator, overrides?: any): void {
    }
}