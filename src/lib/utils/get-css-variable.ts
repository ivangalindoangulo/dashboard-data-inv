// src/lib/utils/get-css-variable.ts

/**
 * Lee el valor actual de una variable CSS de Shadcn (ej: '--primary').
 * @param variableName - El nombre de la variable de Shadcn (ej: 'primary', 'foreground').
 * @returns El valor CSS del color como string.
 */
export function getCssVariableValue(variableName: string): string {
  if (typeof window === 'undefined' || !document.documentElement) {
    // Retorna un valor por defecto para evitar errores en SSR/entorno no-browser
    return '#000000'; 
  }
  
  const rootStyle = getComputedStyle(document.documentElement);
  // Shadcn define las variables con doble guion, ej: --primary
  const value = rootStyle.getPropertyValue(`--${variableName}`).trim();
  
  // Devuelve el valor (que suele ser un string HSL como "210 40% 98%")
  return value || '#000000';
}