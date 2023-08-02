export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = true; // No need to use "let" again as the variable is already defined outside the block
    task2 = false; // Same here, no need to use "let" again
  }

  return [task, task2];
}

