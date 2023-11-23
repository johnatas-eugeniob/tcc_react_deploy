-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 24, 2023 at 01:38 PM
-- Server version: 8.0.30
-- PHP Version: 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `acpetshelper`
--

-- --------------------------------------------------------

--
-- Table structure for table `doações`
--

CREATE TABLE `doações` (
  `id` int NOT NULL,
  `id_usu` int NOT NULL,
  `id_post` int NOT NULL,
  `valor` int NOT NULL,
  `data_don` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `favoritos`
--

CREATE TABLE `favoritos` (
  `id` int NOT NULL,
  `id_usu` int NOT NULL,
  `id_post` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `postagens`
--

CREATE TABLE `postagens` (
  `id` int NOT NULL,
  `id_usu` int NOT NULL,
  `titulo` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `data_cri` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `salvos`
--

CREATE TABLE `salvos` (
  `id` int NOT NULL,
  `id_usu` int NOT NULL,
  `id_post` int NOT NULL,
  `data_salvo` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `subpostagens`
--

CREATE TABLE `subpostagens` (
  `id_text` int NOT NULL,
  `id_post` int NOT NULL,
  `texto` text NOT NULL,
  `imagens` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int NOT NULL,
  `nome` varchar(220) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` text CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `senha` varchar(61) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefone` varchar(15) NOT NULL,
  `cep` varchar(9) NOT NULL,
  `rua` varchar(120) NOT NULL,
  `bairro` varchar(120) NOT NULL,
  `cidade` varchar(150) NOT NULL,
  `imagem` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci DEFAULT 'logica-tcc/img/default_user_image.png',
  `token` varchar(350) NOT NULL,
  `sit_user_id` int NOT NULL DEFAULT '3',
  `dia_criacao` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `doações`
--
ALTER TABLE `doações`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_post` (`id_post`),
  ADD KEY `id_usu` (`id_usu`);

--
-- Indexes for table `favoritos`
--
ALTER TABLE `favoritos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_post` (`id_post`),
  ADD KEY `id_usu` (`id_usu`);

--
-- Indexes for table `postagens`
--
ALTER TABLE `postagens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_usu` (`id_usu`);

--
-- Indexes for table `salvos`
--
ALTER TABLE `salvos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `id_post` (`id_post`),
  ADD KEY `id_usu` (`id_usu`);

--
-- Indexes for table `subpostagens`
--
ALTER TABLE `subpostagens`
  ADD PRIMARY KEY (`id_text`),
  ADD KEY `id_post` (`id_post`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `doações`
--
ALTER TABLE `doações`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `favoritos`
--
ALTER TABLE `favoritos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `postagens`
--
ALTER TABLE `postagens`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `salvos`
--
ALTER TABLE `salvos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `subpostagens`
--
ALTER TABLE `subpostagens`
  MODIFY `id_text` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `doações`
--
ALTER TABLE `doações`
  ADD CONSTRAINT `doações_ibfk_1` FOREIGN KEY (`id_post`) REFERENCES `postagens` (`id`),
  ADD CONSTRAINT `doações_ibfk_2` FOREIGN KEY (`id_usu`) REFERENCES `user` (`id`);

--
-- Constraints for table `favoritos`
--
ALTER TABLE `favoritos`
  ADD CONSTRAINT `favoritos_ibfk_1` FOREIGN KEY (`id_post`) REFERENCES `postagens` (`id`),
  ADD CONSTRAINT `favoritos_ibfk_2` FOREIGN KEY (`id_usu`) REFERENCES `user` (`id`);

--
-- Constraints for table `postagens`
--
ALTER TABLE `postagens`
  ADD CONSTRAINT `postagens_ibfk_1` FOREIGN KEY (`id_usu`) REFERENCES `user` (`id`);

--
-- Constraints for table `salvos`
--
ALTER TABLE `salvos`
  ADD CONSTRAINT `salvos_ibfk_1` FOREIGN KEY (`id_post`) REFERENCES `postagens` (`id`),
  ADD CONSTRAINT `salvos_ibfk_2` FOREIGN KEY (`id_usu`) REFERENCES `user` (`id`);

--
-- Constraints for table `subpostagens`
--
ALTER TABLE `subpostagens`
  ADD CONSTRAINT `subpostagens_ibfk_1` FOREIGN KEY (`id_post`) REFERENCES `postagens` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
