export type Mods = Record<string, boolean | string>
export function classNames(cls: string, mods: Mods = {}, additions: string[] = []): string {
    return [
        cls,
        ...additions.filter(Boolean),
        ...Object.entries(mods)
            // eslint-disable-next-line no-unused-vars
            .filter(([_, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ');
}
