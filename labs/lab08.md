---
layout: default
title: "Lab 8: Inheritance and Polymorphism"
---

## Getting Started

Download [CS201\_Lab08\_Gradle.zip](CS201_Lab08_Gradle.zip). Extract the zip file and import it into Eclipse

> **File&rarr;Import...&rarr;Gradle&rarr;Existing Gradle Project**

You should see a project called **CS201\_Lab08\_Gradle** in the Package Explorer window.

## Your Task

Add classes called **Boat** and **Airplane**. They should have the following behavior:

-   A legal trip for a **Boat** must start and end at a marina, and must not contain any hops over terrain other than water or marina.

-   A legal trip for an **Airplane** must start and end at an airport, but may continue through any kind of terrain.

Add new JUnit test classes called **BoatTest** and **AirplaneTest** that test **Boat** and **Airplane** objects (respectively) against both legal and illegal trips.

You can use the provided **Car** and **CarTest** classes as a guide.

## Testing

In **src/test/java/(default package)** right-click on the appropriate test class and choose **Run As...&rarr;JUnit Test**. This will run the JUnit tests for the corresponding class. If you have correctly implemented the class, you will see a green bar, indicating that all tests have succeeded.

## Submitting

When you are done, submit the lab to the Marmoset server using either of the methods below.

### From Eclipse

If you have the [Simple Marmoset Uploader Plugin](../resources/index.html) installed, then right click on the project (**CS201\_Lab08\_Gradle**) and choose **Submit project...**. Enter your Marmoset username and password when prompted.

### From a web browser

Save the project (**CS201\_Lab08\_Gradle**) to a zip file by right-clicking it and choosing

> **Export...&rarr;Archive File**

Upload the saved zip file to the Marmoset server as **lab08**. The server URL is

> [https://cs.ycp.edu/marmoset/](https://cs.ycp.edu/marmoset/)