-- This is for part 5:
-- Write a query to get the number of records uploaded per month since we've gone live in analytics.sql in the db directory.
select concat_ws('/',date_part('month', created_at) , date_part('year', created_at))  as month, count(*) as records_num from records
group by  date_part('month', created_at), date_part('year', created_at)