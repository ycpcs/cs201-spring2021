---
layout: default
title: "Lab 7: Exceptions"
---

## Getting Started

Download [CS201\_Lab07\_Gradle.zip](CS201_Lab07_Gradle.zip). Extract the zip file and import it into Eclipse

> **File&rarr;Import...&rarr;Gradle&rarr;Existing Gradle Project**

You should see a project called **CS201\_Lab07\_Gradle** in the Package Explorer window.

## Your task

You will make changes to the class called **ReadFile**.

Complete the progam so that it prompts the user for the name of a file, and then prints the contents of the file to **System.out**.

There are several important requirements:

-   The **main** method must not be declared to throw any kind of exception.
-   The program must not test whether or not the requested file exists before attempting to open it.
-   The program must use a **try/finally** block to make sure that the reader or input stream reading the file is closed before the program exits.

Assume that the file **myFile.txt** contains the following contents:

    Oh freddled gruntbuggly
    Thy micturations are to me
    As plurdled gabbleblotchits on a lurgid bee.
    Groop I implore thee, my foonting turlingdromes
    And hooptiously drangle me with crinkly bindlewurdles,
    Or I will rend thee in the gobberwarts with my blurglecruncheon,
    See if I don't!

Run the program by right-clicking on the file **ReadFile.java** in the **src/main/java/(default package)** package, and then choosing

> **Run As&rarr;Java Application**

Here is an example session showing a file being printed successfully (user input in **bold**):

<pre>
Which file? <b>myFile.txt</b>
Oh freddled gruntbuggly
Thy micturations are to me
As plurdled gabbleblotchits on a lurgid bee.
Groop I implore thee, my foonting turlingdromes
And hooptiously drangle me with crinkly bindlewurdles,
Or I will rend thee in the gobberwarts with my blurglecruncheon,
See if I don't!
</pre>

Here is another example session showing what happens when the user enters the name of a nonexistent file:

<pre>
Which file? <b>nonexistent.txt</b>
Error: nonexistent.txt (No such file or directory)
</pre>

## Hints

Use a **try/catch** block to handle an **IOException** or **FileNotFoundException** that might occur. Print the error message from the catch block. You can call the **getMessage** method on the caught exception object to get a string containing a textual description of the error that caused the exception.

## Submitting

When you are done, submit the lab to the Marmoset server using either of the methods below.

### From Eclipse

If you have the [Simple Marmoset Uploader Plugin](../resources/index.html) installed, then right click on the project (**CS201\_Lab07\_Gradle**) and choose **Submit project...**. Enter your Marmoset username and password when prompted.

### From a web browser

Save the project (**CS201\_Lab07\_Gradle**) to a zip file by right-clicking it and choosing

> **Export...&rarr;Archive File**

Upload the saved zip file to the Marmoset server as **lab07**. The server URL is

> [https://cs.ycp.edu/marmoset/](https://cs.ycp.edu/marmoset/)
