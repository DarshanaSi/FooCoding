SHOW DATABASES;
USE new_world;

select name, population from country where population > 8000000;
select name from country where country.name like '%land%';
select name from country where country.name like '%land%';
select name, population from country where population between 500000 and 1000000;
select name, continent from country where continent = 'Europe';
select name, surfacearea from country order by surfacearea desc;
select city.name, country.name from city inner join country on city.countrycode = country.code where country.name = 'Netherlands';
select city.name, city.population from city where city.name = 'Rotterdam';
select name, surfacearea from country order by surfacearea desc limit 10;
select city.name from city order by population desc limit 10;
select sum(population) as earth_population from country;
