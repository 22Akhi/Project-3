INSERT INTO 
  users (firstname, lastname, username, email, password)
VALUES
  ('Jamesss', 'Bonds', 'James', 'james.bond@gmail.com', 'b6b7fb4cad4bc020f76e16889a8e9065cb708d0f8c304a8a3db609b644da9536'),
  ('Tonyyy', 'Stark', 'Tony', 'starkrulz@gmail.com', 'b6b7fb4cad4bc020f76e16889a8e9065cb708d0f8c304a8a3db609b644da9536'),
  ('Aliii', 'G', 'Ali', 'hello@gmail.com', '3b5fe14857124335bb8832cc602f8edcfa12db42be36b135bef5bca47e3f2b9c');

INSERT INTO 
  schedules (user_id, day, start_at, end_at)
VALUES
  (1, 1, '8:00', '13:00'),
  (1, 2, '12:00', '17:00'),
  (1, 3, '8:00', '14:00'),
  (2, 2, '12:00', '17:00'),
  (2, 4, '12:00', '17:00'),
  (3, 3, '8:00', '15:00'),
  (3, 5, '8:00', '15:00');