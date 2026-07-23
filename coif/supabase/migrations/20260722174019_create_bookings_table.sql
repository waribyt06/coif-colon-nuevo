/*
# Create bookings table for nursery visit requests

1. New Tables
- `bookings`
  - `id` (uuid, primary key)
  - `parent_name` (text, name of parent/guardian requesting the visit)
  - `contact` (text, email or WhatsApp provided by the parent)
  - `baby_age` (text, selected age range of the child, e.g. "3-12m")
  - `slot` (text, the chosen day label and time, e.g. "Lun 12 · 9:00")
  - `status` (text, booking status, defaults to 'pending')
  - `created_at` (timestamptz, when the request was submitted)

2. Security
- Enable RLS on `bookings`.
- Single-tenant, no-auth app: allow anon + authenticated to INSERT (parents submit the public form).
- No SELECT/UPDATE/DELETE from the anon key — only the service role (server-side) can read/manage bookings.
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  parent_name text NOT NULL,
  contact text NOT NULL,
  baby_age text NOT NULL,
  slot text NOT NULL,
  status text NOT NULL DEFAULT 'pending',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

-- Allow anyone (anon public form) to create a booking request
DROP POLICY IF EXISTS "anon_insert_bookings" ON bookings;
CREATE POLICY "anon_insert_bookings" ON bookings FOR INSERT
  TO anon, authenticated WITH CHECK (true);
