function setOffset(value, maxValue) {
  if (value < 0) {
    return 0;
  } else if (value >= maxValue) {
    return maxValue - 1;
  }
  return value;
}

export default setOffset;
