-- Here's an example to get you started

CREATE TABLE example (
  id serial primary key,
  description text,
  created_at datetime not null default now()
);
