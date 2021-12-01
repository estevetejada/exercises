export function findRepeatedCharacter(str: string): string | null {
    const letters: Record<string, number> = {};
    for (let i = 0; i < str.length; i++) {
        if (isNaN(letters[str[i]])) {
            letters[str[i]] = 0;
        }
        letters[str[i]]++;
    }
    for (let i = 0; i < str.length; i++) {
        if (letters[str[i]] > 1) {
            return str[i];
        }
    }
    return null;
}
