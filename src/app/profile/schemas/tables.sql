-- @block
CREATE TABLE IF NOT EXISTS Profiles (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  name VARCHAR(255) NOT NULL,
  lastName VARCHAR(255) NOT NULL,
  username VARCHAR(255) NOT NULL UNIQUE,
  signupDate DATETIME NOT NULL,
  pronouns VARCHAR(24),
  location VARCHAR(255),
  goals VARCHAR(127),
  hobbies VARCHAR(127),
  profession VARCHAR(20)
);

UPDATE Profiles SET hobbies = ''