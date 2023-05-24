-- MySQL dump 10.13  Distrib 8.0.33, for macos13 (arm64)
--
-- Host: localhost    Database: hr
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `employee`
--

DROP TABLE IF EXISTS `employee`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `employee` (
  `EmployeeID` int NOT NULL,
  `EmployeeName` varchar(50) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `DepartmentID` varchar(50) NOT NULL,
  `DateofJoined` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`EmployeeID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `employee`
--

LOCK TABLES `employee` WRITE;
/*!40000 ALTER TABLE `employee` DISABLE KEYS */;
INSERT INTO `employee` VALUES (15432,'Sarah Brown',' sarah.brown@example.com','2','2013-08-23'),(18332,'David Williams',' david.williams@example.com','1','2020-11-21'),(19070,'Matthew Taylor',' matthew.taylor@example.com','1','2016-11-26'),(19221,'Sophia Anderson',' sophia.anderson@example.com','4','2022-08-28'),(19331,'Michael Jones',' michael.jones@example.com','5','2011-05-25'),(19371,'William Martinez',' william.martinez@example.com','4','2022-05-30'),(19522,'Emma Clark ','emma.clark@example.com','2','2023-03-01'),(19673,'Daniel Rodriguez',' daniel.rodriguez@example.com','1','2017-12-02'),(19823,'Ava Lewis',' ava.lewis@example.com','1','2015-09-03'),(19870,'Emily Johnson',' emily.johnson@example.com','5','2018-02-19'),(19875,'John Smith ','john.smith@example.com','1','2010-05-20'),(19974,'James Lee',' james.lee@example.com','3','2013-06-06'),(20124,'Olivia Davis ','olivia.davis@example.com','2','2019-02-24'),(20125,'Isabella Thompson',' isabella.thompson@example.com','4','2011-03-08'),(20276,'Benjamin Walker',' benjamin.walker@example.com','2','2018-12-08'),(20426,'Mia Hall ','mia.hall@example.com','5','2022-09-09'),(20577,'Alexander Young',' alexander.young@example.com','4','2014-06-11'),(20728,'Harper Hernandez',' harper.hernandez@example.com','2','2022-03-13'),(20878,'Ethan Nelson',' ethan.nelson@example.com','3','2019-12-13'),(21029,'Amelia Hill ','amelia.hill@example.com','5','2017-09-14');
/*!40000 ALTER TABLE `employee` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `locations`
--

DROP TABLE IF EXISTS `locations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `locations` (
  `EmployeeID` int NOT NULL,
  `City` varchar(50) DEFAULT NULL,
  `Country` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`EmployeeID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `locations`
--

LOCK TABLES `locations` WRITE;
/*!40000 ALTER TABLE `locations` DISABLE KEYS */;
INSERT INTO `locations` VALUES (15432,'Toronto ','Canada'),(18332,'Sydney ','Australia'),(19070,'Berlin ','Germany'),(19221,'Rome',' Italy'),(19331,'Paris ','France'),(19371,'Madrid ','Spain'),(19522,'Moscow ','Russia'),(19673,'Beijing ','China'),(19823,'Amsterdam ','Netherlands'),(19870,'New York ','United States'),(19875,'London ','United Kingdom'),(19974,'Sydney ','Australia'),(20124,'Tokyo ','Japan'),(20125,'Sydney ','Australia'),(20276,'Paris ','France'),(20426,'Paris ','France'),(20577,'Amsterdam ','Netherlands'),(20728,'Amsterdam ','Netherlands'),(20878,'London ','United Kingdom'),(21029,'London ','United Kingdom');
/*!40000 ALTER TABLE `locations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-05-24 19:38:39
