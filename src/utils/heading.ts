/**
 * Utilities to normalize camera alpha (radians)
 * into conventional compass heading degrees where:
 *  - 0° = North, 90° = East, 180° = South, 270° = West
 */

export function radToDeg(radians: number): number {
  return (radians * 180) / Math.PI;
}

/**
 * Convert camera alpha (radians) to heading degrees [0..360).
 * alphaDeg: 0=+X, 90=+Z, 180=-X, 270=-Z
 * headingDeg desired: 0=N, 90=E, 180=S, 270=W
 * Mapping used: heading = (90 - alphaDeg + northOffsetDeg) mod 360
 */
export function alphaToHeadingDeg(alphaRadians: number, northOffsetDeg: number = 0): number {
  const alphaDeg = radToDeg(alphaRadians);
  const raw = 90 - alphaDeg + northOffsetDeg;
  const normalized = ((raw % 360) + 360) % 360;
  return normalized;
}

