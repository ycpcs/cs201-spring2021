---
layout: default
title: "Lab 21: Recursion"
---

## Getting Started

Download [CS201\_Lab21\_Gradle.zip](CS201_Lab21_Gradle.zip). Extract the zip file and import it into Eclipse

> **File&rarr;Import...&rarr;Gradle&rarr;Existing Gradle Project**

You should see a project called **CS201\_Lab21\_Gradle** in the Package Explorer window.

## Your Task

Implement each static method in the class called **Recursion**. Each method has comments describing what it should do.

When you implement a method, remove the line of code reading

{% highlight java %}
throw new UnsupportedOperationException("Not implemented yet");
{% endhighlight %}

A JUnit test class called **RecursionTest** contains test cases for each method.

You must use recursion in each method. **Do not use a loop in any of the methods.**

As you think about how to implement each method, consider:

-   What is a base case (or base cases) that can be solved without using recursion?
-   How can you find a subproblem which has the same form as the overall problem?
-   How can you extend the solution to the subproblem to solve the overall problem?

## Testing

In **src/test/java/(default package)** right-click on the unit test classes and choose **Run As...&rarr;JUnit Test**. This will run the JUnit tests. If you have correctly implemented the class, you will see a green bar, indicating that all tests have succeeded.

## Submitting

When you are done, submit the lab to the Marmoset server using either of the methods below.

### From Eclipse

If you have the [Simple Marmoset Uploader Plugin](../resources/index.html) installed, then right click on the project (**CS201\_Lab21\_Gradle**) and choose **Submit project...**. Enter your Marmoset username and password when prompted.

### From a web browser

Save the project (**CS201\_Lab21\_Gradle**) to a zip file by right-clicking it and choosing

> **Export...&rarr;Archive File**

Upload the saved zip file to the Marmoset server as **lab21**. The server URL is

> [https://cs.ycp.edu/marmoset/](https://cs.ycp.edu/marmoset/)