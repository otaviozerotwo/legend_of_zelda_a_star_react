const gridDungeon2 = [
  [
    99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99,
    99, 99, 99, 99, 99, 99, 99, 99, 99,
  ],
  [
    99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99,
    99, 99, 99, 99, 99, 99, 99, 99, 99,
  ],
  [
    99, 10, 10, 10, 99, 99, 99, 10, 10, 10, 99, 99, 99, 10, 99, 99, 99, 99, 10,
    10, 10, 10, 10, 10, 10, 10, 99, 99,
  ],
  [
    99, 10, 10, 10, 99, 99, 99, 10, 10, 10, 99, 99, 99, 10, 99, 99, 99, 99, 10,
    99, 99, 99, 10, 99, 99, 99, 99, 99,
  ],
  [
    99, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 99, 10, 10, 10, 10,
    99, 99, 99, 10, 99, 99, 99, 99, 99,
  ],
  [
    99, 10, 10, 10, 99, 99, 99, 10, 10, 10, 99, 99, 99, 10, 99, 99, 99, 99, 10,
    10, 10, 99, 10, 10, 10, 10, 99, 99,
  ],
  [
    99, 10, 10, 10, 99, 99, 99, 10, 10, 10, 99, 99, 99, 10, 99, 99, 99, 99, 99,
    99, 99, 99, 10, 10, 10, 10, 99, 99,
  ],
  [
    99, 99, 10, 99, 99, 99, 99, 99, 10, 99, 99, 99, 10, 10, 10, 99, 99, 99, 99,
    99, 99, 99, 10, 10, 10, 10, 99, 99,
  ],
  [
    99, 99, 10, 99, 99, 99, 99, 99, 10, 99, 99, 99, 10, 10, 10, 99, 99, 99, 99,
    99, 10, 99, 99, 99, 99, 10, 99, 99,
  ],
  [
    99, 99, 10, 10, 10, 10, 99, 99, 10, 99, 99, 99, 10, 10, 10, 10, 10, 10, 10,
    10, 10, 99, 99, 99, 99, 10, 99, 99,
  ],
  [
    99, 99, 99, 99, 99, 10, 99, 99, 10, 99, 99, 99, 10, 10, 10, 99, 99, 10, 99,
    99, 10, 99, 10, 10, 10, 10, 99, 99,
  ],
  [
    99, 99, 99, 99, 99, 10, 99, 99, 10, 99, 99, 99, 10, 10, 10, 99, 99, 10, 99,
    99, 10, 99, 10, 99, 99, 99, 99, 99,
  ],
  [
    99, 10, 10, 10, 99, 10, 99, 99, 10, 99, 99, 99, 99, 10, 99, 99, 99, 10, 99,
    99, 10, 99, 10, 99, 99, 10, 10, 99,
  ],
  [
    99, 10, 0, 10, 10, 10, 10, 99, 10, 99, 99, 99, 99, 10, 99, 99, 99, 10, 10,
    10, 10, 99, 10, 10, 10, 100, 10, 99,
  ],
  [
    99, 10, 10, 10, 99, 10, 99, 99, 10, 99, 10, 10, 10, 10, 99, 99, 99, 99, 99,
    99, 10, 99, 10, 99, 99, 10, 10, 99,
  ],
  [
    99, 99, 99, 99, 99, 10, 99, 99, 10, 99, 10, 10, 10, 99, 99, 99, 99, 99, 99,
    99, 10, 99, 10, 99, 99, 99, 99, 99,
  ],
  [
    99, 99, 99, 99, 99, 10, 99, 99, 10, 99, 10, 10, 10, 99, 99, 10, 10, 10, 99,
    99, 10, 99, 10, 99, 99, 99, 99, 99,
  ],
  [
    99, 99, 99, 99, 99, 10, 99, 99, 10, 99, 10, 10, 10, 99, 99, 10, 10, 10, 99,
    99, 10, 99, 10, 99, 99, 99, 99, 99,
  ],
  [
    99, 99, 10, 99, 99, 10, 10, 10, 10, 99, 10, 10, 10, 10, 10, 10, 10, 10, 10,
    10, 10, 10, 10, 10, 10, 10, 99, 99,
  ],
  [
    99, 99, 10, 99, 99, 99, 99, 99, 99, 99, 10, 10, 10, 99, 99, 10, 10, 10, 99,
    99, 10, 99, 10, 99, 99, 10, 99, 99,
  ],
  [
    99, 99, 10, 99, 99, 99, 99, 99, 99, 99, 10, 10, 10, 99, 99, 10, 10, 10, 99,
    99, 10, 99, 10, 99, 99, 10, 99, 99,
  ],
  [
    99, 99, 10, 10, 10, 10, 99, 99, 99, 99, 10, 10, 10, 99, 99, 99, 10, 99, 99,
    99, 10, 99, 10, 99, 10, 10, 99, 99,
  ],
  [
    99, 99, 99, 99, 99, 10, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 10, 99, 99,
    99, 10, 99, 99, 99, 10, 10, 99, 99,
  ],
  [
    99, 99, 99, 99, 10, 10, 10, 10, 99, 99, 99, 99, 99, 99, 99, 99, 10, 99, 99,
    99, 10, 10, 10, 10, 10, 10, 99, 99,
  ],
  [
    99, 99, 99, 99, 10, 10, 10, 10, 99, 99, 99, 99, 99, 99, 99, 99, 10, 99, 99,
    99, 10, 99, 99, 99, 10, 10, 99, 99,
  ],
  [
    99, 99, 99, 99, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
    10, 10, 99, 99, 99, 10, 10, 99, 99,
  ],
  [
    99, 99, 99, 99, 10, 10, 10, 10, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99,
    99, 99, 99, 99, 99, 99, 99, 99, 99,
  ],
  [
    99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99,
    99, 99, 99, 99, 99, 99, 99, 99, 99,
  ],
];

export default gridDungeon2;