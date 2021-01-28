---
layout: default
title: "Lab 2: Coins class"
---

For this lab you will implement a class that represents a pocketful of change.

## Getting Started

Download [CS201\_Lab02\_Gradle.zip](CS201_Lab02_Gradle.zip). Extract the zip file and import it into Eclipse

> **File&rarr;Import...&rarr;Gradle&rarr;Existing Gradle Project**

You should see a project called **CS201\_Lab02\_Gradle** in the Package Explorer window.

## Your task

Implement the class called **Coins**, which is in the file called **Coins.java**. This file can be found by expanding the **CS201\_Lab02\_Gradle** project, then the **src/main/java/(default package)** folder. Double click on the file to open it in an editor window.

Add fields (member variables) for each coin type listed below - consider which datatype is appropriate and be sure to make them **private**:

> pennies, nickels, dimes, and quarters

The class should provide the following **public** methods:

1.  A 4-parameter constructor that takes the numbers of pennies, nickels, dimes, and quarters (in that order), and initializes the respective fields.

2.  Getter methods for all four denominations named **getPennies**, **getNickels**, **getDimes**, and **getQuarters**.

3.  **findCentsValue** calculates and returns the total value of the coins in cents, as an integer.

4.  **findDollars** calculates and returns the value in dollars, as an integer. Any fractional part of a dollar should be discarded: for example, if the coins total 137¢, i.e. $1.37, then this method should return the value 1. **Hint:** Consider using the **findCentsValue** method to get the total value in cents with integer division (**/**) to obtain the *quotient*

5.  **findChange** calculates and returns the value of the leftover change (after the dollars are removed) as an integer. For example, if the coins total $1.37, then this method should return the value 37. **Hint:** Consider using the **findCentsValue** method to get the total value in cents with integer modulo (**%**) to obtain the *remainder*

## Testing

In **src/test/java/(default package)** right-click on **CoinsTest.java** and choose **Run As...&rarr;JUnit Test**. This will run the JUnit tests for the **Coins** class. If you have correctly implemented the **Coins** class, you will see a green bar, indicating that all tests have succeeded.

## Submitting

When you are done, submit the lab to the Marmoset server using either of the methods below.

### From Eclipse

If you have the [Simple Marmoset Uploader Plugin](../resources/index.html) installed, then right click on the project (**CS201\_Lab02\_Gradle**) and choose **Submit project...**. Enter your Marmoset username and password when prompted.

### From a web browser

Save the project (**CS201\_Lab02\_Gradle**) to a zip file by right-clicking it and choosing

> **Export...&rarr;Archive File**

Upload the saved zip file to the Marmoset server as **lab02**. The server URL is

> [https://cs.ycp.edu/marmoset/](https://cs.ycp.edu/marmoset/)
