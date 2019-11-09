(function() {
  
  const users = [
    {
      _id: 1,
      username: 'Dayun123',
      password: 'p',
      readingList: [],
    },
    {
      _id: 2,
      username: 'Django123',
      password: 'p',
      readingList: [],
    },
  ];

  db.users.insertMany(users);

})();