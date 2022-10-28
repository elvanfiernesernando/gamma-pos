// format currency
export const currencyFormat = (number) => {
  return (number || "")
    .toString()
    .replace(/^0|\./g, "")
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
}

// export const currencyFormat = (number) => {
//   return new Intl.NumberFormat('id-ID',
//     { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }
//   ).format(number);
// }