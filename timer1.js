const arg = process.argv.slice(2);

const timeOut = function(timer) {
  timer = Number(timer);
  if (!isNaN(timer) && timer >= 0) {
    setTimeout(() => {
      process.stdout.write("\x07");
    }, timer * 1000);
  }
};

for (let i of arg) {
  timeOut(i);
}

timeOut(1);