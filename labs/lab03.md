---
layout: default
title: "Lab 3: Testing Overloaded Constructors"
---

## Getting Started

Download [CS201\_Lab03\_Gradle.zip](CS201_Lab03_Gradle.zip). Extract the zip file and import it into Eclipse

> **File&rarr;Import...&rarr;Gradle&rarr;Existing Gradle Project**

You should see a project called **CS201\_Lab03\_Gradle** in the Package Explorer window.

Right click on **StartLab.java** and choose **Run As&rarr;Java Application**. In the console window, type **yes** when prompted. When the program completes, right click on the project (**CS201\_Lab03\_Gradle**) and choose **Refresh**. You should see your code from [Lab 2](lab2.html).

In this lab, you will build upon the classes from [Lab 2](lab2.html) to add several overloaded constructors along with corresponding unit tests.

## Your Task

Make the following modifications to the **Coins** class:

**(1)** Add a *default* constructor that takes **no** parameters and initializes all the fields to 0 *except* for 1 penny.

**(2)** Add a single parameter constructor that takes a **double** as a total starting amount *in dollars* and calculates the number of each denomination of coin. To accomplish this, you will need to convert the parameter to an *integer* number of cents and then repeatedly use integer division starting with the largest denomination (quarters) to determine the maximum number of each denomination this amount contains. Be sure to remove the amount of each denomination from the total before calculating the number of coins in the next smaller denomination.

**(3)** Add a single parameter constructor that takes a **Coins** object and initializes the fields to the same values as the parameter object. **Note:** This is essentially making a *copy* of the parameter object. It is good practice to use the getter methods for the parameter object, however since the object is in the *same* class, the fields can actually be accessed directly.

**(4)** Add an **equals** method that takes a **Coins** object as a parameter and returns a **boolean**. The method should return **true** if all the fields of the class are equal to those of the parameter, and **false** otherwise.

Make the following modifications to the **CoinsTest** class:

**(1)** Add several additional test **Coins** references.

**(2)** In the **setUp** method, instantiate *at least* one new **Coins** object using each of the new constructors.

**(3)** Add assert tests in the various getter test methods to check for proper initialization of the fields in the new test objects. **Note:** For the object instantiated using the **Coins** object parameter, use an **assertTrue** test that checks **both** that the *field* values are equal **and** the references for the new object and the one passed to the constructor are **different**.

## Testing

In **src/test/java/(default package)** right-click on the appropriate test class and choose **Run As...&rarr;JUnit Test**. This will run the JUnit tests for the corresponding class. If you have correctly implemented the class, you will see a green bar, indicating that all tests have succeeded.

## Submitting

When you are done, submit the lab to the Marmoset server using either of the methods below.

### From Eclipse

If you have the [Simple Marmoset Uploader Plugin](../resources/index.html) installed, then right click on the project (**CS201\_Lab03\_Gradle**) and choose **Submit project...**. Enter your Marmoset username and password when prompted.

### From a web browser

Save the project (**CS201\_Lab03\_Gradle**) to a zip file by right-clicking it and choosing

> **Export...&rarr;Archive File**

Upload the saved zip file to the Marmoset server as **lab03**. The server URL is

> [https://cs.ycp.edu/marmoset/](https://cs.ycp.edu/marmoset/)