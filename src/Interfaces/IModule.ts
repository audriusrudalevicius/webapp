import {interfaces} from "inversify";
import IServiceLocator from "./IServiceLocator";

interface IModule {
    modules?(kernel:interfaces.Kernel): void;
    register(serviceLocator?:IServiceLocator, overrides?:any):void;
}


export default IModule;