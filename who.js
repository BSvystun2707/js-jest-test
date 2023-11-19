function whoIsOnline(friends) {
  const result = {};

  for (const friend of friends) {
    let status = friend.status;

    if (status === 'online' && friend.lastActivity > 10) {
      status = 'away';
    }

    if (!result[status]) {
      result[status] = [];
    }

    result[status].push(friend.username);
  }

  return result;
}


module.exports = {
    whoIsOnline
  };