--
-- Variables declarations
--

-- CHALLENGE BASIC DATABASE CREATION
DROP DATABASE IF EXISTS challenge;
CREATE DATABASE IF NOT EXISTS challenge;

USE challenge;

ALTER SCHEMA challenge DEFAULT CHARACTER SET utf8 DEFAULT COLLATE utf8_general_ci;

DROP TABLE IF EXISTS `news`;
DROP TABLE IF EXISTS `votes`;
DROP TABLE IF EXISTS `blocked_ips`;

-- CREATE TABLE `news` (
--     `id`              CHAR(36)		 UNIQUE NOT NULL
--     , `title`         VARCHAR(64) 	 NOT NULL
--     , `link`          VARCHAR(64) 	 UNIQUE DEFAULT ''
--     , `up_votes`      VARCHAR(64)    NOT NULL
--     , `down_votes`    CHAR(16) 	     DEFAULT ''
--     , `ip`            CHAR(16)       DEFAULT ''
--     , `created_at`    TIMESTAMP      DEFAULT CURRENT_TIMESTAMP
--     , `updated_at`    TIMESTAMP      DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
--     , PRIMARY KEY (id)
-- ) ENGINE=INNODB DEFAULT CHARSET=utf8mb4;

-- CREATE TABLE `votes` (
--     `id`                CHAR(36)		 UNIQUE NOT NULL
--     , `news_id`         VARCHAR(64) 	 NOT NULL
--     , `direction_vote`  VARCHAR(64) 	 UNIQUE DEFAULT ''
--     , `ip`              VARCHAR(64)      NOT NULL
--     , `created_at`      TIMESTAMP        DEFAULT CURRENT_TIMESTAMP
--     , PRIMARY KEY (id)
--     , FOREIGN KEY (news_id) REFERENCES news(id)
-- ) ENGINE=INNODB DEFAULT CHARSET=utf8mb4;

-- CREATE TABLE `blocked_ips` (
--     `id`              CHAR(36)		 UNIQUE NOT NULL
--     , `ip`         VARCHAR(64) 	 NOT NULL
--     , `until`          VARCHAR(64) 	 UNIQUE DEFAULT ''
--     , PRIMARY KEY (id)
-- ) ENGINE=INNODB DEFAULT CHARSET=utf8mb4;