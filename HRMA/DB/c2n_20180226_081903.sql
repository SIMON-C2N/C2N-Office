-- Valentina Studio --
-- MySQL dump --
-- ---------------------------------------------------------


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
-- ---------------------------------------------------------


-- CREATE TABLE "course" -----------------------------------
-- CREATE TABLE "course" ---------------------------------------
CREATE TABLE `course` ( 
	`course_id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`course_name` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	PRIMARY KEY ( `course_id` ) )
CHARACTER SET = utf8
COLLATE = utf8_general_ci
ENGINE = InnoDB
AUTO_INCREMENT = 2;
-- -------------------------------------------------------------
-- ---------------------------------------------------------


-- CREATE TABLE "course_batch" -----------------------------
-- CREATE TABLE "course_batch" ---------------------------------
CREATE TABLE `course_batch` ( 
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`course_id` Int( 11 ) NOT NULL,
	`duration` Int( 11 ) NOT NULL,
	`start_date` Date NOT NULL,
	`timings` VarChar( 10 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`isCompleted` TinyInt( 4 ) NOT NULL DEFAULT '0',
	`trainer_id` Int( 11 ) NOT NULL,
	PRIMARY KEY ( `id` ) )
CHARACTER SET = utf8
COLLATE = utf8_general_ci
ENGINE = InnoDB
AUTO_INCREMENT = 2;
-- -------------------------------------------------------------
-- ---------------------------------------------------------


-- CREATE TABLE "employee" ---------------------------------
-- CREATE TABLE "employee" -------------------------------------
CREATE TABLE `employee` ( 
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`first_name` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`last_name` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	PRIMARY KEY ( `id` ) )
CHARACTER SET = utf8
COLLATE = utf8_general_ci
ENGINE = InnoDB
AUTO_INCREMENT = 3;
-- -------------------------------------------------------------
-- ---------------------------------------------------------


-- CREATE TABLE "student" ----------------------------------
-- CREATE TABLE "student" --------------------------------------
CREATE TABLE `student` ( 
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`first_name` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`last_name` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`email_id` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`mobile_no` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`IsLead` TinyInt( 4 ) NOT NULL DEFAULT '0',
	`doj` Date NOT NULL,
	`referredBy` Int( 11 ) NOT NULL,
	PRIMARY KEY ( `id` ) )
CHARACTER SET = utf8
COLLATE = utf8_general_ci
ENGINE = InnoDB
AUTO_INCREMENT = 23;
-- -------------------------------------------------------------
-- ---------------------------------------------------------


-- CREATE TABLE "student_batch" ----------------------------
-- CREATE TABLE "student_batch" --------------------------------
CREATE TABLE `student_batch` ( 
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`student_id` Int( 255 ) NOT NULL,
	`batch_id` Int( 255 ) NOT NULL,
	`no_of_absences` Int( 255 ) NOT NULL DEFAULT '0',
	`finalized_fee` Int( 11 ) NOT NULL,
	`paid_amount` Int( 11 ) NOT NULL,
	PRIMARY KEY ( `id` ) )
CHARACTER SET = utf8
COLLATE = utf8_general_ci
ENGINE = InnoDB
AUTO_INCREMENT = 14;
-- -------------------------------------------------------------
-- ---------------------------------------------------------


-- CREATE TABLE "student_conversations" --------------------
-- CREATE TABLE "student_conversations" ------------------------
CREATE TABLE `student_conversations` ( 
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`student_id` Int( 11 ) NOT NULL,
	`conversation` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
	`postdate` Date NULL,
	PRIMARY KEY ( `id` ) )
CHARACTER SET = utf8
COLLATE = utf8_general_ci
ENGINE = InnoDB
AUTO_INCREMENT = 5;
-- -------------------------------------------------------------
-- ---------------------------------------------------------


-- CREATE TABLE "student_courses" --------------------------
-- CREATE TABLE "student_courses" ------------------------------
CREATE TABLE `student_courses` ( 
	`student_id` Int( 11 ) NOT NULL,
	`course_id` Int( 11 ) NOT NULL,
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	PRIMARY KEY ( `id` ) )
CHARACTER SET = utf8
COLLATE = utf8_general_ci
ENGINE = InnoDB
AUTO_INCREMENT = 1;
-- -------------------------------------------------------------
-- ---------------------------------------------------------


-- Dump data of "course" -----------------------------------
INSERT INTO `course`(`course_id`,`course_name`) VALUES ( '1', 'Salesforce' );
-- ---------------------------------------------------------


-- Dump data of "course_batch" -----------------------------
INSERT INTO `course_batch`(`id`,`course_id`,`duration`,`start_date`,`timings`,`isCompleted`,`trainer_id`) VALUES ( '1', '1', '45', '2018-02-28', '10 AM', '0', '2' );
-- ---------------------------------------------------------


-- Dump data of "employee" ---------------------------------
INSERT INTO `employee`(`id`,`first_name`,`last_name`) VALUES ( '1', 'Kodanda Ramu', 'Karroti' );
INSERT INTO `employee`(`id`,`first_name`,`last_name`) VALUES ( '2', 'Srikanth', 'Gandipadu' );
-- ---------------------------------------------------------


-- Dump data of "student" ----------------------------------
INSERT INTO `student`(`id`,`first_name`,`last_name`,`email_id`,`mobile_no`,`IsLead`,`doj`,`referredBy`) VALUES ( '1', 'Gopiraj', 'Kummari', 'g@gmail.com', '9848012345', '1', '2018-01-26', '1' );
INSERT INTO `student`(`id`,`first_name`,`last_name`,`email_id`,`mobile_no`,`IsLead`,`doj`,`referredBy`) VALUES ( '2', 'Ramu', 'Karroti', 'k@rediff.com', '9848012345', '1', '2018-01-26', '1' );
INSERT INTO `student`(`id`,`first_name`,`last_name`,`email_id`,`mobile_no`,`IsLead`,`doj`,`referredBy`) VALUES ( '3', 'Srikanth', 'A', 's@salesforce.com', '9848012345', '0', '2018-01-26', '1' );
INSERT INTO `student`(`id`,`first_name`,`last_name`,`email_id`,`mobile_no`,`IsLead`,`doj`,`referredBy`) VALUES ( '4', 'Mohan', 'B', 'm@c2n.in', '9848012345', '0', '2018-01-26', '1' );
INSERT INTO `student`(`id`,`first_name`,`last_name`,`email_id`,`mobile_no`,`IsLead`,`doj`,`referredBy`) VALUES ( '5', 'Mani', 'N', 'mani@c2n.in', '9848012345', '0', '2018-01-26', '1' );
INSERT INTO `student`(`id`,`first_name`,`last_name`,`email_id`,`mobile_no`,`IsLead`,`doj`,`referredBy`) VALUES ( '6', 'Siva', 'K', 'siva@c2n.in', '9848012345', '0', '2018-01-26', '1' );
INSERT INTO `student`(`id`,`first_name`,`last_name`,`email_id`,`mobile_no`,`IsLead`,`doj`,`referredBy`) VALUES ( '7', 'Jagdish', 'B', 'j@cts.in', '9848012345', '0', '2018-01-26', '1' );
INSERT INTO `student`(`id`,`first_name`,`last_name`,`email_id`,`mobile_no`,`IsLead`,`doj`,`referredBy`) VALUES ( '8', 'Prabhakar', 'Aluvala', 'p@gmail.com', '9848012345', '0', '2018-01-26', '1' );
INSERT INTO `student`(`id`,`first_name`,`last_name`,`email_id`,`mobile_no`,`IsLead`,`doj`,`referredBy`) VALUES ( '9', 'Stephen', 'Aluvala', 'stephen@ts.in', '9848012345', '0', '2018-01-26', '1' );
INSERT INTO `student`(`id`,`first_name`,`last_name`,`email_id`,`mobile_no`,`IsLead`,`doj`,`referredBy`) VALUES ( '10', 'Simon', 'Aluvala', 'simon@birlasoft.com', '9848012345', '0', '2018-01-26', '1' );
INSERT INTO `student`(`id`,`first_name`,`last_name`,`email_id`,`mobile_no`,`IsLead`,`doj`,`referredBy`) VALUES ( '11', 'Sridhar', 'B', 'sridhar@yahoo.in', '9848012345', '0', '2018-01-26', '1' );
INSERT INTO `student`(`id`,`first_name`,`last_name`,`email_id`,`mobile_no`,`IsLead`,`doj`,`referredBy`) VALUES ( '12', 'Madan', 'Mohan', 'madan@cloudbees.com', '9848012345', '0', '2018-01-26', '1' );
INSERT INTO `student`(`id`,`first_name`,`last_name`,`email_id`,`mobile_no`,`IsLead`,`doj`,`referredBy`) VALUES ( '13', 'Manoj', 'M', 'manoj@helpdesk.com', '9848012345', '0', '2018-01-26', '1' );
INSERT INTO `student`(`id`,`first_name`,`last_name`,`email_id`,`mobile_no`,`IsLead`,`doj`,`referredBy`) VALUES ( '14', 'Dinesh', 'Dommeti', 'dinesh@dommeti.com', '9848012345', '0', '2018-01-26', '1' );
INSERT INTO `student`(`id`,`first_name`,`last_name`,`email_id`,`mobile_no`,`IsLead`,`doj`,`referredBy`) VALUES ( '15', 'Debashish', 'Behuria', 'deb@behuria.com', '9848012345', '0', '2018-01-26', '1' );
INSERT INTO `student`(`id`,`first_name`,`last_name`,`email_id`,`mobile_no`,`IsLead`,`doj`,`referredBy`) VALUES ( '16', 'Manjunath', 'Baireddy', 'manju@baireddy.com', '9848012345', '0', '2018-01-26', '1' );
INSERT INTO `student`(`id`,`first_name`,`last_name`,`email_id`,`mobile_no`,`IsLead`,`doj`,`referredBy`) VALUES ( '17', 'Manikandan', 'Venkatraman', 'manik@venkatraman.tn', '9848012345', '0', '2018-01-26', '1' );
INSERT INTO `student`(`id`,`first_name`,`last_name`,`email_id`,`mobile_no`,`IsLead`,`doj`,`referredBy`) VALUES ( '18', 'Krishna', 'Medida', 'krishna@medida.com', '9848012345', '0', '2018-01-26', '1' );
INSERT INTO `student`(`id`,`first_name`,`last_name`,`email_id`,`mobile_no`,`IsLead`,`doj`,`referredBy`) VALUES ( '19', 'Sarvesh', 'Babu', 'sarvesh@babu.south', '9848012345', '0', '2018-01-26', '1' );
INSERT INTO `student`(`id`,`first_name`,`last_name`,`email_id`,`mobile_no`,`IsLead`,`doj`,`referredBy`) VALUES ( '20', 'Niaz', 'Ahmed', 'niaz@ahmed.org', '9848012345', '0', '2018-01-26', '1' );
INSERT INTO `student`(`id`,`first_name`,`last_name`,`email_id`,`mobile_no`,`IsLead`,`doj`,`referredBy`) VALUES ( '21', 'Siva', 'Karroti', 'siva@civil.com', '9848012345', '0', '2018-02-24', '1' );
INSERT INTO `student`(`id`,`first_name`,`last_name`,`email_id`,`mobile_no`,`IsLead`,`doj`,`referredBy`) VALUES ( '22', 'Anil', 'bbc', 'anil@k.com', '9848012345', '0', '2018-02-24', '1' );
-- ---------------------------------------------------------


-- Dump data of "student_batch" ----------------------------
INSERT INTO `student_batch`(`id`,`student_id`,`batch_id`,`no_of_absences`,`finalized_fee`,`paid_amount`) VALUES ( '12', '1', '1', '0', '2000', '1000' );
INSERT INTO `student_batch`(`id`,`student_id`,`batch_id`,`no_of_absences`,`finalized_fee`,`paid_amount`) VALUES ( '13', '2', '1', '0', '2000', '0' );
-- ---------------------------------------------------------


-- Dump data of "student_conversations" --------------------
INSERT INTO `student_conversations`(`id`,`student_id`,`conversation`,`postdate`) VALUES ( '1', '1', 'Got postponed.', '2018-02-28' );
INSERT INTO `student_conversations`(`id`,`student_id`,`conversation`,`postdate`) VALUES ( '2', '1', 'Account is lead.', NULL );
INSERT INTO `student_conversations`(`id`,`student_id`,`conversation`,`postdate`) VALUES ( '3', '2', 'Account is lead.', NULL );
INSERT INTO `student_conversations`(`id`,`student_id`,`conversation`,`postdate`) VALUES ( '4', '3', 'the conversation is still in the process ', NULL );
-- ---------------------------------------------------------


-- Dump data of "student_courses" --------------------------
-- ---------------------------------------------------------


-- CREATE VIEW "batches_yet_to_start" ----------------------
-- CREATE VIEW "batches_yet_to_start" --------------------------
CREATE ALGORITHM = UNDEFINED DEFINER = `root`@`localhost` SQL SECURITY DEFINER VIEW `batches_yet_to_start`
AS select `cb`.`id` AS `batch_id`,upper(concat(`c`.`course_name`,'-',`cb`.`start_date`,'-',`cb`.`timings`)) AS `batch` from (`c2n`.`course_batch` `cb` join `c2n`.`course` `c` on((`cb`.`id` = `c`.`course_id`))) where (`cb`.`isCompleted` = 0);
-- -------------------------------------------------------------
-- ---------------------------------------------------------


-- CREATE VIEW "student_batches" ---------------------------
-- CREATE VIEW "student_batches" -------------------------------
CREATE ALGORITHM = UNDEFINED DEFINER = `root`@`localhost` SQL SECURITY DEFINER VIEW `student_batches`
AS select `b`.`id` AS `id`,`a`.`student_id` AS `student_id`,`c`.`course_name` AS `course_name`,`b`.`duration` AS `duration`,`b`.`start_date` AS `start_date`,`b`.`timings` AS `timings`,`a`.`no_of_absences` AS `no_of_absences`,`a`.`finalized_fee` AS `finalized_fee`,`a`.`paid_amount` AS `paid_amount`,`b`.`isCompleted` AS `isCompleted` from ((`c2n`.`student_batch` `a` join `c2n`.`course_batch` `b` on((`a`.`batch_id` = `b`.`id`))) join `c2n`.`course` `c` on((`b`.`course_id` = `c`.`course_id`)));
-- -------------------------------------------------------------
-- ---------------------------------------------------------


-- CREATE VIEW "students_by_referrer" ----------------------
-- CREATE VIEW "students_by_referrer" --------------------------
CREATE ALGORITHM = UNDEFINED DEFINER = `root`@`localhost` SQL SECURITY DEFINER VIEW `students_by_referrer`
AS select `c2n`.`student`.`id` AS `id`,`c2n`.`student`.`first_name` AS `first_name`,`c2n`.`student`.`last_name` AS `last_name`,`c2n`.`student`.`email_id` AS `email_id`,`c2n`.`student`.`mobile_no` AS `mobile_no`,`c2n`.`student`.`IsLead` AS `IsLead`,`c2n`.`student`.`doj` AS `doj`,`c2n`.`student`.`referredBy` AS `referredBy`,`c2n`.`employee`.`first_name` AS `referrer_name` from (`c2n`.`student` join `c2n`.`employee` on((`c2n`.`student`.`referredBy` = `c2n`.`employee`.`id`)));
-- -------------------------------------------------------------
-- ---------------------------------------------------------


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
-- ---------------------------------------------------------


