const { whoIsOnline } = require('./who.js');

describe('whoIsOnline', () => {

   it('should be a function', () => {
    expect(typeof whoIsOnline).toBe('function');
  });

  it('should all online', () => {
    const friends = [{
      username: 'David',
      status: 'online',
      lastActivity: 10
      }, {
      username: 'Lucy',
      status: 'online',
      lastActivity: 5
      }, {
      username: 'Bob',
      status: 'online',
      lastActivity: 3
      }]
    expect(whoIsOnline(friends)).toEqual({online: ['David', 'Lucy', 'Bob']});
  });

  it('should return all offline', () => {
    const friends = [{
      username: 'David',
      status: 'offline',
      lastActivity: 11
      }, {
      username: 'Lucy',
      status: 'offline',
      lastActivity: 13
      }, {
      username: 'Bob',
      status: 'offline',
      lastActivity: 34
      }]

      expect(whoIsOnline(friends)).toEqual({offline: ['David', 'Lucy', 'Bob']});
  });
  it('should return all away', () => {
    const friends = [{
      username: 'David',
      status: 'away',
      lastActivity: 11
      }, {
      username: 'Tanya',
      status: 'away',
      lastActivity: 13
      }, {
      username: 'Peter',
      status: 'away',
      lastActivity: 34
      }]

      expect(whoIsOnline(friends)).toEqual({away: ['David', 'Tanya', 'Peter']});
  });
  it('should return people away and offline', () => {
    const friends = [{
      username: 'David',
      status: 'away',
      lastActivity: 11
      }, {
      username: 'Tanya',
      status: 'away',
      lastActivity: 13
      }, {
      username: 'Peter',
      status: 'offline',
      lastActivity: 34
      }]

      expect(whoIsOnline(friends)).toEqual({away: ['David', 'Tanya'], offline: ['Peter']});
  });
  it('should empty array', () => {
    const friends = []
    expect(whoIsOnline(friends)).toEqual({});
  });
});