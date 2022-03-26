function narcissistic(value) {
  return (
    String(value)
      .split("")
      .map((n) => Math.pow(Number(n), String(value).length))
      .reduce((a, b) => a + b) === value
  );
}
