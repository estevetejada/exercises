export function validParentheses(p: string): boolean {
    let depth = 0;
    for (let i = 0; i < p.length; i++) {
        if (p.charAt(i) === '(') {
            depth++;
        } else if (p.charAt(i) === ')') {
            depth--;
        }
        if (depth < 0) {
            return false;
        }
    }

    return depth === 0;
}
