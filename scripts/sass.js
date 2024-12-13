const path = require('path');
const sass = require('sass');
const fsExtra = require('fs-extra');

const sourcePath = path.join(__dirname, '../src/scss/theme');
const outPath = path.join(__dirname, '../dist/css');

const renderStyle = (fileName) => {
  const fileInputPath = path.join(sourcePath, `${fileName}.scss`);
  const fileOutputPath = path.join(outPath, `${fileName}.css`);

  const result = sass.compile(fileInputPath, {
    quietDeps: false
  });

  if (!fsExtra.existsSync(fileOutputPath)) {
    fsExtra.createFileSync(fileOutputPath);
  }

  fsExtra.writeFileSync(fileOutputPath, result.css);
};

renderStyle('core');
renderStyle('light');

const privatePath = path.join(__dirname, '../src/scss/private');

const copyAssets = (assetsPath, destinationPath) => {
  fsExtra.copySync(path.join(privatePath, assetsPath), path.join(outPath, destinationPath));
};

copyAssets('base/font/roboto', 'font/roboto');
