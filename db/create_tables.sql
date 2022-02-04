-- This is for part 1:
-- Initial CREATE TABLE statements for your schema

-- CREATE Persons TABLE
CREATE TABLE IF NOT EXISTS persons
(
    id         SERIAL PRIMARY KEY,
    first_name VARCHAR(255),
    last_name  VARCHAR(255),
    email      VARCHAR(255) UNIQUE                                NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
    deleted_at TIMESTAMP
);


-- CREATE Pets TABLE
CREATE TABLE IF NOT EXISTS pets
(
    id         SERIAL PRIMARY KEY,
    name       VARCHAR(255)                                       NOT NULL,
    species    VARCHAR(255),
    breed      VARCHAR(255),
    sex        CHAR(1),
    birth_date TIMESTAMP,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
    deleted_at TIMESTAMP
);

-- CREATE Record TABLE
CREATE TABLE IF NOT EXISTS records
(
    id         SERIAL PRIMARY KEY,
    title      VARCHAR(255),
    file_url   VARCHAR(500),
    pet_id     INT                                                NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP NOT NULL,
    deleted_at TIMESTAMP,
    FOREIGN KEY (pet_id) REFERENCES pets (id)
);

-- CREATE Pets-Persons Association TABLE
CREATE TABLE IF NOT EXISTS persons_pets
(
    person_id INT NOT NULL,
    pet_id    INT NOT NULL,
    PRIMARY KEY (person_id, pet_id),
    FOREIGN KEY (person_id) REFERENCES persons (id),
    FOREIGN KEY (pet_id) REFERENCES pets (id)
);