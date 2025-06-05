(function (global) {
  function parseSubfields(input) {
    const subfields = [];
    input = input.trim();
    if (input.startsWith('$$')) {
      input = input.substring(2);
    }
    const parts = input.split('$$');
    parts.forEach(part => {
      part = part.trim();
      if (part.length > 1) {
        const code = part.charAt(0);
        const value = part.substring(1).trim();
        subfields.push({ code, value });
      }
    });
    return subfields;
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = parseSubfields;
  } else {
    global.parseSubfields = parseSubfields;
  }
})(this);
