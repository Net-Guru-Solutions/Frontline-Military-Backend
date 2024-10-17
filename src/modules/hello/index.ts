import helloWorldLoader from "./loaders/hello-world";
import { Module } from "@medusajs/framework/utils";
import HelloModuleService from "./service";

export const HELLO_MODULE = "helloModuleService"

export default Module(HELLO_MODULE, {
    service: HelloModuleService,
    loaders: [helloWorldLoader],
})