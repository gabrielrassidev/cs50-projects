-- Keep a log of any SQL queries you execute as you solve the mystery.

-- Step 1: Identify the crime report on July 28
SELECT * FROM crime_scene_reports
WHERE year = 2024 AND month = 7 AND day = 28;

-- From this, we learn the theft occurred at 10:15 AM at the bakery.
-- Three witnesses are mentioned in relation to the bakery.

-- Step 2: Retrieve interviews from the same day
SELECT name, transcript
FROM interviews
WHERE year = 2024 AND month = 7 AND day = 28;

-- The interviews reveal key details:
-- - The thief got into a car in the bakery parking lot shortly after 10:15 AM.
-- - Earlier that day, the thief was seen withdrawing money from an ATM on Leggett Street.
-- - The thief made a short phone call (less than a minute) after leaving.
-- - In that call, the thief asked someone to book the earliest flight out of Fiftyville for the next day.

-- Step 3: Find individuals who exited the bakery parking lot shortly after 10:15 AM
-- AND made short calls AND withdrew money at the ATM location.

SELECT *
FROM people
WHERE license_plate IN (
    SELECT license_plate
    FROM bakery_security_logs
    WHERE activity = 'exit'
      AND year = 2024 AND month = 7 AND day = 28
      AND hour = 10 AND minute BETWEEN 15 AND 40
)
AND phone_number IN (
    SELECT caller
    FROM phone_calls
    WHERE year = 2024 AND month = 7 AND day = 28
      AND duration < 60
)
AND id IN (
    SELECT person_id
    FROM bank_accounts
    WHERE account_number IN (
        SELECT account_number
        FROM atm_transactions
        WHERE year = 2024 AND month = 7 AND day = 28
          AND atm_location = 'Leggett Street'
          AND transaction_type = 'withdraw'
    )
);

-- This narrows down our suspects to: Taylor, Diana, and Bruce.

-- Step 4: Check who they called (possible accomplices)
SELECT *
FROM people
WHERE phone_number IN (
    SELECT receiver
    FROM phone_calls
    WHERE year = 2024 AND month = 7 AND day = 28
      AND duration < 60
      AND caller IN ('(286) 555-6063', '(770) 555-1861', '(367) 555-5533')
);

-- These receivers are potential accomplices: James, Philip, and Robin.

-- Step 5: Confirm which suspect called which accomplice
SELECT *
FROM phone_calls
WHERE year = 2024 AND month = 7 AND day = 28
  AND duration < 60
  AND caller IN ('(286) 555-6063', '(770) 555-1861', '(367) 555-5533')
  AND receiver IN ('(676) 555-6554', '(725) 555-3243', '(375) 555-8161');

-- Result:
-- - Taylor called James
-- - Diana called Philip
-- - Bruce called Robin

-- Step 6: Find all flights leaving Fiftyville the next day, sorted by earliest
SELECT *
FROM flights
JOIN airports ON airports.id = flights.origin_airport_id
WHERE flights.year = 2024 AND flights.month = 7 AND flights.day = 29
  AND airports.city = 'Fiftyville'
  AND flights.hour BETWEEN 0 AND 12
ORDER BY flights.hour, flights.minute;

-- The earliest flight is to New York City at 8:20 AM.

-- Step 7: Match suspects and accomplices to passengers on those flights
SELECT name, passport_number
FROM people
WHERE name IN ('Bruce', 'Taylor', 'Diana', 'James', 'Philip', 'Robin')
AND passport_number IN (
    SELECT passport_number
    FROM passengers
    JOIN flights ON flights.id = passengers.flight_id
    WHERE flights.year = 2024 AND flights.month = 7 AND day = 29
      AND flights.hour BETWEEN 0 AND 12
      AND flights.origin_airport_id = (
          SELECT id FROM airports WHERE city = 'Fiftyville'
      )
      AND flights.destination_airport_id IN (
          SELECT id FROM airports WHERE city IN ('New York City', 'Chicago', 'San Francisco')
      )
);

-- Taylor and Bruce were on early flights the next day.

-- Step 8: Determine exactly where they went and with whom
SELECT full_name, city, passport_number, flights.destination_airport_id, flights.hour, flights.minute
FROM airports
JOIN flights ON flights.origin_airport_id = airports.id
JOIN passengers ON passengers.flight_id = flights.id
WHERE flights.year = 2024 AND month = 7 AND day = 29
  AND flights.hour BETWEEN 0 AND 12
  AND passengers.passport_number IN (
      SELECT passport_number
      FROM people
      WHERE name IN ('Bruce', 'Taylor', 'Diana', 'James', 'Philip', 'Robin')
  );

-- Bruce flew to New York and called Robin. No other accomplice was on the flight.
-- Therefore, Bruce is the thief and Robin is the accomplice.
