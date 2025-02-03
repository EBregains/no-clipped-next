export function FormatToARS(price: number): string {
  let formattedPrice: string = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(price);
  return formattedPrice;
}