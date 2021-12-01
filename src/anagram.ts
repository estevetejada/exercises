export function anagramCheck(words: string[]): string[][] {
    const anagrams: { [key: string]: string[] } = {};
    for (const word of words) {
        const sortedWord = word.split('').sort().join('');
        anagrams[sortedWord] ??= [];
        anagrams[sortedWord].push(word);
    }

    const result: string[][] = [];

    for (const anagram in anagrams) {
        if (anagrams[anagram] !== undefined) {
            result.push(anagrams[anagram]);
        }
    }

    return result;
}
