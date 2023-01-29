import {BuildOptions} from "./types/config";
import {Configuration as DevServerCofiguration} from "webpack-dev-server";

export function buildDevServer({port}:BuildOptions): DevServerCofiguration {
    return {
        port: port,
        open: true,
        historyApiFallback: true,
    }
}