-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 04, 2021 at 12:20 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 7.3.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_library`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_books`
--

CREATE TABLE `tbl_books` (
  `id` int(11) NOT NULL,
  `book_name` varchar(500) DEFAULT NULL,
  `book_logo` varchar(255) DEFAULT NULL,
  `book_author` varchar(100) DEFAULT NULL,
  `book_desc` varchar(3000) DEFAULT NULL,
  `uploaded_by` varchar(45) DEFAULT NULL,
  `doi` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_books`
--

INSERT INTO `tbl_books` (`id`, `book_name`, `book_logo`, `book_author`, `book_desc`, `uploaded_by`, `doi`) VALUES
(1, 'American Marxism', 'L202105040225131620118514.jpg', 'Mark R. Levin', '\"Through this lens we can build a renewed sense of personal self-worth and ultimately recalibrate our responses to circumstances, situations, and relationships. It is, in other words, the key to reshaping our very lives.\"Oprah Winfrey', '1', '2021-05-03 18:56:35'),
(2, 'What Happened to You?: Conversations on Trauma, Resilience, and Healing', 'book2.jpg', 'Oprah Winfrey and Bruce D. Perry ', '“Through this lens we can build a renewed sense of personal self-worth and ultimately recalibrate our responses to circumstances, situations, and relationships. It is, in other words, the key to reshaping our very lives.”―Oprah Winfrey', '1', '2021-05-03 18:56:35'),
(17, 'Vegetable Simple: A Cookbook Hardcover – April 20, 2021', 'L202105040216221620117982.jpg', 'Eric Ripert', 'Eric Ripert is the chef and co-owner of the acclaimed restaurant Le Bernardin, and the winner of countless Michelin stars, well known for his exquisite, clean, seafood-centered cuisine. But lately, Ripert has found himself reaching for vegetables as his main food source—and doing so, as is his habit, with great intent and care.\r\n\r\nIn Vegetable Simple, Ripert turns his singular culinary imagination to vegetables: their beauty, their earthiness, their nourishing qualities,', '1', '2021-05-04 14:16:22'),
(18, 'Faucian Bargain: The Most Powerful and Dangerous Bureaucrat in American History Paperback – March 26, 2021', 'L202105040229401620075580.jpg', ' Steve Deace (Author)', '#1 Wall Street Journal Bestseller\r\n\r\nAs seen on Tucker Carlson Tonight\r\n\r\nAs heard on Glenn Beck and Mark Levin\r\n\r\n“In his famous Farewell Address, President Eisenhower warned about allowing public policy to become captive to a scientific elite without regard to the principles of our constitutional system and the goals of a free society. Eisenhower was prescient. During the COVID crisis, states like New York that embraced unadulterated Faucism saw poor results across the board, while states that pursued an Eisenhower-style approach like Florida protected freedom and performed better in education, economy and health outcomes. Executives are elected to lead and make tough decisions, and such leadership cannot be outsourced to health bureaucrats like Fauci.” —Florida Governor Ron DeSantis\r\n\r\n“In this important book the authors do the job our uninquisitive media has failed to do throughout this ordeal. Confirming with cited and sourced details the enemy of both liberty and logic the lockdowns have proven to be. Which also proves too much power in the hands of an unelected bureaucrat, regardless of his intentions, can no longer be our new normal.” —U.S. Senator Rand Paul (R-KY)\r\n\r\nCan liberty survive in the hands of one all-powerful, unchallenged, and unelected bureaucrat?\r\n\r\nIt wasn’t too long ago that the average American didn’t know who Anthony Fauci was. Now, after the coronavirus has spread nationwide, he’s arguably the most powerful bureaucrat in American history. But is it dangerous for a free society to concentrate so much power in the hands of an unelected official? Who or what holds Fauci accountable?\r\n\r\n“Steve Deace is a true patriot whose zeal for liberty is undeniable. Every day, Steve walks the walk when it comes to fighting for Americans\' fundamental rights. This book is written with a keen understanding of the pain and devastation we\'ve all seen throughout this pandemic. Throughout, Steve\'s passion for protecting Americans\' freedoms is ever-present.” —U.S. Senator Ted Cruz (TX)\r\n\r\n“This is an important book, to both get answers to how we got here and to help us never succumb to something like this ever again. Permitting unelected bureaucrats to hold this much power indefinitely doesn\'t end well.” —Mark Levin, New York Times best-selling author and talk show host\r\n\r\n“In their typical fashion, Steve Deace and Todd Erzen spare no expense in pursuit of truth. We’ve been told a lot of things during this pandemic, and a lot of them contradict each other. This book uses documented data and sources to cut through the clutter, most of it Fauci’s, and bring us to a place of reason and science.” —Glenn Beck, New York Times bestselling author and Radio Hall of Fame broadcaster', '1', '2021-05-04 14:25:13'),
(19, 'The Comedy Code Paperback – December 14, 2020', 'L202105040329511620122392.jpg', ' Gunnar Todd Rohrbacher (Author)', 'Drawing from decades of experience performing, writing, teaching, improvising, producing, directing and casting comedy, Los Angeles based comedy guru Gunnar Rohrbacher has created a single book that links every kind of comedy/performance training into a sensible, industry standard plan of action. Whether you\'re a classically trained actor, musical theater performer, improvisor, sketch artist, stand up, writer or simply drawn to the art of comedy, this preeminent manual will speak to you. The Comedy Code offers you invaluable insight into generating humor, the day-to-day workings of show business and most importantly, how the industry sees you. If you want to better understand how two thrive in the streaming, digital age of Hollywood, this meticulously crafted guidebook is essential!', '1', '2021-05-04 15:29:51');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_login`
--

CREATE TABLE `tbl_login` (
  `id` int(11) NOT NULL,
  `name` varchar(45) DEFAULT NULL,
  `uname` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `login_type` varchar(45) NOT NULL,
  `doi` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_login`
--

INSERT INTO `tbl_login` (`id`, `name`, `uname`, `password`, `login_type`, `doi`) VALUES
(1, 'Admin', 'admin', 'libraryadmin@123', 'admin', '2021-05-03 14:39:26'),
(2, 'Raja', 'raja', 'libraryuser@123', 'user', '2021-05-04 02:39:43'),
(3, 'Ram', 'ram', 'libraryuser@123', 'user', '2021-05-04 04:53:36');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_stock_purchase`
--

CREATE TABLE `tbl_stock_purchase` (
  `id` int(11) NOT NULL,
  `user_id` varchar(45) DEFAULT NULL,
  `user_type` varchar(45) DEFAULT NULL,
  `book_id` varchar(45) DEFAULT NULL,
  `stock_qty` varchar(45) DEFAULT NULL,
  `stock_type` varchar(45) DEFAULT NULL,
  `doi` datetime DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `tbl_stock_purchase`
--

INSERT INTO `tbl_stock_purchase` (`id`, `user_id`, `user_type`, `book_id`, `stock_qty`, `stock_type`, `doi`) VALUES
(1, '1', 'admin', '1', '10', 'in', '2021-05-03 18:51:13'),
(2, '1', 'admin', '2', '1', 'in', '2021-05-03 18:51:13'),
(91, '3', 'user', '1', '1', 'out', '2021-05-04 14:10:59'),
(92, '1', 'admin', '17', '19', 'in', '2021-05-04 14:16:22'),
(93, '1', 'admin', '18', '26', 'in', '2021-05-04 14:25:13'),
(94, '2', 'user', '17', '1', 'out', '2021-05-04 14:32:23'),
(95, '3', 'user', '1', '1', 'in', '2021-05-04 14:33:41'),
(96, '1', 'admin', '1', '12', 'in', '2021-05-04 14:34:30'),
(97, '2', 'user', '18', '1', 'out', '2021-05-04 14:35:02'),
(98, '2', 'user', '1', '1', 'out', '2021-05-04 14:36:31'),
(99, '2', 'user', '1', '1', 'in', '2021-05-04 14:36:56'),
(100, '2', 'user', '2', '1', 'out', '2021-05-04 14:38:08'),
(101, '3', 'user', '18', '1', 'out', '2021-05-04 14:48:00'),
(102, '3', 'user', '18', '1', 'in', '2021-05-04 14:48:15'),
(103, '1', 'admin', '19', '8', 'in', '2021-05-04 15:29:51');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_books`
--
ALTER TABLE `tbl_books`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_login`
--
ALTER TABLE `tbl_login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `tbl_stock_purchase`
--
ALTER TABLE `tbl_stock_purchase`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_books`
--
ALTER TABLE `tbl_books`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `tbl_login`
--
ALTER TABLE `tbl_login`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `tbl_stock_purchase`
--
ALTER TABLE `tbl_stock_purchase`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=104;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
