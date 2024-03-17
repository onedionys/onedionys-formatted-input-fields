const assert = require('assert');
const { formatInput } = require('../src/formattedInputFields');

describe('Formatted Input Fields', () => {
  it('should format input correctly', () => {
    // Example test case
    const formatted = formatInput('1234567890', 'XXX-XX-XXXX');
    assert.strictEqual(formatted, '123-45-6789');
  });
});
