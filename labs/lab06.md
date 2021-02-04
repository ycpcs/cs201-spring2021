---
layout: default
title: "Lab 6: Text File I/O"
---

## Getting Started

Download [CS201\_Lab06\_Gradle.zip](CS201_Lab06_Gradle.zip). Extract the zip file and import it into Eclipse

> **File&rarr;Import...&rarr;Gradle&rarr;Existing Gradle Project**

You should see a project called **CS201\_Lab06\_Gradle** in the Package Explorer window.

## Your task

You will make changes to the class called **Remember**.

Write a program that "remembers" the name of the last person to run the program.

Run the program by right-clicking on the file **Remember.java** in the **src/main/java/(default package)** package, and then choosing

> **Run As&rarr;Java Application**

Here is an example session showing what should happen the *first* time someone runs the program (user input in **bold**):

<pre>
No one has run this program before!
What is your name? <b>Alice</b>
Ok, Alice, I'm writing your name to a file
</pre>

An example session showing what happens the *second* time someone runs the program (user input in **bold**):

<pre>
The last person to run the program was Alice
What is your name? <b>Bob</b>
Ok, Bob, I'm writing your name to a file
</pre>

The next time someone runs the program, it will print Bob's name as the last person to run the program.

## Hints

Store the name of the last person to run the program in a text file.

You can use a **FileReader** and **BufferedReader** to read from the file, and a **FileWriter** to create the file.

You will need to be able to determine whether or not the file containing the name has been created. You can do so as follows. Assume that the variable **fileName** is a String containing the name of the file in which the name should be stored:

    File f = new File(fileName);
    if (f.exists()) {
        // the file exists
    } else {
        // the file has not been created yet
    }

If you want to see the file that your program created, right-click on the name of the project, and choose **Refresh**. You should see your file at the top-level of the project in the Package Explorer.

## Submitting

When you are done, submit the lab to the Marmoset server using either of the methods below.

### From Eclipse

If you have the [Simple Marmoset Uploader Plugin](../resources/index.html) installed, then right click on the project (**CS201\_Lab06\_Gradle**) and choose **Submit project...**. Enter your Marmoset username and password when prompted.

### From a web browser

Save the project (**CS201\_Lab06\_Gradle**) to a zip file by right-clicking it and choosing

> **Export...&rarr;Archive File**

Upload the saved zip file to the Marmoset server as **lab06**. The server URL is

> [https://cs.ycp.edu/marmoset/](https://cs.ycp.edu/marmoset/)
