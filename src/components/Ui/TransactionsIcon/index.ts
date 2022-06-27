export { default as UiTransactionsIcon } from "./TransactionsIcon.vue";

export enum TransactionsIconVariant {
    Moneybox = "Moneybox",
    Card = "Card",
}

export interface TransactionsIconProps {
    variant?: TransactionsIconVariant
}

export const transactionsIcons = [
  TransactionsIconVariant.Moneybox,
  TransactionsIconVariant.Card,
];
