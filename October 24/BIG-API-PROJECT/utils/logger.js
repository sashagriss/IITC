import fs from "fs";

function logRequest(req, res, next) {
  const log = `Request received at ${new Date().toISOString()}\n`;
  fs.appendFile("logs.txt", log, (err) => {
    if (err) throw err;
    console.log("Log Saved");
  });
  next();
}

export const logger = {
  logRequest,
};
