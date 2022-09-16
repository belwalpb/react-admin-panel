const pino = require("pino")({ browser: { asObject: true } });

class Logger {
  public info(message: string, data?: any) {
    pino.info(message, data);
  }

  public debug(message: string, data?: any) {
    pino.info(message, data);
  }

  public error(message: string, data?: any) {
    pino.error(message, data);
  }
}

const logger = new Logger();
export default logger;
