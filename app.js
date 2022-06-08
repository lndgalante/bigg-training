const sample = require('lodash.sample');

function getRandomBlock(previousRoutine, biggBlocks) {
  const randomBlock = sample(biggBlocks);
  return previousRoutine.includes(randomBlock) ? getRandomBlock(previousRoutine) : randomBlock;
}

function getTodayRoutine() {
  const blocks = [
    'fba',
    'hiit',
    'sport',
    'cardio',
    'midline',
    'strength',
    'full body',
    'bigginers',
    'lower body',
    'upper body',
    'bodybuilding',
  ];

  const TOTAL_BLOCKS = 4;
  const todayRoutine = [];

  for (let index = 0; index < TOTAL_BLOCKS; index++) {
    const blockSample = getRandomBlock(todayRoutine, blocks);
    todayRoutine.push(blockSample);
  }

  return todayRoutine;
}

const routine = getTodayRoutine();
console.log(`Your routine for today is:\n - ${routine.join('\n - ')}`);
