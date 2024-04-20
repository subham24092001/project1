// Function to calculate the mean of a property in the data
function calculateMean(data, property) {
  const sum = data.reduce((acc, item) => acc + parseFloat(item[property]), 0);
  return sum / data.length;
}

// Function to calculate the median of a property in the data
function calculateMedian(data, property) {
  const sortedValues = data.map((item) => parseFloat(item[property])).sort((a, b) => a - b);
  const mid = Math.floor(sortedValues.length / 2);
  return sortedValues.length % 2 === 0 ? (sortedValues[mid - 1] + sortedValues[mid]) / 2 : sortedValues[mid];
}

// Function to calculate the mode of a property in the data
function calculateMode(data, property) {
  const counts = {};
  data.forEach((item) => {
    const value = parseFloat(item[property]);
    counts[value] = (counts[value] || 0) + 1;
  });
  let mode = null;
  let maxCount = 0;
  Object.keys(counts).forEach((key) => {
    if (counts[key] > maxCount) {
      mode = key;
      maxCount = counts[key];
    }
  });
  return parseFloat(mode);
}

// Function to calculate mean, median, and mode for a property in the data
function calculateStats(data, property) {
  const mean = calculateMean(data, property);
  const median = calculateMedian(data, property);
  const mode = calculateMode(data, property);
  return { mean, median, mode };
}

// Function to calculate flavanoids statistics using calculateStats function
function calculateFlavanoidsStats(data) {
  return calculateStats(data, "Flavanoids");
}

// Function to calculate gamma statistics using calculateStats function
function calculateGammaStats(data) {
  const dataWithGamma = data.map((item) => {
    const gamma = (parseFloat(item.Ash) * parseFloat(item.Hue)) / parseFloat(item.Magnesium);
    return { ...item, Gamma: gamma };
  });

  const gammaValues = dataWithGamma.map((item) => item.Gamma);
  return calculateStats(dataWithGamma, "Gamma");
}

// Export the calculateGammaStats and calculateFlavanoidsStats functions
export { calculateGammaStats, calculateFlavanoidsStats };
