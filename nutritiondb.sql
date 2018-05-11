-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema nutritiondb
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `nutritiondb` ;

-- -----------------------------------------------------
-- Schema nutritiondb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `nutritiondb` DEFAULT CHARACTER SET utf8 ;
USE `nutritiondb` ;

-- -----------------------------------------------------
-- Table `water`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `water` ;

CREATE TABLE IF NOT EXISTS `water` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `amountInOunces` DOUBLE NOT NULL,
  `date` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

SET SQL_MODE = '';
GRANT USAGE ON *.* TO nutritionuser@localhost;
 DROP USER nutritionuser@localhost;
SET SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';
CREATE USER 'nutritionuser'@'localhost' IDENTIFIED BY 'water';

GRANT SELECT, INSERT, TRIGGER, UPDATE, DELETE ON TABLE * TO 'nutritionuser'@'localhost';

SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
