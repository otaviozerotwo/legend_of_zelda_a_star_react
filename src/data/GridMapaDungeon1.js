const gridDungeon1 = [
  [
    99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99,
    99, 99, 99, 99, 99, 99, 99, 99, 99,
  ],
  [
    99, 10, 10, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99,
    99, 99, 99, 99, 99, 99, 99, 99, 99,
  ],
  [
    99, 10, 10, 10, 10, 10, 10, 10, 10, 10, 99, 99, 10, 10, 10, 99, 99, 99, 10, 10, 10, 99, 99,
    99, 99, 99, 99, 99,
  ],
  [
    99, 10, 10, 99, 99, 10, 99, 99, 99, 10, 10, 10, 10, 10, 10, 99, 99, 99, 10, 10, 10, 99,
    99, 99, 99, 99, 99, 99,
  ],
  [
    99, 99, 99, 99, 99, 10, 99, 99, 99, 10, 99, 99, 10, 10, 10, 99, 99, 99, 10, 10, 10,
    99, 99, 99, 99, 99, 99, 99,
  ],
  [
    99, 99, 99, 99, 99, 10, 99, 99, 99, 10, 99, 99, 99, 99, 99, 99, 99, 99, 99, 10,
    99, 99, 99, 99, 99, 99, 99, 99,
  ],
  [
    99, 99, 99, 99, 99, 10, 99, 99, 99, 10, 99, 99, 99, 99, 99, 99, 99, 99, 99, 10,
    99, 99, 99, 10, 10, 10, 99, 99,
  ],
  [
    99, 99, 99, 10, 10, 10, 99, 99, 99, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,
    10, 10, 10, 99, 99,
  ],
  [
    99, 99, 99, 10, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 10, 99, 99, 99, 10,
    99, 99, 99, 10, 10, 10, 99, 99,
  ],
  [
    99, 99, 99, 10, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 10, 99, 99, 99, 10,
    99, 99, 99, 10, 10, 10, 99, 99,
  ],
  [
    99, 99, 99, 10, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 10, 99, 99, 10, 10,
    10, 99, 99, 99, 99, 99, 99, 99,
  ],
  [
    99, 99, 99, 10, 99, 99, 99, 99, 10, 10, 10, 99, 99, 99, 99, 10, 99, 99, 10, 10, 10,
    99, 99, 99, 99, 99, 99, 99,
  ],
  [
    99, 99, 10, 10, 10, 99, 99, 99, 10, 10, 10, 99, 99, 99, 99, 10, 99, 99, 10, 10, 10,
    99, 99, 99, 99, 10, 10, 99,
  ],
  [
    99, 99, 10, 1, 10, 99, 99, 99, 10, 10, 10, 10, 10, 10, 10, 10, 99, 99, 99, 99, 99,
    99, 99, 99, 99, 10, 10, 99,
  ],
  [
    99, 99, 10, 10, 10, 99, 99, 99, 10, 10, 10, 99, 99, 99, 99, 10, 99, 99, 99, 99, 99,
    99, 10, 10, 10, 10, 0, 99,
  ],
  [
    99, 99, 99, 99, 99, 99, 99, 99, 10, 10, 10, 99, 99, 99, 99, 10, 99, 99, 99, 99,
    99, 99, 10, 99, 99, 10, 10, 99,
  ],
  [
    99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 10, 99, 99, 99,
    99, 99, 99, 10, 99, 99, 10, 10, 99,
  ],
  [
    99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 10, 99, 99, 99,
    99, 99, 99, 10, 99, 99, 99, 99, 99,
  ],
  [
    99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 10, 99, 99, 10, 10,
    10, 99, 10, 99, 99, 99, 99, 99,
  ],
  [
    99, 99, 99, 99, 99, 99, 99, 10, 10, 10, 10, 99, 99, 99, 99, 10, 99, 99, 10, 10, 10,
    99, 10, 99, 99, 99, 99, 99,
  ],
  [
    99, 99, 99, 99, 99, 99, 99, 10, 10, 10, 10, 99, 99, 10, 10, 10, 10, 10, 10, 10, 10, 99,
    10, 99, 99, 99, 99, 99,
  ],
  [
    99, 10, 10, 10, 99, 99, 99, 10, 10, 10, 10, 99, 99, 10, 99, 99, 99, 99, 10, 10, 10, 99,
    10, 99, 99, 99, 99, 99,
  ],
  [
    99, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 99, 99, 99, 99, 99, 99, 99, 99,
    10, 99, 99, 99, 99, 99,
  ],
  [
    99, 10, 10, 10, 99, 99, 99, 10, 10, 10, 10, 99, 99, 10, 99, 99, 99, 99, 99, 99, 99,
    99, 10, 99, 99, 99, 99, 99,
  ],
  [
    99, 99, 99, 99, 99, 99, 99, 10, 10, 10, 10, 99, 99, 10, 10, 10, 10, 10, 10, 10, 10, 10,
    10, 99, 99, 99, 99, 99,
  ],
  [
    99, 99, 99, 99, 99, 99, 99, 10, 10, 10, 10, 99, 99, 99, 99, 99, 99, 99, 99, 99,
    99, 99, 99, 99, 99, 99, 99, 99,
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

export default gridDungeon1;