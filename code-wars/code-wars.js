// filter out non numbers

function filter_list(l) {
  return l.filter((e) => Number.isInteger(e));
}

// best answere
function filter_list(l) {
  return l.filter(Number.isInteger);
}

function filter_list(l) {
  return l.filter(function (item) {
    return typeof item === "number";
  });
}

function filter_list(l) {
  // Return a new array with the strings filtered out
  var filteredList = [];
  for (var i = 0; i < l.length; i++) {
    if (l[i].constructor.name !== "String") {
      filteredList.push(l[i]);
    }
  }
  return filteredList;
}

const code = ".... . -.--   .--- ..- -.. .";
morsCode(code);
function morsCode(code) {
  let message = "";
  let letters = "";
  let chars = "";
  let i = 0;
  while (i < code.length) {
    if (code[i] === " " && code[i + 1] === " " && code[i + 2] === " ") {
      letters += "h";
      message += letters + " ";
      letters = "";
      chars = "";
      i++;
      i++;
    } else if (code[i] === " ") {
      //letters += MORSE_CODE[chars]
      letters += "h";
      chars = "";
    } else {
      chars += code[i];
    }
    i++;
  }
  letters += "h";
  message += letters;
  console.log(message);
  return message;
}

// PERSISTENCE
persistence = (n, c) => {
  n > 9
    ? persistence(
        n
          .toString()
          .split("")
          .reduce((x, y) => x * y),
        c ? c + 1 : 1
      )
    : c
    ? c
    : 0;
};

const persistence = (num) => {
  return `${num}`.length > 1
    ? 1 + persistence(`${num}`.split("").reduce((a, b) => a * +b))
    : 0;
};

function persistence(num) {
  var times = 0;

  num = num.toString();

  while (num.length > 1) {
    times++;
    num = num
      .split("")
      .map(Number)
      .reduce((a, b) => a * b)
      .toString();
  }

  return times;
}

// my solution
function persistence(num) {
  let count = 0;
  inside(num);
  function inside(num) {
    let result = `${num}`;
    let multiply = 1;

    if (result.length === 1) {
      count = 0;
    } else if (result.length > 1) {
      for (let i = 0; i < result.length; i++) {
        multiply = multiply * result[i];
      }
      count++;
      result = `${multiply}`;
    }
    if (result.length > 1) {
      inside(Number(result));
    }

    console.log(count);
  }
}

persistence(999);
persistence(9);
persistence(12);
persistence(12);

// Array Difference

arrayDiff([1, 2], [1]); // [2]
arrayDiff([1, 2, 2, 2, 3], [2]); //[1,3]
arrayDiff([], [4, 5]); //[]
arrayDiff([3, 4], [3]); //[4]
arrayDiff([1, 8, 2], []); //[1,8,2]
arrayDiff([1, 2, 3], [1, 2]); //[3]

// my solution
function arrayDiff(a, b) {
  let result = [];
  for (let i = 0; i < a.length; i++) {
    let exist = false;
    for (let el of b) {
      if (el === a[i]) {
        exist = true;
      }
    }
    !exist && result.push(a[i]);
  }
  console.log(result);
  return result;
}

function array_diff(a, b) {
  return a.filter((e) => !b.includes(e));
}

function array_diff(a, b) {
  return a.filter(function (x) {
    return b.indexOf(x) == -1;
  });
}

function array_diff(a, b) {
  return a.filter((v) => b.indexOf(v));
}

function array_diff(a, b) {
  b = new Set(b);
  return a.filter((v) => !b.has(v));
}

function array_diff(a, b) {
  let set = new Set(b);
  return a.map((x) => (!set.has(x) ? x : null)).filter((x) => x);
}

function array_diff(a, b) {
  return a.filter(function (x) {
    var bool = true;
    b.forEach(function (y) {
      if (x == y) bool = false;
    });
    return bool;
  });
}

function array_diff(a, b) {
  return a.filter(function (val) {
    return b[0] != val;
  });
}

function arrayDiff(a, b) {
  b.forEach(
    (value_in_b) => (a = a.filter((vaulue_in_a) => vaulue_in_a !== value_in_b))
  );
  return a;
}
