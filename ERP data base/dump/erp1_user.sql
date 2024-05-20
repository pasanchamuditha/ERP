-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: erp1
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
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `USER_ID` int(11) NOT NULL,
  `USER_TYPE` varchar(45) NOT NULL,
  `USER_NAME` varchar(45) NOT NULL,
  `PASSWORD` varchar(45) NOT NULL,
  `EMAIL` varchar(45) NOT NULL,
  PRIMARY KEY (`USER_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'customer','JohnDoe1','password123','johndoe1@example.com'),(2,'admin','JaneDoe2','password456','janedoe2@example.com'),(3,'customer','AliceSmith3','password789','alicesmith3@example.com'),(4,'user','BobJohnson4','passwordabc','bobjohnson4@example.com'),(5,'customer','EmilyBrown5','passworddef','emilybrown5@example.com'),(6,'admin','CharlieWilson6','passwordghi','charliewilson6@example.com'),(7,'user','GraceTaylor7','passwordjkl','gracetaylor7@example.com'),(8,'customer','HenryMartin8','passwordmno','henrymartin8@example.com'),(9,'admin','SophiaLee9','passwordpqr','sophialee9@example.com'),(10,'user','OliverDavis10','passwordstu','oliverdavis10@example.com'),(11,'customer','MiaRodriguez11','passwordvwx','miarodriguez11@example.com'),(12,'admin','LiamGarcia12','passwordyz1','liamgarcia12@example.com'),(13,'user','AvaHernandez13','password234','avahernandez13@example.com'),(14,'customer','NoahLopez14','password567','noahlopez14@example.com'),(15,'admin','IsabellaGonzalez15','password890','isabellagonzalez15@example.com'),(16,'user','JamesPerez16','passwordabc1','jamesperez16@example.com'),(17,'customer','EmmaWilson17','passworddef2','emmawilson17@example.com'),(18,'admin','BenjaminScott18','passwordghi3','benjaminscott18@example.com'),(19,'user','EllaTorres19','passwordjkl4','ellatorres19@example.com'),(20,'customer','WilliamNguyen20','passwordmno5','williamnguyen20@example.com');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-05-20 16:21:30
