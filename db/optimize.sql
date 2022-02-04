-- This is for part 4:
-- Optimize loading a person's list of pets
CREATE INDEX idx_pets_delete_at ON pets(deleted_at);