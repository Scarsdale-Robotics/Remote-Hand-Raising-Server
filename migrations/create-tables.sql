--------------------------------------------------------------------------------
-- Up
--------------------------------------------------------------------------------

CREATE TABLE classrooms(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL);
CREATE TABLE teachers(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, username VARCHAR(20) NOT NULL, password_hash CHAR(64) NOT NULL, password_salt CHAR(16));
CREATE TABLE classes(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, name VARCHAR(50) NOT NULL, classroom_id INTEGER NOT NULL, FOREIGN KEY(classroom_id) REFERENCES classrooms(id));
CREATE TABLE students(id INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL, username VARCHAR(20) NOT NULL, password_hash CHAR(64) NOT NULL, password_salt CHAR(16));
CREATE TABLE classroom_classes(classroom_id INTEGER NOT NULL, class_id INTEGER NOT NULL, FOREIGN KEY(classroom_id) REFERENCES classrooms(id), FOREIGN KEY(class_id) REFERENCES classes(id));
CREATE TABLE teacher_classes(teacher_id INTEGER NOT NULL, class_id INTEGER NOT NULL, FOREIGN KEY(teacher_id) REFERENCES teachers(id), FOREIGN KEY(class_id) REFERENCES classes(id));
CREATE TABLE student_classes(student_id INTEGER NOT NULL, class_id INTEGER NOT NULL, FOREIGN KEY(student_id) REFERENCES students(id), FOREIGN KEY(class_id) REFERENCES classes(id));

--------------------------------------------------------------------------------
-- Down
--------------------------------------------------------------------------------

DROP TABLE classrooms;
DROP TABLE teachers;
DROP TABLE classes;
DROP TABLE students;
DROP TABLE classroom_classes;
DROP TABLE teacher_classes;
DROP TABLE student_classes;
