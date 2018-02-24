/*
SQLyog Community v12.5.1 (64 bit)
MySQL - 5.7.21-log : Database - c2n
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`c2n` /*!40100 DEFAULT CHARACTER SET utf8 */;

/*Table structure for table `course` */

DROP TABLE IF EXISTS `course`;

CREATE TABLE `course` (
  `course_id` int(11) NOT NULL AUTO_INCREMENT,
  `course_name` varchar(255) NOT NULL,
  PRIMARY KEY (`course_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `course` */

insert  into `course`(`course_id`,`course_name`) values 
(1,'Salesforce');

/*Table structure for table `course_batch` */

DROP TABLE IF EXISTS `course_batch`;

CREATE TABLE `course_batch` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `course_id` int(11) NOT NULL,
  `duration` int(11) NOT NULL,
  `start_date` date NOT NULL,
  `timings` varchar(10) NOT NULL,
  `isCompleted` tinyint(4) NOT NULL DEFAULT '0',
  `trainer_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `course_batch` */

insert  into `course_batch`(`id`,`course_id`,`duration`,`start_date`,`timings`,`isCompleted`,`trainer_id`) values 
(1,1,45,'2018-02-28','10 AM',0,2);

/*Table structure for table `employee` */

DROP TABLE IF EXISTS `employee`;

CREATE TABLE `employee` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `employee` */

insert  into `employee`(`id`,`first_name`,`last_name`) values 
(1,'Kodanda Ramu','Karroti'),
(2,'Srikanth','Gandipadu');

/*Table structure for table `student` */

DROP TABLE IF EXISTS `student`;

CREATE TABLE `student` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) NOT NULL,
  `last_name` varchar(255) NOT NULL,
  `email_id` varchar(255) NOT NULL,
  `mobile_no` varchar(255) NOT NULL,
  `IsLead` tinyint(4) NOT NULL DEFAULT '0',
  `doj` date NOT NULL,
  `referredBy` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

/*Data for the table `student` */

insert  into `student`(`id`,`first_name`,`last_name`,`email_id`,`mobile_no`,`IsLead`,`doj`,`referredBy`) values 
(1,'Gopiraj','Kummari','g@gmail.com','9848012345',1,'2018-01-26',1),
(2,'Ramu','Karroti','k@rediff.com','9848012345',0,'2018-01-26',1),
(3,'Srikanth','A','s@salesforce.com','9848012345',0,'2018-01-26',1),
(4,'Mohan','B','m@c2n.in','9848012345',0,'2018-01-26',1),
(5,'Mani','N','mani@c2n.in','9848012345',0,'2018-01-26',1),
(6,'Siva','K','siva@c2n.in','9848012345',0,'2018-01-26',1),
(7,'Jagdish','B','j@cts.in','9848012345',0,'2018-01-26',1),
(8,'Prabhakar','Aluvala','p@gmail.com','9848012345',0,'2018-01-26',1),
(9,'Stephen','Aluvala','stephen@ts.in','9848012345',0,'2018-01-26',1),
(10,'Simon','Aluvala','simon@birlasoft.com','9848012345',0,'2018-01-26',1),
(11,'Sridhar','B','sridhar@yahoo.in','9848012345',0,'2018-01-26',1),
(12,'Madan','Mohan','madan@cloudbees.com','9848012345',0,'2018-01-26',1),
(13,'Manoj','M','manoj@helpdesk.com','9848012345',0,'2018-01-26',1),
(14,'Dinesh','Dommeti','dinesh@dommeti.com','9848012345',0,'2018-01-26',1),
(15,'Debashish','Behuria','deb@behuria.com','9848012345',0,'2018-01-26',1),
(16,'Manjunath','Baireddy','manju@baireddy.com','9848012345',0,'2018-01-26',1),
(17,'Manikandan','Venkatraman','manik@venkatraman.tn','9848012345',0,'2018-01-26',1),
(18,'Krishna','Medida','krishna@medida.com','9848012345',0,'2018-01-26',1),
(19,'Sarvesh','Babu','sarvesh@babu.south','9848012345',0,'2018-01-26',1),
(20,'Niaz','Ahmed','niaz@ahmed.org','9848012345',0,'2018-01-26',1),
(21,'Siva','Karroti','siva@civil.com','9848012345',0,'2018-02-24',1),
(22,'Anil','bbc','anil@k.com','9848012345',0,'2018-02-24',1);

/*Table structure for table `student_batch` */

DROP TABLE IF EXISTS `student_batch`;

CREATE TABLE `student_batch` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` int(255) NOT NULL,
  `batch_id` int(255) NOT NULL,
  `no_of_absences` int(255) NOT NULL DEFAULT '0',
  `finalized_fee` int(11) NOT NULL,
  `paid_amount` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

/*Data for the table `student_batch` */

insert  into `student_batch`(`id`,`student_id`,`batch_id`,`no_of_absences`,`finalized_fee`,`paid_amount`) values 
(11,1,1,0,2000,1000);

/*Table structure for table `student_conversations` */

DROP TABLE IF EXISTS `student_conversations`;

CREATE TABLE `student_conversations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `student_id` int(11) NOT NULL,
  `conversation` varchar(255) NOT NULL,
  `postdate` date DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `student_conversations` */

/*Table structure for table `student_courses` */

DROP TABLE IF EXISTS `student_courses`;

CREATE TABLE `student_courses` (
  `student_id` int(11) NOT NULL,
  `course_id` int(11) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `student_courses` */

/*Table structure for table `batches_yet_to_start` */

DROP TABLE IF EXISTS `batches_yet_to_start`;

/*!50001 DROP VIEW IF EXISTS `batches_yet_to_start` */;
/*!50001 DROP TABLE IF EXISTS `batches_yet_to_start` */;

/*!50001 CREATE TABLE  `batches_yet_to_start`(
 `batch_id` int(11) ,
 `batch` varchar(277) 
)*/;

/*Table structure for table `students_by_referrer` */

DROP TABLE IF EXISTS `students_by_referrer`;

/*!50001 DROP VIEW IF EXISTS `students_by_referrer` */;
/*!50001 DROP TABLE IF EXISTS `students_by_referrer` */;

/*!50001 CREATE TABLE  `students_by_referrer`(
 `id` int(11) ,
 `first_name` varchar(255) ,
 `last_name` varchar(255) ,
 `email_id` varchar(255) ,
 `mobile_no` varchar(255) ,
 `IsLead` tinyint(4) ,
 `doj` date ,
 `referredBy` int(11) ,
 `referrer_name` varchar(255) 
)*/;

/*View structure for view batches_yet_to_start */

/*!50001 DROP TABLE IF EXISTS `batches_yet_to_start` */;
/*!50001 DROP VIEW IF EXISTS `batches_yet_to_start` */;

/*!50001 CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `batches_yet_to_start` AS select `cb`.`id` AS `batch_id`,upper(concat(`c`.`course_name`,'-',`cb`.`start_date`,'-',`cb`.`timings`)) AS `batch` from (`course_batch` `cb` join `course` `c` on((`cb`.`id` = `c`.`course_id`))) where (`cb`.`isCompleted` = 0) */;

/*View structure for view students_by_referrer */

/*!50001 DROP TABLE IF EXISTS `students_by_referrer` */;
/*!50001 DROP VIEW IF EXISTS `students_by_referrer` */;

/*!50001 CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `students_by_referrer` AS select `student`.`id` AS `id`,`student`.`first_name` AS `first_name`,`student`.`last_name` AS `last_name`,`student`.`email_id` AS `email_id`,`student`.`mobile_no` AS `mobile_no`,`student`.`IsLead` AS `IsLead`,`student`.`doj` AS `doj`,`student`.`referredBy` AS `referredBy`,`employee`.`first_name` AS `referrer_name` from (`student` join `employee` on((`student`.`referredBy` = `employee`.`id`))) */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
