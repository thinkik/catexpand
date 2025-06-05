function parseSubfields(input) {
    const subfields = [];
    input = (input || '').trim();
    if (input.startsWith('$$')) {
        input = input.substring(2);
    }
    const parts = input.split('$$');
    parts.forEach(part => {
        part = part.trim();
        if (part.length > 0) {
            const code = part.charAt(0);
            const value = part.substring(1).trim();
            if (value.length === 0) {
                // Ignore empty values
                return;
            }
            subfields.push({ code, value });
        }
    });
    return subfields;
}

if (typeof window !== 'undefined') {
    window.parseSubfields = parseSubfields;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = parseSubfields;
}
