const { reports } = require('./day02')

array = [
  [7,6,4,2,1],
  [1,2,7,8,9],
  [9,7,6,2,1],
  [1,3,2,4,5],
  [8,6,4,4,1],
  [1,3,6,7,9],
]

function increase_or_decrease(report) {
  let increasing = true;
  let decreasing = true;

  for (let i = 0; i < report.length - 1; i++) {
      // Check for increasing pattern
      if (report[i] >= report[i + 1]) {
          increasing = false;
      }
      // Check for decreasing pattern
      if (report[i] <= report[i + 1]) {
          decreasing = false;
      }
  }

  return increasing || decreasing;
}

function value_difference(report) {
  for (let i = 0; i < report.length - 1; i++) {
      const diff = Math.abs(report[i] - report[i + 1]);
      if (diff < 1 || diff > 3) {
          return false;
      }
  }
  return true;
}

function isSafeReport(report) {
  return increase_or_decrease(report) && value_difference(report);
}

function checkWithDampener(report) {
  // First check if it's already safe without removing any levels
  if (isSafeReport(report)) {
      return true;
  }

  // Try removing each level one at a time
  for (let i = 0; i < report.length; i++) {
      const modifiedReport = [...report.slice(0, i), ...report.slice(i + 1)];
      if (isSafeReport(modifiedReport)) {
          return true;
      }
  }
  
  return false;
}

let safeCount = 0
reports.forEach((report, index) => {
  const safe = checkWithDampener(report)
  if (safe) {
    safeCount++
  }
  // console.log(`Report ${index + 1}: ${JSON.stringify(report)} - ${safe ? 'SAFE' : 'UNSAFE'}`);
});

console.log(`\nTotal safe reports with Problem Dampener: ${safeCount}`);



