import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Fusionne intelligemment des classes Tailwind (résout les conflits,
 * ex: "px-2" + "px-4" -> "px-4"). Utilisé par tous les composants UI.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
