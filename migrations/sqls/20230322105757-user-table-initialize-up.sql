CREATE SCHEMA auth_public;

CREATE TABLE auth_public.users (
  id              SERIAL primary key,
  first_name      text not null check (char_length(first_name) < 80),
  last_name       text check (char_length(last_name) < 80)
);

INSERT INTO auth_public.users (first_name, last_name)
VALUES
('John', 'Doe'),
('Jane', 'Doe'),
('Bob', 'Smith'),
('Alice', 'Johnson'),
('Mike', 'Jones');