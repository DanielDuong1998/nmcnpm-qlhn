/*
 Navicat Premium Data Transfer

 Source Server         : QuanLyHoiNghi
 Source Server Type    : MySQL
 Source Server Version : 100414
 Source Host           : localhost:3306
 Source Schema         : quanlyhoinghi

 Target Server Type    : MySQL
 Target Server Version : 100414
 File Encoding         : 65001

 Date: 15/11/2020 12:03:50
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin`  (
  `id` char(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `user_name` char(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` char(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `email` char(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `refresh_token` char(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES ('7e37ea96-2e84-4bcf-94b1-f79015d53117', 'Âu Dương Phong', 'auphong', '$2a$08$6fSgE6B0yDHXFYhopTafgOT6DXZaZJfRClCvomBTXdJDhb8tvrTim', 'auphong009@gmail.com', 'uPi1YxYxpCKjmbXbgakrT1GgBVWOX4itCLMCFzRkx3rPtR2c3IDFkJQWKWcvnxUufKP7NHYEAKwLfwz2');

-- ----------------------------
-- Table structure for conference
-- ----------------------------
DROP TABLE IF EXISTS `conference`;
CREATE TABLE `conference`  (
  `id` char(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `id_venus` char(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `short_desc` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `long_desc` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `image_link` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `time_start` timestamp(0) NOT NULL DEFAULT current_timestamp(0) ON UPDATE CURRENT_TIMESTAMP(0),
  `status` int(1) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for conference_participants
-- ----------------------------
DROP TABLE IF EXISTS `conference_participants`;
CREATE TABLE `conference_participants`  (
  `id` char(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `conference_id` char(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `user_id` char(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `status` int(1) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` char(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `user_name` char(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` char(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `email` char(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `is_active` int(1) NOT NULL,
  `refresh_token` char(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('61a66363-e6bd-40dd-8588-e58bc92ebe4a', 'Âu Dương Phong', 'auphong', '$2a$08$1GSbXW43U4gH.4h3zsqD5uNuri/yuI/948Pv1QpQ48ChJT7qH6O7C', 'auphong009@gmail.com', 1, 'wm19zMdOWq9zJFoaaBiUT9kuPBt44stBiJn8bhwlEvNGKdDUn64nUuWDhMq01ld5NnW9NlRiPkpZcLJw');
INSERT INTO `user` VALUES ('fd5bd7a4-52c3-474d-a482-74e01b318311', 'Dương Văn Khang', 'dvkhangnt', '$2a$08$zFJlK5RPdMFjFBJTvvTAduGq4WJGkSHOXxdDfIo9fsFOcQO0xcXk6', 'dvkhangnt@gmail.com', 1, '');

-- ----------------------------
-- Table structure for venue
-- ----------------------------
DROP TABLE IF EXISTS `venue`;
CREATE TABLE `venue`  (
  `id` char(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `address` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `capacity` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
