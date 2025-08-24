export function validateComponent(code: string): { valid: boolean; error?: string } {
  if (/import\s+.*from\s+['"].+['"]/m.test(code)) {
    return { valid: false, error: 'External imports are not allowed' };
  }
  if (code.length > 200_000) {
    return { valid: false, error: 'Component code must be <= 200KB' };
  }
  return { valid: true };
}
