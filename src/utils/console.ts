const getBaseLog = (type: "log" | "warn" | "error") => (category: string, ...items: any[]) => {
  console[type](`[${category}]`, ...items);
};

export const log = getBaseLog("log");

export const logWarn = getBaseLog("warn");

export const logError = getBaseLog("error");
