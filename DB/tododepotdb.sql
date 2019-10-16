-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema tooldepotdb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `tooldepotdb` ;

-- -----------------------------------------------------
-- Schema tooldepotdb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `tooldepotdb` DEFAULT CHARACTER SET utf8 ;
USE `tooldepotdb` ;

-- -----------------------------------------------------
-- Table `address`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `address` ;

CREATE TABLE IF NOT EXISTS `address` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `street` VARCHAR(45) NULL,
  `city` VARCHAR(45) NULL,
  `state` VARCHAR(45) NULL,
  `zip` VARCHAR(45) NULL,
  `country` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user` ;

CREATE TABLE IF NOT EXISTS `user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `address_id` INT NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `enabled` TINYINT(1) NOT NULL,
  `role` VARCHAR(45) NULL,
  `first_name` VARCHAR(45) NULL,
  `last_name` VARCHAR(45) NULL,
  `email` VARCHAR(45) NULL,
  `phone` VARCHAR(45) NULL,
  `photo` VARCHAR(1000) NULL,
  `create_date` DATETIME NULL,
  `update_date` DATETIME NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_user_address1_idx` (`address_id` ASC),
  CONSTRAINT `fk_user_address1`
    FOREIGN KEY (`address_id`)
    REFERENCES `address` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tool`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tool` ;

CREATE TABLE IF NOT EXISTS `tool` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `description` TEXT NULL,
  `type` VARCHAR(45) NULL,
  `cost_per_day` DOUBLE NULL,
  `available` TINYINT(1) NULL,
  `manufacture_date` DATETIME NULL,
  `condition` VARCHAR(100) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_tool_user1_idx` (`user_id` ASC),
  CONSTRAINT `fk_tool_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `review_of_lender`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `review_of_lender` ;

CREATE TABLE IF NOT EXISTS `review_of_lender` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `renter_review` TEXT NULL,
  `renter_rating` DOUBLE NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `review_of_renter`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `review_of_renter` ;

CREATE TABLE IF NOT EXISTS `review_of_renter` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tool_review` TEXT NOT NULL,
  `tool_rating` DOUBLE NULL,
  `lender_review` TEXT NULL,
  `lender_rating` DOUBLE NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tool_rental`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tool_rental` ;

CREATE TABLE IF NOT EXISTS `tool_rental` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tool_id` INT NOT NULL,
  `lender_review_id` INT NOT NULL,
  `borrow_review_id` INT NOT NULL,
  `checkout` DATETIME NULL,
  `returned` DATETIME NULL,
  `total_cost` DOUBLE NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_transaction_tool1_idx` (`tool_id` ASC),
  INDEX `fk_rental_lender_review1_idx` (`lender_review_id` ASC),
  INDEX `fk_rental_borrow_review1_idx` (`borrow_review_id` ASC),
  CONSTRAINT `fk_transaction_tool1`
    FOREIGN KEY (`tool_id`)
    REFERENCES `tool` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_rental_lender_review1`
    FOREIGN KEY (`lender_review_id`)
    REFERENCES `review_of_lender` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_rental_borrow_review1`
    FOREIGN KEY (`borrow_review_id`)
    REFERENCES `review_of_renter` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tool_photo`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tool_photo` ;

CREATE TABLE IF NOT EXISTS `tool_photo` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `tool_id` INT NULL,
  `photo_url` VARCHAR(500) NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_tool_photo_tool_idx` (`tool_id` ASC),
  CONSTRAINT `fk_tool_photo_tool`
    FOREIGN KEY (`tool_id`)
    REFERENCES `tool` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `skill`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `skill` ;

CREATE TABLE IF NOT EXISTS `skill` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(500) NULL,
  `cost` DOUBLE NULL,
  `duration` INT NULL,
  `available` TINYINT(1) NULL,
  `description` TEXT NULL,
  `expertise` VARCHAR(500) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `user_skill`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `user_skill` ;

CREATE TABLE IF NOT EXISTS `user_skill` (
  `user_id` INT NOT NULL,
  `skill_id` INT NOT NULL,
  PRIMARY KEY (`user_id`, `skill_id`),
  INDEX `fk_user_has_skill_skill1_idx` (`skill_id` ASC),
  INDEX `fk_user_has_skill_user1_idx` (`user_id` ASC),
  CONSTRAINT `fk_user_has_skill_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_skill_skill1`
    FOREIGN KEY (`skill_id`)
    REFERENCES `skill` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `review_of_customer`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `review_of_customer` ;

CREATE TABLE IF NOT EXISTS `review_of_customer` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `customer_review` TEXT NULL,
  `customer_rating` INT NULL,
  `title` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `review_of_worker`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `review_of_worker` ;

CREATE TABLE IF NOT EXISTS `review_of_worker` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `worker_review` TEXT NULL,
  `worker_rating` INT NULL,
  `title` VARCHAR(45) NULL,
  `recommend` TINYINT(1) NULL,
  `finished_on_time` TINYINT(1) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `skill_rental`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `skill_rental` ;

CREATE TABLE IF NOT EXISTS `skill_rental` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `skill_id` INT NOT NULL,
  `worker_review_id` INT NOT NULL,
  `customer_review_id` INT NOT NULL,
  `start_date` DATETIME NULL,
  `finish_date` DATETIME NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_skill_rental_skill1_idx` (`skill_id` ASC),
  INDEX `fk_skill_rental_worker_review1_idx` (`worker_review_id` ASC),
  INDEX `fk_skill_rental_customer_review1_idx` (`customer_review_id` ASC),
  CONSTRAINT `fk_skill_rental_skill1`
    FOREIGN KEY (`skill_id`)
    REFERENCES `skill` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_skill_rental_worker_review1`
    FOREIGN KEY (`worker_review_id`)
    REFERENCES `review_of_customer` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_skill_rental_customer_review1`
    FOREIGN KEY (`customer_review_id`)
    REFERENCES `review_of_worker` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

SET SQL_MODE = '';
DROP USER IF EXISTS tool@localhost;
SET SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';
CREATE USER 'tool'@'localhost' IDENTIFIED BY 'tool';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'tool'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `address`
-- -----------------------------------------------------
START TRANSACTION;
USE `tooldepotdb`;
INSERT INTO `address` (`id`, `street`, `city`, `state`, `zip`, `country`) VALUES (1, '123 Tool St', 'Tool', 'TO', '99999', NULL);

COMMIT;


-- -----------------------------------------------------
-- Data for table `user`
-- -----------------------------------------------------
START TRANSACTION;
USE `tooldepotdb`;
INSERT INTO `user` (`id`, `address_id`, `username`, `password`, `enabled`, `role`, `first_name`, `last_name`, `email`, `phone`, `photo`, `create_date`, `update_date`) VALUES (1, 1, 'tool', 'tool', 1, 'user', 'tool', 'tool', 'tool@tool.com', NULL, NULL, NULL, NULL);

COMMIT;

