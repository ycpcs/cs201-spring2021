---
layout: default
title: "Lab 15: Iterators, Interleaving"
---

## Getting Started

Download [CS201\_Lab15\_Gradle.zip](CS201_Lab15_Gradle.zip). Extract the zip file and import it into Eclipse

> **File&rarr;Import...&rarr;Gradle&rarr;Existing Gradle Project**

You should see a project called **CS201\_Lab15\_Gradle** in the Package Explorer window.

## Your Task

Your task is to implement two generic methods in the **Algorithm** class: **interleave** and **mergeSortedLists**. Each method takes references to two collections as parameters.

-   The **interleave** method takes two collections, uses iterators to traverse their elements, and returns a list in which the elements in the original collections are "interleaved". For example, if the collections are lists containing **(A, B, C)** and **(D, E, F)** respectively, the result will be a list containing **(A, D, B, E, C, F)**.
-   The **mergeSortedLists** method takes two sorted lists and returns a single list containing all of the elements in the two original lists, in sorted order. For example, if the original lists are **(1, 4, 5)** and **(2, 3, 6)** then the result list would be **(1, 2, 3, 4, 5, 6)**.

Each method is accompanied by a detailed documentation comment describing how the method should work, and providing hints.

The **AlgorithmTest** JUnit test class has unit tests for each method. Take a look at the tests if you are not sure about how the method is intended to work.

## Testing

In **src/test/java/(default package)** right-click on the unit test classes and choose **Run As...&rarr;JUnit Test**. This will run the JUnit tests. If you have correctly implemented the class, you will see a green bar, indicating that all tests have succeeded.

## Submitting

When you are done, submit the lab to the Marmoset server using either of the methods below.

### From Eclipse

If you have the [Simple Marmoset Uploader Plugin](../resources/index.html) installed, then right click on the project (**CS201\_Lab15\_Gradle**) and choose **Submit project...**. Enter your Marmoset username and password when prompted.

### From a web browser

Save the project (**CS201\_Lab15\_Gradle**) to a zip file by right-clicking it and choosing

> **Export...&rarr;Archive File**

Upload the saved zip file to the Marmoset server as **lab15**. The server URL is

> [https://cs.ycp.edu/marmoset/](https://cs.ycp.edu/marmoset/)