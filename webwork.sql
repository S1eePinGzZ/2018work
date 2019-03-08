-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:3306
-- Generation Time: 2019-03-08 05:58:59
-- 服务器版本： 5.7.19
-- PHP Version: 5.6.31

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `webwork`
--

-- --------------------------------------------------------

--
-- 表的结构 `movies`
--

DROP TABLE IF EXISTS `movies`;
CREATE TABLE IF NOT EXISTS `movies` (
  `name` varchar(30) NOT NULL,
  `price` int(10) NOT NULL,
  `sitnum` int(10) NOT NULL,
  PRIMARY KEY (`sitnum`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `movies`
--

INSERT INTO `movies` (`name`, `price`, `sitnum`) VALUES
('超时空同居', 45, 2),
('复仇者联盟3：无限战争', 45, 4),
('哆啦A梦：大雄的金银岛', 45, 3),
(' 寂静之地', 45, 5),
('猛虫过江', 45, 6),
(' 深海越狱', 45, 7),
(' 完美陌生人', 45, 8),
('幸福马上来', 45, 9),
('厕所英雄', 45, 1),
('侏罗纪世界2', 45, 10);

-- --------------------------------------------------------

--
-- 表的结构 `orde`
--

DROP TABLE IF EXISTS `orde`;
CREATE TABLE IF NOT EXISTS `orde` (
  `user` varchar(30) DEFAULT NULL,
  `movname` varchar(50) DEFAULT NULL,
  `price` int(10) DEFAULT NULL,
  `sit` varchar(500) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `orde`
--

INSERT INTO `orde` (`user`, `movname`, `price`, `sit`) VALUES
('17729349748', '幸福马上来', 45, ',7_10,8_10'),
('17729349748', '哆啦A梦：大雄的金银岛', 45, ',4_6'),
('17729349748', '完美陌生人', 45, ',4_7,5_7,6_7'),
('18872497848', '猛虫过江', 45, ',1_8,1_9'),
('18872497848', '厕所英雄', 45, ',1_6'),
('17746646588', '猛虫过江', 45, ',2_3'),
('17746646588', '猛虫过江', 45, ',5_10'),
('17729487478', '猛虫过江', 45, ',10_10'),
('18991175585', '厕所英雄', 45, ',2_6,2_7'),
('17729349744', '超时空同居', 45, ',1_5,2_5'),
('17729349744', '猛虫过江', 45, ',6_7,7_6,7_7'),
('17729349748', '复仇者联盟3：无限战争', 45, ',4_7,5_5,5_7,6_5,6_7,6_8,7_6'),
('18710630180', '哆啦A梦：大雄的金银岛', 45, ',2_6,2_7,2_8'),
('17729349748', '超时空同居', 45, ',1_8'),
('17729349748', '复仇者联盟3：无限战争', 45, ',1_10'),
('17729349748', '复仇者联盟3：无限战争', 45, ',2_10'),
('17729349748', '猛虫过江', 45, ',1_10'),
('17729349747', '复仇者联盟3：无限战争', 45, ',7_3,8_3'),
('17729349747', '复仇者联盟3：无限战争', 45, ',6_10,7_10,8_10');

-- --------------------------------------------------------

--
-- 表的结构 `sitmore`
--

DROP TABLE IF EXISTS `sitmore`;
CREATE TABLE IF NOT EXISTS `sitmore` (
  `siting` varchar(1000) DEFAULT NULL,
  `id` varchar(500) NOT NULL,
  `moviename` varchar(50) DEFAULT NULL,
  `sitnum` int(10) NOT NULL,
  `prices` int(10) NOT NULL,
  PRIMARY KEY (`sitnum`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `sitmore`
--

INSERT INTO `sitmore` (`siting`, `id`, `moviename`, `sitnum`, `prices`) VALUES
('3_2,1_9,1_10,2_9,2_10,1_8,2_8,5_6,6_7,5_8,5_9,6_8,1_6,2_6,2_7', '', '厕所英雄', 1, 45),
('5_1,1_5,2_5,1_8', '', '超时空同居', 2, 45),
('1_6,4_7,5_5,5_7,6_5,6_7,6_8,7_6,1_10,2_10,2_4,1_9,1_7,7_3,8_3,6_10,7_10,8_10', '', '复仇者联盟3：无限战争', 4, 45),
('9_3,4_6,2_6,2_7,2_8', '', '哆啦A梦：大雄的金银岛', 3, 45),
('7_8,4_4,5_4', '', '寂静之地', 5, 45),
('6_4,4_6,5_6,5_8,6_10,7_10,8_10,1_8,1_9,2_3,5_10,10_10,6_7,7_6,7_7,1_10,2_10', '', '猛虫过江', 6, 45),
('2_2', '', '深海越狱', 7, 45),
('9_2,4_7,5_7,6_7', '', '完美陌生人', 8, 45),
(',1_10,2_10,5_7,6_7,1_7,2_7,7_10,8_10', '', '幸福马上来', 9, 45),
('3_3', '', '侏罗纪世界2', 10, 45);

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` varchar(20) NOT NULL,
  `pass` varchar(15) NOT NULL,
  `name` varchar(20) NOT NULL,
  `moviesnum` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`id`, `pass`, `name`, `moviesnum`) VALUES
('17729349748', 'AAAAAsuna.', 'S1eePinG', ''),
('17722229784', '1234', 'qqqq', ''),
('17722229787', '1234', 'qqqq', ''),
('17722229781', '1234', 'qqqq', ''),
('17722229782', '1234', 'qqqq', ''),
('17722226597', 'AAAAAsuna.', '1651651', NULL),
('18710630180', 'pear521', '刘翼欣', NULL),
('18872497848', 'AAAA', '123', NULL),
('17746646588', 'AAAAA', '174', NULL),
('17729487478', '123456', '89', NULL),
('18991175585', '123', '高明昊瓜皮', NULL),
('17729349744', '123456', '123456', NULL),
('17729349747', '1111111', '1232434', NULL);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
