-- MySQL dump 10.13  Distrib 8.0.26, for Linux (x86_64)
--
-- Host: localhost    Database: test_database
-- ------------------------------------------------------
-- Server version	8.0.26

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Detail`
--

DROP TABLE IF EXISTS `Detail`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Detail` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `price` int NOT NULL,
  `sentence` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Detail`
--

LOCK TABLES `Detail` WRITE;
/*!40000 ALTER TABLE `Detail` DISABLE KEYS */;
INSERT INTO `Detail` VALUES (1,'2022-01-22 08:55:22.972','2022-01-22 08:55:22.974','shoma','test',150,'test'),(2,'2022-01-22 13:16:47.685','2022-01-22 13:16:47.685','shoma','test',150,'test'),(3,'2022-01-22 13:31:03.702','2022-01-22 13:31:03.702','shoma','test',150,'test'),(4,'2022-01-22 13:32:22.601','2022-01-22 13:32:22.602','shoma','test',150,'test'),(5,'2022-01-22 13:32:30.932','2022-01-22 13:32:30.932','shoma','test',150,'test'),(6,'2022-01-22 13:33:31.203','2022-01-22 13:33:31.204','shoma','test',150,'test'),(7,'2022-01-22 13:37:57.876','2022-01-22 13:37:57.876','shoma','test',150,'test'),(8,'2022-01-22 15:51:48.708','2022-01-22 15:51:48.709','ok','ok',2,'test'),(9,'2022-01-22 15:53:13.578','2022-01-22 15:53:13.579','ok','ok',2,'test');
/*!40000 ALTER TABLE `Detail` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `DetailOnOptions`
--

DROP TABLE IF EXISTS `DetailOnOptions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `DetailOnOptions` (
  `optionId` int NOT NULL,
  `detailId` int NOT NULL,
  `assignedAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `assignedBy` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`optionId`,`detailId`),
  KEY `DetailOnOptions_detailId_fkey` (`detailId`),
  CONSTRAINT `DetailOnOptions_detailId_fkey` FOREIGN KEY (`detailId`) REFERENCES `Detail` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE,
  CONSTRAINT `DetailOnOptions_optionId_fkey` FOREIGN KEY (`optionId`) REFERENCES `Option` (`id`) ON DELETE RESTRICT ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `DetailOnOptions`
--

LOCK TABLES `DetailOnOptions` WRITE;
/*!40000 ALTER TABLE `DetailOnOptions` DISABLE KEYS */;
INSERT INTO `DetailOnOptions` VALUES (2,8,'2022-01-22 15:51:48.634','me'),(3,9,'2022-01-22 15:53:13.502','me');
/*!40000 ALTER TABLE `DetailOnOptions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Menu`
--

DROP TABLE IF EXISTS `Menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Menu` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `img` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `detailId` int DEFAULT NULL,
  `category` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `Menu_detailId_key` (`detailId`),
  CONSTRAINT `Menu_detailId_fkey` FOREIGN KEY (`detailId`) REFERENCES `Detail` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Menu`
--

LOCK TABLES `Menu` WRITE;
/*!40000 ALTER TABLE `Menu` DISABLE KEYS */;
INSERT INTO `Menu` VALUES (1,'2022-01-22 13:37:57.905','2022-01-22 13:37:57.905','c','b',NULL,'a');
/*!40000 ALTER TABLE `Menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Option`
--

DROP TABLE IF EXISTS `Option`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Option` (
  `id` int NOT NULL AUTO_INCREMENT,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Option`
--

LOCK TABLES `Option` WRITE;
/*!40000 ALTER TABLE `Option` DISABLE KEYS */;
INSERT INTO `Option` VALUES (1,'2022-01-22 14:35:27.709','2022-01-22 14:35:27.711','test'),(2,'2022-01-22 15:51:48.708','2022-01-22 15:51:48.709','test'),(3,'2022-01-22 15:53:13.578','2022-01-22 15:53:13.579','test');
/*!40000 ALTER TABLE `Option` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Post`
--

DROP TABLE IF EXISTS `Post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Post` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `published` tinyint(1) NOT NULL,
  `title` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `content` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `authorId` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `Post_authorId_fkey` (`authorId`),
  CONSTRAINT `Post_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `User` (`id`) ON DELETE SET NULL ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Post`
--

LOCK TABLES `Post` WRITE;
/*!40000 ALTER TABLE `Post` DISABLE KEYS */;
INSERT INTO `Post` VALUES ('ckyoswgrn0009qifp7id5osuk','2022-01-21 19:33:33.539','2022-01-21 19:33:33.539',1,'Join us for Prisma Day 2019 in Berlin','https://www.prisma.io/day/','ckyoswgrm0008qifpdy4j8q5i'),('ckyoswgs80022qifp07o9992j','2022-01-21 19:33:33.560','2022-01-21 19:33:33.561',1,'Subscribe to GraphQL Weekly for community news','https://graphqlweekly.com/','ckyoswgs80021qifp01fodbqi'),('ckyoswgs80023qifpggr0cbne','2022-01-21 19:33:33.560','2022-01-21 19:33:33.561',0,'Follow Prisma on Twitter','https://twitter.com/prisma','ckyoswgs80021qifp01fodbqi'),('ckyp66r1900114vfpqn0tgyvm','2022-01-22 01:45:28.413','2022-01-22 01:45:28.414',1,'shoma','test','ckyoswgrm0008qifpdy4j8q5i'),('ckyp6iuz70009cyfp3vtx6f7x','2022-01-22 01:54:53.395','2022-01-22 01:54:53.396',1,'shoma2','test','ckyoswgrm0008qifpdy4j8q5i');
/*!40000 ALTER TABLE `Post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `User` (
  `id` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `createdAt` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `updatedAt` datetime(3) NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `firstname` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lastname` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role` enum('ADMIN','USER') COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `User_email_key` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES ('ckyoswgrm0008qifpdy4j8q5i','2022-01-21 19:33:33.538','2022-01-22 03:06:15.695','lisa@simpson.com','$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm','shoma','mano','USER'),('ckyoswgs80021qifp01fodbqi','2022-01-21 19:33:33.560','2022-01-21 19:33:33.561','bart@simpson.com','$2b$10$EpRnTzVlqHNP0.fUbXUwSOyuiXe/QLSUG6xNekdHgTGmrpHEfIoxm','Bart','Simpson','ADMIN');
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `_prisma_migrations`
--

DROP TABLE IF EXISTS `_prisma_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `_prisma_migrations` (
  `id` varchar(36) COLLATE utf8mb4_unicode_ci NOT NULL,
  `checksum` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `finished_at` datetime(3) DEFAULT NULL,
  `migration_name` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `logs` text COLLATE utf8mb4_unicode_ci,
  `rolled_back_at` datetime(3) DEFAULT NULL,
  `started_at` datetime(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
  `applied_steps_count` int unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `_prisma_migrations`
--

LOCK TABLES `_prisma_migrations` WRITE;
/*!40000 ALTER TABLE `_prisma_migrations` DISABLE KEYS */;
INSERT INTO `_prisma_migrations` VALUES ('144dcc95-e96d-49af-b5bf-b836ed514f09','e62a236f083c710d73eede7f26f4bf99450eea05c15b3da260c0154229a06ccf','2022-01-22 13:37:39.455','20220122133739_make_detail_id_optional',NULL,NULL,'2022-01-22 13:37:39.318',1),('21b2a5b1-f902-49d5-afdf-b4fb59158950','3d20a51bbb392f8ee7686bc6577e0f8367ec7159643e1cfe45d0a7be258332b2','2022-01-22 08:13:27.063','20220122081326_change_to_one_to_one',NULL,NULL,'2022-01-22 08:13:27.015',1),('49609356-9022-4852-ad62-be7f9803d79e','3ccff71921d3fb54f1c294e9b8bc5e9dfbdd13bc9d548d4246bd1d5eddbe1abc','2022-01-22 08:10:46.981','20220122081046_add_detailand_menu',NULL,NULL,'2022-01-22 08:10:46.871',1),('bb7c3a9b-0853-4e7a-af07-844436ef01b0','aa9768ffc21eb0a5d3f91add4132808ee2485a3b31efaeebe27162a37295a5cc','2022-01-21 19:33:31.215','20220121175854_new',NULL,NULL,'2022-01-21 19:33:31.032',1),('f2b1d53b-8640-4403-bd6a-fa1715f95815','9b49392d1b38bcb84e8dcb8eb29c2ef84670f0cc9e5c8b010611df6d94a5b8b4','2022-01-22 12:28:36.129','20220122122835_add_detail_table',NULL,NULL,'2022-01-22 12:28:35.954',1);
/*!40000 ALTER TABLE `_prisma_migrations` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-01-23  1:37:31
