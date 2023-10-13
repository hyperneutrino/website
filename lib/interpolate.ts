export default function (input: number, inRange: number[], outRange: number[]) {
    if (inRange.length !== outRange.length) throw new Error("In range and out range for interpolation must be same length.");
    if (inRange.length < 2) throw new Error("In range and out range for interpolation must have length at least 2.");
    for (let i = 0; i < inRange.length - 1; i++) if (inRange[i] > inRange[i + 1]) throw new Error("In range for interpolation must be non-decreasing.");

    if (input < inRange[0]) return outRange[0];
    if (input > inRange.at(-1)!) return outRange.at(-1)!;

    for (let i = 0; i < inRange.length - 1; i++)
        if (i === inRange.length - 2 || input <= inRange[i + 1])
            return ((input - inRange[i]) / (inRange[i + 1] - inRange[i])) * (outRange[i + 1] - outRange[i]) + outRange[i];
}
