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

 Date: 22/01/2021 16:35:59
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
  `user_name` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `refresh_token` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
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
  `venue_id` char(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(500) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `short_desc` varchar(2000) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `long_desc` varchar(5000) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `image_link` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `time_start` timestamp(0) NOT NULL DEFAULT current_timestamp(0) ON UPDATE CURRENT_TIMESTAMP(0),
  `time_end` timestamp(0) NOT NULL DEFAULT current_timestamp(0) ON UPDATE CURRENT_TIMESTAMP(0),
  `status` int(1) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_conference_venus`(`venue_id`) USING BTREE,
  CONSTRAINT `fk_conference_venus` FOREIGN KEY (`venue_id`) REFERENCES `venue` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of conference
-- ----------------------------
INSERT INTO `conference` VALUES ('0b86ca12-57c2-45e4-87fb-237d46455567', 'c5558389-01d5-4aa0-a72d-42979e430b16', 'CỖ MÁY BÁN HÀNG CHO KHÁCH HÀNG GIÀU & SIÊU GIÀU', 'VÌ SAO BẠN Ở ĐÂY VÀ ĐANG ĐỌC NHỮNG DÒNG CHỮ NÀY?\r\n\r\nChúng tôi rất vui được gặp bạn bởi những ý tưởng chúng tôi sắp chia sẻ với bạn sẽ tạo ra sự khác biệt tích cực trong cuộc đời của bạn.\r\n\r\n VÌ SAO BẠN Ở ĐÂY VÀ ĐANG ĐỌC NHỮNG DÒNG CHỮ NÀY?\r\n\r\nChúng tôi rất vui được gặp bạn bởi những ý tưởng chúng tôi sắp chia sẻ với bạn sẽ tạo ra sự khác biệt tích cực trong cuộc đời của bạn', 'Bạn nhận ra doanh nghiệp của mình đang giảm tốc không phanh vì lượng khách hàng ngày một suy giảm, trong khi nguồn vốn ngày càng cạn kiệt.\r\nBạn quá mệt mỏi vì phải đốt quá nhiều tiền cho quảng cáo mà không thu hút được đủ khách hàng chất lượng mua hàng.\r\nBan đang khao khát sở hữu thật nhiều những khách hàng có năng lực chi trả cao cho những sản phẩm& dịch vụ mà bạn đang kinh doanh\r\nBạn đang đi tìm lời giải cho cỗ máy doanh nghiệp khi nguồn lực nội tại vừa thiếu & yếu, không đủ sức bứt phá trước thị trường biến động khôn lường.', 'https://images.tkbcdn.com/1/1560/600/Upload/eventcover/2020/12/30/6BC317.jpg', '2021-01-07 10:00:00', '2021-01-07 12:00:00', 0);
INSERT INTO `conference` VALUES ('324d2e95-d4b6-4824-ab65-947954c34574', '0482f83e-e563-44dc-a647-fa1a59365c85', 'PROPERTY EXPO 2021| CÙNG SHARK HƯNG NHẬN ĐỊNH THỊ TRƯỜNG BẤT ĐỘNG SẢN 2021- HN', 'Thị trường bất động sản đang trải qua những tháng cuối cùng của năm 2020. Dù bức tranh chung của cả năm TƯƠNG ĐỐI ẢM ĐẠM nhưng những dấu hiệu khả quan không phải là không có. Làn sóng đầu tư, mua sắm dịp cuối năm sẽ tác động tích cực đến thị trường bất động sản cả nước. Nhiều chủ đầu tư đã rục rịch bung hàng kèm theo CHÍNH SÁCH ƯU ĐÃI ĐẶC BIỆT ĐỂ KÍCH CẦU. Đất đai ở những địa phương trước đây phát triển nóng đã tăng mạnh, thậm chí nhiều nơi VƯỢT NGƯỠNG giá trị thật của thị trường. Bên cạnh đó, việc chính phủ quyết tâm đẩy mạnh ĐẦU TƯ HẠ TẦNG như một giải pháp thúc đẩy kinh tế mở ra các cơ hội phát triển và thúc đẩy thị trường bất động sản trong dài hạn hình thành từ việc kết nối và quy hoạch vùng.', 'Tuy nhiên những nút thắt PHÁP LÝ trong việc cấp các dự án mới, những bất cập về tạo BONG BÓNG GIÁ CẢ và thị trường ảo ở những địa phương bị đồn thổi thông tin sốt đất. Giá chung cư ở các đô thị lớn bị đẩy lên ngưỡng trần dẫn đến tỉ lệ tiêu thụ chậm. Đã làm các nhà đầu tư khó tiếp cận được nguồn cung chính thống và nắm bắt được các cơ hội đầu tư tuyệt vời trong năm 2021.\r\n\r\nVậy làm thế nào để các nhà đầu tư xác định được THỜI ĐIỂM ĐẦU TƯ vào bất động sản. Nhà đầu tư cần trang bị những kiến thức gì về thị trường đầu tư và kinh doanh trong linh vực bất động sản để KHÔNG MẤT NHIỀU THỜI GIAN VÀ TIỀN BẠC?\r\n\r\nTại chương trình đặc biệt PROPERTY EXPO 2021 một ngày duy nhất trong năm chia sẻ chuyên sâu về chủ đề bất động sản: các THÔNG TIN tổng quan mới nhất, DỰ BÁO về thị trường, đánh giá của doanh nghiệp từ thực tế hoạt động kinh doanh với nội dung chất lượng, đa chiều, bám sát thị trường bất động sản hiện tại và dài hạn. Chương trình trực tiếp cùng SHARK PHẠM THANH HƯNG và các chuyên gia hàng đầu trong lĩnh vực bất động sản sẽ giúp bạn tiết kiệm được rất nhiều tiền và thời gian cho các thương vụ đầu tư sau này.', 'https://images.tkbcdn.com/1/1560/600/Upload/eventcover/2020/12/30/0EB9D9.jpg', '2021-01-07 13:30:00', '2021-01-07 17:00:00', 0);
INSERT INTO `conference` VALUES ('484066f2-d29c-48d9-8eaa-bbb48a9d9f0a', 'dafdde7b-472a-4cdd-90fb-8ebe6ee78ac9', 'THỜI TRANG - NGHỆ THUẬT HAY THƯƠNG MẠI? | IS FASHION AN ART OR A BUSINESS?', 'Thời trang là nghệ thuật hay là thương mại? Khát vọng của nghệ sĩ khác gì với mục đích của nhà thiết kế? Trong cuốn sách nổi tiếng ‘Xuyên thấu những lớp y phục’ (\'Seeing Through Clothes\'), nhà văn Anne Hollander đã khẳng định, ‘Đầm váy cũng là một dạng thức nghệ thuật thị giác, một tạo tác hình ảnh hiện hữu.’ Nghĩ về thời trang như một hình thức nghệ thuật - tại sao điều này lại đặc biệt quan trọng với các nhà thiết kế Việt Nam, liệu đây có thể là cầu nối giữa bản sắc Việt Nam trên sàn diễn và trong đời sống?', 'Cuộc đối thoại giữa Giáo sư-nhà nhân học Ann Marie Leshkowich, Giáo sư-sử gia Martina Thucnhi Nguyen và Giám tuyển Dolla S. Merrillees sẽ soi xét chuỗi câu hỏi trên thông qua ví dụ là những nhà thiết kế thời trang nổi bật (ở nhiều thời kỳ khác nhau) của Việt Nam; cũng như trong bối cảnh là các triển lãm thời trang ngày một trở nên phổ biến - cả về quy mô lẫn chất lượng, và xuất hiện nhiều hơn ở cả phòng tranh lẫn bảo tàng.\r\n\r\nCuộc đối thoại này cũng sẽ khám phá ảnh hưởng của tính thẩm mỹ và của các yếu tố thị trường lên thực hành gìn giữ cũng như làm mới các di sản văn hoá; đồng thời luận bàn về nhà thiết kế thời trang ở vị trí vừa là một nghệ sĩ, vừa là người truyền tải bản dạng và nhận thức về văn hóa và giới - bao gồm cả câu hỏi tưởng đơn giản mà phức tạp: Liệu có cần thiết phải tồn tại một căn tính nghệ thuật thuần Việt trong thiết kế thời trang địa phương không?\r\n\r\nChúng tôi sẽ gửi hướng dẫn và đường dẫn tham dự buổi trò chuyện trên ZOOM qua email của bạn trước 02 ngày sự kiện diễn ra. Truy cập website của The Factory để đọc thêm thông tin các diễn giả và các chương trình liên quan. ', 'https://images.tkbcdn.com/1/1560/600/Upload/eventcover/2020/12/29/71777E.jpg', '2021-01-18 08:30:00', '2021-01-18 11:00:00', 0);
INSERT INTO `conference` VALUES ('80862c4c-e2b2-4fc5-a5bd-d78062f8a9ca', '33ef012e-74d0-4225-8d35-2b24fbcd7e62', 'Thuỷ Nguyễn - Mộng bình thường | Thuỷ Nguyễn - An Everyday dream', 'Trung tâm Nghệ thuật Đương đại The Factory và Thuy Design House hân hạnh giới thiệu triển lãm ‘Thuỷ Nguyễn - Mộng bình thường’, do Dolla S. Merrillees giám tuyển. Tại triển lãm, 60 tác phẩm thời trang bao gồm các thiết kế áo dài mang dấu ấn đặc trưng trong sự nghiệp thời trang của Thuỷ Nguyễn, trong đó có những thiết kế chưa hề được trình diễn, sẽ được giới thiệu. Cùng với áo dài, triển lãm cũng trưng bày những thiết kế độc đáo về thêu, ren, hoạ tiết gấm hay thổ cẩm; những hiện vật, phụ kiện thời trang trong bộ sưu tập cá nhân của Thuỷ Nguyễn.', 'Với tiêu đề lấy cảm hứng từ bài hát nổi tiếng \'Ngậm Ngùi\'*, triển lãm mở ra các khía cạnh khác nhau về Thuy Design House, được tái hiện thông qua các diễn cảnh thiết kế công phu và đầy kịch tính, thể hiện một cách phong phú và rõ nét sự đa dạng của các bộ sưu tập cũng như những nguồn cảm hứng giúp hình thành nên chúng: từ tình mẫu tử, quê hương, tới đời sống tâm linh và thiên nhiên. Bên cạnh đó, tại không gian triển lãm cũng như trong các mô-típ thiết kế của Thuỷ, ta cũng sẽ bắt gặp các câu thành ngữ, tục ngữ, đồng dao, truyện cổ tích, truyền thuyết; hay hình ảnh các tác phẩm mỹ thuật hiện đại Việt Nam, phản ánh tình cảm và sự gắn kết của Thuỷ đối với văn hoá truyền thống địa phương.\r\n\r\nHoạt động sáng tạo của Thủy Nguyễn trải rộng nhiều lĩnh vực khác nhau, bao gồm hội họa, sắp đặt nghệ thuật, phim, thời trang và thiết kế. Năm 2021 tới đánh dấu 10 năm kể từ ngày Thuỷ thành lập thương hiệu ‘Thuy Design House’ (được nhìn nhận như một trong những nhà mốt hàng đầu trong ngành công nghiệp thời trang phát triển nhanh chóng ở Việt Nam) - một cột mốc đáng chú ý để Thuỷ nhìn lại và chia sẻ cuộc sống cũng như hành trình thời trang của mình.', 'https://images.tkbcdn.com/1/1560/600/Upload/eventcover/2020/10/23/B6CBE8.jpg', '2021-01-20 10:00:00', '2021-01-20 12:00:00', 0);
INSERT INTO `conference` VALUES ('ff55b3dc-5e85-42ea-ac10-74b529cc3447', '4fe59fa2-d2aa-4574-94bd-d102d6628fd1', 'CASHFLOW- QUẢN LÝ TÀI CHÍNH & DÒNG TIỀN HIỆU QUẢ', '+ Bạn đang loay hoay và chưa thoát khoải vòng luẩn quẩn tài chính và tìm ra cách làm giàu cho bản thân mình\r\n\r\n \r\n\r\n+ Bạn đang có thể hiểu sai và chưa phân biệt rõ ràng giữ tiêu sản và tài sản\r\n\r\n \r\n\r\n+ Bạn đang gặp nhiều vấn đề về tiền bạc, mà chưa tìm được cách để giải quyết .\r\n\r\n \r\n\r\n+Thu nhập của bạn rất cao, bạn tạo ra rất nhiều tiền nhưng cuối tháng số tiền đó đang còn lại rất ít\r\n\r\n \r\n\r\n+ Bạn đang tìm kiếm những người cùng chi hướng khao khát làm giàu, cùng chia sẻ kiến thức đầu tư và hợp tác làm ăn.\r\n\r\n \r\n\r\n+ Bạn đang có một kế hoạch tài chính nhưng không biết hiện thực hoá chúng ra sao?\r\n\r\n \r\n\r\n+Bạn  luôn mong muốn một cuộc sống thực sự thoải mái và vui vẻ.', 'Đến với chương trình bạn sẽ được học tập và trãi nghiệm thông qua một trò chơi tài chính hiệu quả (Game Cashflow - Robert Kiyosaki ) .Cashflow là một trò chơi dựa trên cuốn sách Dạy con làm giàu (Rich Dad Poor Dad) của Robert Kiyosaki. Mục đích của trò chơi để dạy cho người chơi cách quản lý dòng tiền.\r\n\r\n \r\n\r\nQua trò chơi mỗi ngày bạn sẽ nhận được nhiều bài học quý giá:\r\n\r\n \r\n\r\n+ Đỉnh Cao Công thức của Thầy Robert Kiyosaki để phân biệt ràng buộc Tài sản và Tiêu sản\r\n\r\n \r\n\r\n+ Bí mật có thể giúp bạn biến tiêu chuẩn trở thành sản phẩm\r\n\r\n \r\n\r\n+ Sự vận hành và hoạt động của dòng tiền\r\n\r\n \r\n\r\n+ Cơ hội được trải nghiệm và làm việc với bảng báo cáo tài chính giúp bạn nhạy bén hơn với những con số Tài chính\r\n\r\n \r\n\r\n+ Rèn luyện những kỹ năng nói chuyện và cách thức sử dụng đòn bẩy về tiền bạc và con người\r\n\r\n \r\n\r\n+ Cách quản lý dòng tiền, nhìn nhận và phân tích CƠ SỞ ĐẦU TƯ TRẢI NGHIỆM Game Cashfow\r\n\r\n \r\n\r\n“Nếu bạn muốn nâng  cao kỹ năng tài chính và lưu lượng tiền mặt, tôi đề nghị bạn hãy chơi CASHFLOW và chơi thường xuyên. Trò chơi dạy bạn Suy nghĩ như một CFO – Một giám đốc tài chính, thành viên quan trọng trong bất kỳ e-kíp lãnh đạo nào.” Rober. T. Kiyosaki ', 'https://images.tkbcdn.com/1/1560/600/Upload/eventcover/2020/05/20/DA701A.jpg', '2021-01-25 14:00:00', '2021-01-25 17:00:00', 0);

-- ----------------------------
-- Table structure for conference_participants
-- ----------------------------
DROP TABLE IF EXISTS `conference_participants`;
CREATE TABLE `conference_participants`  (
  `id` char(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `conference_id` char(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `user_id` char(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `status` int(1) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_participants_user`(`user_id`) USING BTREE,
  INDEX `fk_participants_conference`(`conference_id`) USING BTREE,
  CONSTRAINT `fk_participants_conference` FOREIGN KEY (`conference_id`) REFERENCES `conference` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `fk_participants_user` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of conference_participants
-- ----------------------------
INSERT INTO `conference_participants` VALUES ('07985a9e-ec13-43d1-a865-261636e546b9', '484066f2-d29c-48d9-8eaa-bbb48a9d9f0a', 'fd5bd7a4-52c3-474d-a482-74e01b318311', 0);
INSERT INTO `conference_participants` VALUES ('0b5f4e42-a819-45a2-ad53-5aedc31f94d6', 'ff55b3dc-5e85-42ea-ac10-74b529cc3447', 'fd5bd7a4-52c3-474d-a482-74e01b318311', 0);
INSERT INTO `conference_participants` VALUES ('38e39baf-6067-47c6-8131-daa143726480', '80862c4c-e2b2-4fc5-a5bd-d78062f8a9ca', 'fd5bd7a4-52c3-474d-a482-74e01b318311', 0);
INSERT INTO `conference_participants` VALUES ('dea1861f-cf92-4c2c-9116-173a6a133ee5', '0b86ca12-57c2-45e4-87fb-237d46455567', '002e7e4f-325c-4f71-b98f-f4ac8ed704a0', 0);
INSERT INTO `conference_participants` VALUES ('ed316889-d735-4402-b4e2-9155a08433b1', '324d2e95-d4b6-4824-ab65-947954c34574', '002e7e4f-325c-4f71-b98f-f4ac8ed704a0', 0);
INSERT INTO `conference_participants` VALUES ('f3ffd36c-6ce5-486f-b562-bd8a9fdcf326', '324d2e95-d4b6-4824-ab65-947954c34574', 'fd5bd7a4-52c3-474d-a482-74e01b318311', 0);

-- ----------------------------
-- Table structure for notification
-- ----------------------------
DROP TABLE IF EXISTS `notification`;
CREATE TABLE `notification`  (
  `id` char(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `id_user` char(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `content` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `time` timestamp(0) NOT NULL DEFAULT current_timestamp(0) ON UPDATE CURRENT_TIMESTAMP(0),
  `status` int(255) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  INDEX `fk_notification_user`(`id_user`) USING BTREE,
  CONSTRAINT `fk_notification_user` FOREIGN KEY (`id_user`) REFERENCES `user` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user`  (
  `id` char(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `user_name` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `password` varchar(100) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `phone_number` char(10) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `is_active` int(1) NOT NULL,
  `refresh_token` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('002e7e4f-325c-4f71-b98f-f4ac8ed704a0', 'Hoàng Văn Long', 'hvlong', '$2a$08$vhnHz/9bCgKNewPIRF9ofuLZMRxh8Ks1qgL19.vqd1SWbItjnj..O', 'hvlong@gmail.com', NULL, 1, 'VAvWiWue8z65zJTYNkI6U696sdod3nlNxKIwgjcD6317YKmeUMiuN5q4EyVUbzVr3UcaUZD5VuP2TSK4');
INSERT INTO `user` VALUES ('61a66363-e6bd-40dd-8588-e58bc92ebe4a', 'Âu Dương Phong', 'auphong', '$2a$08$1GSbXW43U4gH.4h3zsqD5uNuri/yuI/948Pv1QpQ48ChJT7qH6O7C', 'auphong009@gmail.com', NULL, 1, 'wm19zMdOWq9zJFoaaBiUT9kuPBt44stBiJn8bhwlEvNGKdDUn64nUuWDhMq01ld5NnW9NlRiPkpZcLJw');
INSERT INTO `user` VALUES ('fd5bd7a4-52c3-474d-a482-74e01b318311', 'Dương Văn Khang', 'dvkhangnt', '$2a$08$P6qDJNQC1RvBdFDZ3ERDN.l2LHOcRRwXxWygF9bSUjDAxS1YT7EWi', 'dvkhangnt@gmail.comm', '0347347185', 1, 'WDFMc0jE43xkGVWWFAIb11hERAmeDVuL9vNXYxLIUlMbYg0Lq7k3rVAhnnU94GlNOtRuX2FFLwASYz31');

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

-- ----------------------------
-- Records of venue
-- ----------------------------
INSERT INTO `venue` VALUES ('0482f83e-e563-44dc-a647-fa1a59365c85', 'Hội Trường A', 'Phòng A001', 100);
INSERT INTO `venue` VALUES ('17000e2e-58bb-4c72-a2ad-46c8db9f5bf4', 'Hội Trường G', 'Phòng A102', 200);
INSERT INTO `venue` VALUES ('2261b46e-4352-4a12-8601-db3ab78cf304', 'Hội Trường K', 'Phòng A201', 600);
INSERT INTO `venue` VALUES ('33ef012e-74d0-4225-8d35-2b24fbcd7e62', 'Hội Trường B', 'Phòng A002', 150);
INSERT INTO `venue` VALUES ('4fe59fa2-d2aa-4574-94bd-d102d6628fd1', 'Hội Trường C', 'Phòng A003', 150);
INSERT INTO `venue` VALUES ('5f6c2dd8-2de0-4765-94ec-3cef99dbc86d', 'Hội Trường F', 'Phòng A101', 200);
INSERT INTO `venue` VALUES ('780d6740-207d-4203-a133-42dd6b752ed2', 'Hội Trường J', 'Phòng A105', 500);
INSERT INTO `venue` VALUES ('813aab3c-dea5-4333-b7aa-02af2de5d8a9', 'Hội Trường H', 'Phòng A104', 400);
INSERT INTO `venue` VALUES ('c5558389-01d5-4aa0-a72d-42979e430b16', 'Hội Trường E', 'Phòng A005', 175);
INSERT INTO `venue` VALUES ('ced79b24-dcc0-4730-9e8b-14324529d1c5', 'Hội Trường I', 'Phòng A103', 300);
INSERT INTO `venue` VALUES ('dafdde7b-472a-4cdd-90fb-8ebe6ee78ac9', 'Hội Trường D', 'Phòng A004', 175);

SET FOREIGN_KEY_CHECKS = 1;
