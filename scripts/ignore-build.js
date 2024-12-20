const { execSync } = require('child_process');

// Get the current branch name
const currentBranch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();

// Define branches that should always build
const buildBranches = ['main', 'develop'];

if (buildBranches.includes(currentBranch)) {
  // Exit with 1 to indicate the build should proceed
  process.exit(1);
} else {
  // Check if there are any changes in the current branch
  try {
    const diffOutput = execSync('git diff --name-only origin/develop...HEAD').toString().trim();
    
    // If there are changes, exit with 1 to build, otherwise exit with 0 to ignore
    process.exit(diffOutput ? 1 : 0);
  } catch (error) {
    console.error('Error checking for changes:', error);
    // If there's an error, proceed with the build to be safe
    process.exit(1);
  }
}

