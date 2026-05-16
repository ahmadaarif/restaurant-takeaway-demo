export function generateOrderNumber(): string {
  const date = new Date();
  const dateStr = `${date.getFullYear()}${String(date.getMonth() + 1).padStart(2, "0")}${String(date.getDate()).padStart(2, "0")}`;
  const rand = Math.floor(Math.random() * 9000) + 1000;
  return `KK-${dateStr}-${rand}`;
}

export function estimatedTime(mode: "delivery" | "collection"): string {
  const now = new Date();
  const minutes = mode === "delivery" ? 45 : 25;
  const eta = new Date(now.getTime() + minutes * 60_000);
  return eta.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
}

// UK postcode regex (simplified)
export const UK_POSTCODE_REGEX =
  /^([A-Z]{1,2}\d[A-Z\d]?)\s*(\d[A-Z]{2})$/i;

// UK phone regex (mobile or landline)
export const UK_PHONE_REGEX = /^(\+44\s?|0)(7\d{3}|\d{2,4})\s?\d{3}\s?\d{3,4}$/;
