-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le :  mar. 22 oct. 2019 à 10:56
-- Version du serveur :  10.3.16-MariaDB
-- Version de PHP :  7.1.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `agriparc`
--

-- --------------------------------------------------------

--
-- Structure de la table `agriculteur`
--

CREATE TABLE `agriculteur` (
  `id` int(11) NOT NULL,
  `nom` varchar(65) NOT NULL,
  `prenom` varchar(65) NOT NULL,
  `mail` varchar(65) NOT NULL,
  `gaec_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `gaecs`
--

CREATE TABLE `gaecs` (
  `id` int(11) NOT NULL,
  `nom` varchar(65) NOT NULL,
  `adresse` varchar(256) NOT NULL,
  `mail` varchar(65) NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `gaecs`
--

INSERT INTO `gaecs` (`id`, `nom`, `adresse`, `mail`, `createdAt`, `updatedAt`) VALUES
(1, 'Test insersion GAEC 1', '2 rue des champs', 'gaec@gmail.com', '2019-10-21', '2019-10-21'),
(2, 'GAEC du Dauphiné', '15 rue thiers, 38000 Grenoble', 'gaec-dauphine@gmail.com', '2019-10-21', '2019-10-21'),
(3, 'Test Gaec 3', '3 allée du blé', 'ejfzijfpzifjp@kdkdk.co', '0000-00-00', '0000-00-00'),
(4, 'Test Gaec 3', '3 allée du blé', 'ejfzijfpzifjp@kdkdk.co', '0000-00-00', '0000-00-00');

-- --------------------------------------------------------

--
-- Structure de la table `materiel`
--

CREATE TABLE `materiel` (
  `id` int(11) NOT NULL,
  `marque` varchar(50) NOT NULL,
  `modele` varchar(50) NOT NULL,
  `categorie` varchar(50) NOT NULL,
  `gaec_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `pret`
--

CREATE TABLE `pret` (
  `id` int(11) NOT NULL,
  `date_debut` date NOT NULL,
  `date_fin` date NOT NULL,
  `agriculteur_id` int(11) NOT NULL,
  `materiel_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `agriculteur`
--
ALTER TABLE `agriculteur`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_gaec_agriculteur` (`gaec_id`);

--
-- Index pour la table `gaecs`
--
ALTER TABLE `gaecs`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `materiel`
--
ALTER TABLE `materiel`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_gaec` (`gaec_id`);

--
-- Index pour la table `pret`
--
ALTER TABLE `pret`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_materiel` (`materiel_id`),
  ADD KEY `fk_agriculteur` (`agriculteur_id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `agriculteur`
--
ALTER TABLE `agriculteur`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `gaecs`
--
ALTER TABLE `gaecs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `materiel`
--
ALTER TABLE `materiel`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `pret`
--
ALTER TABLE `pret`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `agriculteur`
--
ALTER TABLE `agriculteur`
  ADD CONSTRAINT `fk_gaec_agriculteur` FOREIGN KEY (`gaec_id`) REFERENCES `gaecs` (`id`);

--
-- Contraintes pour la table `materiel`
--
ALTER TABLE `materiel`
  ADD CONSTRAINT `fk_gaec` FOREIGN KEY (`gaec_id`) REFERENCES `gaecs` (`id`);

--
-- Contraintes pour la table `pret`
--
ALTER TABLE `pret`
  ADD CONSTRAINT `fk_agriculteur` FOREIGN KEY (`agriculteur_id`) REFERENCES `agriculteur` (`id`),
  ADD CONSTRAINT `fk_materiel` FOREIGN KEY (`materiel_id`) REFERENCES `materiel` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
