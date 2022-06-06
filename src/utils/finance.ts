// Format money via internal Intl module
export const formatMoney = (
  value: number,
  currency: string,
  options?: Partial<Omit<Intl.NumberFormatOptions, "currency">>,
) => (
  Intl.NumberFormat(undefined, {
    currency,
    maximumFractionDigits: 2,
    minimumFractionDigits: 0,
    style: "currency",
    currencyDisplay: "symbol",
    ...options,
  }).format(value)
);
