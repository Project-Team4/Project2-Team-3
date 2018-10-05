DROP DATABASE IF EXISTS user_db;
CREATE DATABASE user_db;

USE user_db;
CREATE TABLE users 
-- (
--     id INT AUTO_INCREMENT NOT NULL,
--     User_Name VARCHAR(30) NOT NULL,
--     Pass_word VARCHAR(30) NOT NULL,
--     Email VARCHAR(100) NOT NULL,
--     Cell_Phone VARCHAR(10) NOT NULL,
--     Verified BOOLEAN DEFAULT FALSE,
--     Active BOOLEAN DEFAULT TRUE,
--     PRIMARY KEY(id)
-- );


DROP DATABASE IF EXISTS main_db;
CREATE DATABASE main_db;

USE main_db;
CREATE TABLE calendars
-- (
--     id INT AUTO_INCREMENT NOT NULL,
--     User_Id INT NOT NULL,
--     Repeat_Key INT DEFAULT 0,
--     Event_Type INT NULL,
--     Event_Name VARCHAR(100) NOT NULL,
--     Event_Start_Date VARCHAR(10) NOT NUll,
--     Event_End_Date VARCHAR(10) NOT NULL,
--     Event_Start_Time VARCHAR(10) NOT NUll,
--     Event_End_Time VARCHAR(10) NOT NULL,
--     Event_Info TEXT(1000) NULL,
--     Event_location VARCHAR(255),
--     PRIMARY KEY(id)
-- );

-- CREATE TABLE repeating_calendars
-- (
--     id INT AUTO_INCREMENT NOT NULL,
--     Repeat_Freq INT DEFAULT NULL,
--     Repeat_Length VARCHAR(11) DEFAULT NULL,
--     Repeat_Start_Date VARCHAR(10) NOT NUll,
--     Repeat_End_Date VARCHAR(10) NOT NULL,
--     Repeat_Start_Time VARCHAR(10) NOT NUll,
--     Repeat_End_Time VARCHAR(10) NOT NULL,
--     PRIMARY KEY(id)
-- );

-- CREATE TABLE todos
-- (
--     id INT AUTO_INCREMENT NOT NULL,
--     User_Id INT NOT NULL,
--     Repeat_Key INT DEFAULT 0,
--     Todo_Type INT NULL,
--     Todo_Name VARCHAR(100) NOT NULL,
--     Todo_Start_Time VARCHAR(10) NOT NUll,
--     Todo_End_Time VARCHAR(10) NOT NULL,
--     Todo_Date VARCHAR(10),
--     Todo_Info TEXT(1000) NULL,
--     Todo_location VARCHAR(255),
--     Todo_Status INT(1) DEFAULT 0 NOT NULL,
--     PRIMARY KEY(id)
-- );

-- CREATE TABLE repeating_todos
-- (
--     id INT AUTO_INCREMENT NOT NULL,
--     Repeat_Freq INT DEFAULT NULL,
--     Repeat_Length VARCHAR(11) DEFAULT NULL,
--     Repeat_Start_Date VARCHAR(10) NOT NUll,
--     Repeat_End_Date VARCHAR(10) NOT NULL,
--     Repeat_Start_Time VARCHAR(10) NOT NUll,
--     Repeat_End_Time VARCHAR(10) NOT NULL,
--     PRIMARY KEY(id)
-- );

-- CREATE TABLE shopping_items
-- (
--     id INT AUTO_INCREMENT NOT NULL,
--     User_Id INT NOT NULL,
--     List_Type INT NULL,
--     List_Name VARCHAR(100) NOT NULL,
--     List_Quantity INT NOT NULL,
--     List_Location VARCHAR(255)
--     List_Status INT(1) DEFAULT 0 NOT NULL,
--     PRIMARY KEY(id)
-- );

-- CREATE TABLE lookup_shopping_types
-- (
--     id INT AUTO_INCREMENT NOT NULL,
--     Type_name VARCHAR(50) NOT NULL,
--     Primary Key(id)
-- );

-- CREATE TABLE user_shopping_types
-- (
--     id INT AUTO_INCREMENT NOT NULL,
--     User_Id INT NOT NULL,
--     Type_Id INT NOT NULL,
--     PRIMARY KEY(id)
-- );

-- CREATE TABLE event_types
-- (
--     id INT AUTO_INCREMENT NOT NULL,
--     Type_Name VARCHAR(50)
--     PRIMARY KEY(id)
-- );

-- CREATE TABLE reminders
-- (
--     id INT AUTO_INCREMENT NOT NULL,
--     User_Id INT NOT NULL,
--     Event_Key INT NOT NULL,
--     Do_time VARCHAR(20) NOT NULL,
--     Notification_Type VARCHAR(1) NOT NULL,
--     PRIMARY KEY(id)

-- );

-- CREATE TABLE attendees
-- (
--     id INT AUTO_INCREMENT,
--     User_Id INT NOT NUll,
--     Event_Key INT NOT NULL,
--     Notified INT BOOLEAN DEFAULT false NOT NULL,
--     Accepted INT BOOLEAN DEFAULT false NOT NULL,
--     PRIMARY KEY(id)
-- );
