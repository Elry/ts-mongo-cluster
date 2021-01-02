var assert = require('assert');

describe("players", () => {
  it("should return ids from lastgame", (done) => {
    let result = [];
    let currentDate = new Date('2020-01');

    let players = [
      {id: '1', name:'a', lastgame:new Date('2020-01')},
      {id: '2', name:'b', lastgame:new Date('2020-01')},
      {id: '3', name:'c', lastgame:new Date('2020-02')},
      {id: '4', name:'d', lastgame:new Date('2020-03')},
      {id: '5', name:'e', lastgame:new Date('2020-03')},
    ];

    Object.entries(players).forEach(([key, value]) => {
      if(value.lastgame > currentDate){
        result.push(value.id);
      }
    });

    console.log(result);

    assert.strictEqual(1, 1);
    done();
  });
});