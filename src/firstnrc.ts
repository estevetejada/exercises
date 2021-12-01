export function firstnrc(p: string): string {
    for (let i: number = 0; i < p.length; i++) {
        if (p.indexOf(p.charAt(i)) === p.lastIndexOf(p.charAt(i))) {
            return p.charAt(i);
        }
    }

    return '';
}
