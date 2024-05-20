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
-- Table structure for table `product_table`
--

DROP TABLE IF EXISTS `product_table`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_table` (
  `PRODUCT_CODE` varchar(255) NOT NULL,
  `PRODUCT_NAME` varchar(255) DEFAULT NULL,
  `PRODUCT_DESCRIPTION` varchar(255) DEFAULT NULL,
  `PRODUCT_CATEGORY` varchar(255) DEFAULT NULL,
  `PRODUCT_EXP_DATE` varchar(255) DEFAULT NULL,
  `SELLING_PRICE` varchar(255) DEFAULT NULL,
  `PRODUCT_WEIGHT` varchar(255) DEFAULT NULL,
  `PRODUCT_IMAGE` varchar(255) DEFAULT NULL,
  `QUANTITY` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`PRODUCT_CODE`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_table`
--

LOCK TABLES `product_table` WRITE;
/*!40000 ALTER TABLE `product_table` DISABLE KEYS */;
INSERT INTO `product_table` VALUES ('P001','Milk','Fresh milk','Dairy','2024-06-01','2.50','1 liter','milk.jpg','99'),('P002','Bread','Whole grain bread','Bakery','2024-05-20','1.50','500 grams','bread.jpg','47'),('P003','Apple','Red apple','Fruit','2024-05-18','0.75','150 grams','apple.jpg','198'),('P004','Chicken','Fresh chicken breast','Meat','2024-05-22','5.00','250 grams','chicken.jpg','28'),('P005','Cereal','Healthy cereal','Breakfast','2024-08-01','3.00','500 grams','cereal.jpg','78'),('P006','Water','Bottled water','Beverage','2024-07-01','1.00','500 ml','water.jpg','150'),('P007','Eggs','Organic eggs','Dairy','2024-05-25','2.00','Dozen','eggs.jpg','100'),('P008','Banana','Yellow banana','Fruit','2024-05-20','0.50','100 grams','banana.jpg','300'),('P009','Salmon','Fresh salmon fillet','Seafood','2024-05-24','8.00','200 grams','salmon.jpg','20'),('P010','Yogurt','Greek yogurt','Dairy','2024-06-05','1.50','200 grams','yogurt.jpg','120'),('P011','Orange Juice','Fresh orange juice','Beverage','2024-06-01','2.50','1 liter','orange_juice.jpg','80'),('P012','Pasta','Whole wheat pasta','Pantry','2024-09-01','1.75','500 grams','pasta.jpg','100'),('P013','Tomato','Ripe tomato','Produce','2024-05-18','0.75','150 grams','tomato.jpg','150'),('P014','Steak','Grass-fed steak','Meat','2024-05-23','10.00','300 grams','steak.jpg','15'),('P015','Potato','Russet potato','Produce','2024-05-20','0.50','200 grams','potato.jpg','200'),('P016','Cheese','Cheddar cheese','Dairy','2024-06-10','3.50','250 grams','cheese.jpg','50'),('P017','Lettuce','Iceberg lettuce','Produce','2024-05-19','1.25','200 grams','lettuce.jpg','100'),('P018','Tea','Green tea','Beverage','2024-10-01','2.00','100 grams','tea.jpg','90'),('P019','Soap','Antibacterial soap','Household','2025-01-01','1.50','100 grams','soap.jpg','200'),('P020','Shampoo','Moisturizing shampoo','Personal Care','2024-12-01','3.00','250 ml','shampoo.jpg','120');
/*!40000 ALTER TABLE `product_table` ENABLE KEYS */;
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
