const gridDungeon3 = [
  [
    99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99,
    99, 99, 99, 99, 99, 99, 99, 99, 99,
  ],
  [
    99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99,
    99, 99, 99, 99, 99, 99, 99, 99, 99,
  ],
  [
    99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99,
    99, 99, 99, 99, 99, 99, 99, 99, 99,
  ],
  [
    99, 99, 99, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
    10, 10, 10, 99, 99, 99, 99, 99, 99,
  ],
  [
    99, 99, 99, 10, 99, 99, 99, 99, 99, 99, 99, 10, 99, 99, 99, 99, 99, 99, 99,
    99, 99, 10, 99, 99, 10, 10, 10, 99,
  ],
  [
    99, 99, 99, 10, 99, 99, 99, 99, 99, 99, 99, 10, 99, 99, 99, 99, 99, 99, 99,
    99, 99, 10, 99, 99, 10, 10, 10, 99,
  ],
  [
    99, 99, 99, 10, 99, 99, 10, 10, 10, 99, 10, 10, 10, 99, 10, 10, 10, 99, 10,
    10, 99, 10, 10, 10, 10, 10, 10, 99,
  ],
  [
    99, 99, 99, 10, 99, 99, 10, 10, 10, 99, 10, 10, 10, 10, 10, 10, 10, 10, 10,
    10, 99, 10, 99, 99, 10, 10, 10, 99,
  ],
  [
    99, 99, 99, 10, 99, 99, 10, 10, 10, 99, 10, 10, 10, 99, 10, 10, 10, 99, 10,
    10, 99, 10, 99, 99, 10, 10, 10, 99,
  ],
  [
    99, 99, 99, 10, 99, 99, 99, 10, 99, 99, 99, 10, 99, 99, 99, 99, 99, 99, 99,
    99, 99, 10, 99, 99, 99, 99, 99, 99,
  ],
  [
    99, 99, 99, 10, 99, 99, 10, 10, 10, 99, 99, 10, 99, 99, 10, 10, 10, 99, 99,
    99, 99, 10, 99, 99, 99, 99, 99, 99,
  ],
  [
    99, 99, 99, 10, 99, 99, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 99, 99,
    99, 99, 10, 99, 99, 99, 99, 99, 99,
  ],
  [
    99, 99, 99, 10, 99, 99, 10, 10, 10, 99, 99, 10, 99, 99, 10, 10, 10, 99, 99,
    99, 99, 10, 99, 99, 10, 10, 10, 99,
  ],
  [
    99, 99, 99, 10, 99, 99, 99, 99, 99, 99, 99, 10, 99, 99, 99, 10, 99, 99, 10,
    10, 99, 10, 99, 99, 10, 10, 10, 99,
  ],
  [
    99, 99, 99, 10, 99, 99, 10, 10, 10, 99, 99, 10, 99, 99, 10, 10, 10, 99, 10,
    10, 99, 10, 10, 10, 10, 0, 10, 99,
  ],
  [
    99, 99, 99, 10, 10, 10, 10, 10, 10, 10, 10, 10, 99, 99, 10, 10, 10, 10, 10,
    1, 99, 10, 99, 99, 10, 10, 10, 99,
  ],
  [
    99, 99, 99, 10, 99, 99, 10, 10, 10, 99, 99, 10, 99, 99, 10, 10, 10, 99, 10,
    10, 99, 10, 99, 99, 10, 10, 10, 99,
  ],
  [
    99, 99, 99, 10, 99, 99, 99, 99, 99, 99, 99, 10, 99, 99, 99, 99, 99, 99, 10,
    10, 99, 10, 99, 99, 99, 99, 99, 99,
  ],
  [
    99, 99, 99, 10, 99, 99, 10, 10, 10, 99, 99, 10, 99, 99, 10, 10, 10, 99, 99,
    99, 99, 10, 99, 99, 99, 99, 99, 99,
  ],
  [
    99, 99, 99, 10, 99, 99, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 99, 99,
    99, 99, 10, 99, 99, 10, 10, 10, 99,
  ],
  [
    99, 99, 99, 10, 99, 99, 10, 10, 10, 99, 99, 10, 99, 99, 10, 10, 10, 99, 10,
    10, 99, 10, 99, 99, 10, 10, 10, 99,
  ],
  [
    99, 99, 99, 10, 99, 99, 99, 99, 99, 99, 10, 10, 10, 99, 99, 99, 99, 99, 10,
    10, 10, 10, 10, 10, 10, 10, 10, 99,
  ],
  [
    99, 99, 99, 10, 99, 99, 99, 99, 99, 99, 10, 10, 10, 99, 99, 99, 99, 99, 10,
    10, 99, 10, 99, 99, 10, 10, 10, 99,
  ],
  [
    99, 99, 99, 10, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99,
    99, 99, 10, 99, 99, 10, 10, 10, 99,
  ],
  [
    99, 99, 99, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
    10, 10, 10, 99, 99, 99, 99, 99, 99,
  ],
  [
    99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99,
    99, 99, 99, 99, 99, 99, 99, 99, 99,
  ],
  [
    99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99,
    99, 99, 99, 99, 99, 99, 99, 99, 99,
  ],
  [
    99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99,
    99, 99, 99, 99, 99, 99, 99, 99, 99,
  ],
];

export default gridDungeon3;