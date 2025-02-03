"use server";

export async function PlaceOrder(formData: FormData) {
  "use server";

  const price = formData.get("price");
  const shipment = formData.get("shipment")
  const size = formData.get("size")

  console.log(`Order placed! Price: ${price} | Shipment: ${shipment} | size: ${size}`)


}