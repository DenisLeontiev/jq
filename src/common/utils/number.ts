export const roundNumber = (value: number, decimals = 2) => (
  Math.round((value + Number.EPSILON) * 10 ** decimals) / (10 ** decimals)
);

export const minMaxNumber = (value: number, min = 0, max = 100) => (
  Math.min(Math.max(min, value), max)
);

export const kkkNumber = (value: number, digits = 2): string => {
  const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
  const item = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "k" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "B" },
    { value: 1e12, symbol: "T" },
    { value: 1e15, symbol: "P" },
    { value: 1e18, symbol: "E" },
  ].slice().reverse().find((i) => value >= i.value);
  return item ? (value / item.value).toFixed(digits).replace(rx, "$1") + item.symbol : "0";
};

export const formatMoney = (value: number, currency: string, locale?: string) => (
  Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    currencyDisplay: "symbol",
    minimumFractionDigits: 0,
  }).format(value)
);
