-- This is for part 3:
-- Update schema with American Kennel Club registration number and Cat Fanciers' Association registration number

ALTER TABLE pets ADD COLUMN akc_registration_number VARCHAR(255);
ALTER TABLE pets ADD COLUMN cfa_registration_number VARCHAR(255);