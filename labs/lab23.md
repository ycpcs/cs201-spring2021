---
layout: default
title: "Lab 23: Binomial Coefficient"
---

## Binomial Coefficient

The binomial cooefficient C(n,k), often written "n choose k", is the number of ways to pick a subset of k elements from a collection of n elements. It may be defined recursively as follows:

> C(n,0) = 1
>
> C(n,n) = 1
>
> C(n,k) = C(n-1,k) + C(n-1, k-1)

## Getting Started

Download [CS201\_Lab23\_Gradle.zip](CS201_Lab23_Gradle.zip). Extract the zip file and import it into Eclipse

> **File&rarr;Import...&rarr;Gradle&rarr;Existing Gradle Project**

You should see a project called **CS201\_Lab23\_Gradle** in the Package Explorer window.

## Your Task

You will implement the **compute** method of the classes **NaiveRecursive** and **Memoization**.

As the names suggest, **NaiveRecursive** should be a literal recursive implementation of the binomial coefficient function, and **Memoization** should implement the binomial coefficient function using memoization to avoid repeatedly solving identical subproblems.

Because the binomial coefficient function takes two parameters, **n** and **k**, you will probably want your memoization table to be a two-dimensional array.

## Running the Program

Run the program by right-clicking on the file **TestDriver.java** in the **src/main/java/(default package)** package, and then choosing

The test driver solves C(n,k) for all values of k 0..n, for n=25, and measures the number of milliseconds needed to solve each problem. While the naive recursive implementation will take an appreciable amount of time, the implementation using memoization should execute very quickly.

## Submitting

When you are done, submit the lab to the Marmoset server using either of the methods below.

### From Eclipse

If you have the [Simple Marmoset Uploader Plugin](../resources/index.html) installed, then right click on the project (**CS201\_Lab23\_Gradle**) and choose **Submit project...**. Enter your Marmoset username and password when prompted.

### From a web browser

Save the project (**CS201\_Lab23\_Gradle**) to a zip file by right-clicking it and choosing

> **Export...&rarr;Archive File**

Upload the saved zip file to the Marmoset server as **lab23**. The server URL is

> [https://cs.ycp.edu/marmoset/](https://cs.ycp.edu/marmoset/)