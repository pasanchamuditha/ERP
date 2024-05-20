-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: erp0
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

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
-- Table structure for table `pos_newtable`
--

DROP TABLE IF EXISTS `pos_newtable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pos_newtable` (
  `BIL_ID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `CUS_ID` varchar(45) DEFAULT NULL,
  `PRODUCT_CODE` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`BIL_ID`),
  KEY `PRODUCT_CODE` (`PRODUCT_CODE`),
  CONSTRAINT `pos_newtable_ibfk_1` FOREIGN KEY (`PRODUCT_CODE`) REFERENCES `product_table` (`PRODUCT_CODE`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pos_newtable`
--

LOCK TABLES `pos_newtable` WRITE;
/*!40000 ALTER TABLE `pos_newtable` DISABLE KEYS */;
INSERT INTO `pos_newtable` VALUES (1,'C001','P001'),(2,'C002','P003'),(3,'C003','P006'),(4,'C004','P008'),(5,'C001','P002'),(6,'C002','P005'),(7,'C003','P007'),(8,'C004','P012'),(9,'C001','P010'),(10,'C002','P015'),(11,'C003','P017'),(12,'C004','P020'),(13,'C001','P004'),(14,'C002','P009'),(15,'C003','P011'),(16,'C004','P014'),(17,'C001','P016'),(18,'C002','P018'),(19,'C003','P019'),(20,'C004','P013'),(21,'asdsad','P002'),(22,'asdsad','P002'),(23,'asdsad','P002'),(24,'asdsad','P002'),(25,'asdsad','P002'),(26,'asdsad','P002'),(27,'asdsad','P002'),(28,'asdsad','P002'),(29,'asdsad','P003'),(30,'asdsad','P004'),(31,'9898','P002'),(32,'19paz','P004'),(33,'19paz','P001'),(35,'1199988','P002'),(36,'1199988','P003'),(37,'1999','P005'),(38,'5048','P005');
/*!40000 ALTER TABLE `pos_newtable` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-20 16:21:31
