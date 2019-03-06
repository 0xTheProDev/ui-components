import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';
import path from 'path';
import process from 'process';

const target = path.resolve(__dirname, '../docs');
const targetPath = `file://${target}`;
let counter = 0;

const getMatchOptions = ({ context: { kind, story }, url }) => {
  counter++;
  // console.log(`${counter} ${story}`);
  process.stdout.write(`${counter} ${story}\n`);
  // if (story.includes('[animation]')) {
  //   return {
  //     failureThreshold: 0.2,
  //     failureThresholdType: 'percent',
  //   };
  // }
  // return {
  //   failureThreshold: 0.05,
  //   failureThresholdType: 'percent',
  // };
};

// our components sometimes setState on mount, thus we ought to allow a short delay
// before the screenshot is captured for consistency's sake
const beforeScreenshot = () =>
  new Promise(resolve => setTimeout(resolve, 1000));

const customizePage = page => {
  return page.setViewport({ width: 800, height: 600 });
};
// DontTest is added to the names of storybook stories
// that render animations/things we dont want to include in imageshots.
initStoryshots({
  storyNameRegex: /^((?!\[skip\]).)*$/,
  suite: 'Image storyshots',
  test: imageSnapshot({ storybookUrl: targetPath, getMatchOptions }),
  beforeScreenshot,
  customizePage,
});
