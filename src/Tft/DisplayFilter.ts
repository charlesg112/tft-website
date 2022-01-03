export default function filterDisplayedName(name: string) : string {
    const index = name.indexOf('_');
    if (index === -1) return name;
    const sub = name.substring(index + 1);

    let output = '';

    for (let i = 0; i < sub.length; ++i) {
        if (isUpperCase(sub.charAt(i))) {
            output += ' ';
        }
        output += sub.charAt(i);
    }
    return output;
}

function isUpperCase(c: string) {
    return c.charAt(0) === c.charAt(0).toUpperCase();
}
