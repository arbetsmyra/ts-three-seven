function nullishCoalescing(): void {
  const nullComparsion = null ?? 'Null fallback';
  const undefinedComparsion = undefined ?? 'Undefined fallback';
  const emptyStringComparsion = '' ?? 'Empty string fallback';
  const falseComparsion = false ?? 'False fallback';

  console.info('Output: "Null fallback"', nullComparsion);
  console.info('Output: "Undefined fallback"', undefinedComparsion);
  console.info('Output: ""', emptyStringComparsion);
  console.info('Output: "false"', falseComparsion);
}

nullishCoalescing();
