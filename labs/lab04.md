---
layout: default
title: "Lab 4: Arrays and ArrayLists"
---

## Getting Started

Download [CS201\_Lab04\_Gradle.zip](CS201_Lab04_Gradle.zip). Extract the zip file and import it into Eclipse

> **File&rarr;Import...&rarr;Gradle&rarr;Existing Gradle Project**

You should see a project called **CS201\_Lab04\_Gradle** in the Package Explorer window.

## Your task

Implement the following static methods in the **ArrayAndArrayList** class:

-   **readArray**: Takes two parameters, **keyboard** and **numElements**. **keyboard** is a **Scanner** object you can use to read input from the user. **numElements** is the number of integer values to read. The method should return a reference to an array containing the requested number of integer values.

-   **printArray**: Takes a parameter **arr**, an array of integer values. The method should print out the element values in the array.

-   **reverseArray**: Takes a parameter **arr**, an array of integer values. The method should reverse the values in the elements of the array. For example, if passed an array containing the values **1 2 3**, the method should re-arrange the contents of the array so that it contains the values **3 2 1**.

-   **readArrayList**: Takes two parameters, **keyboard** and **numElements**. **keyboard** is a **Scanner** object you can use to read input from the user. **numElements** is the number of integer values to read. The method should return a reference to an **ArrayList\<Integer\>** containing the requested number of integer values.

-   **printArrayList**: Takes a parameter **arrList**, an **ArrayList\<Integer\>** of integer values. The method should print out the element values in the ArrayList.

-   **reverseArrayList**: Takes a parameter **arrList**, an **ArrayList\<Integer\>** of integer values. The method should reverse the values in the elements of the ArrayList. For example, if passed an ArrayList containing the values **1 2 3**, the method should re-arrange the contents of the ArrayList so that it contains the values **3 2 1**.

As you implement each method, be sure to comment out

> **throw new UnsupportedOperationException("TODO - implement");**

### Hints

-   declare an array *reference* and allocate a **new** array in **readArray** using the **numElements** parameter value, then return the reference after loading in the values.
-   to reverse the array (note you should **not** allocate a new one) consider creating a loop that swaps the first and last elements, second and next to last, etc. Alternatively, create a new temporary array and copy the elements from the original to the temporary in reverse order and then back to the original.
-   declare an **ArrayList\<Integer\>** *reference* and allocate a **new** ArrayList (which will be empty) in **readArrayList** (note you do not need to use the **numElements** parameter value to create it). Then use the **numElements** parameter to control a loop that uses the ArrayList object's **add** method to insert the values, and return the reference to the ArrayList.
-   to reverse the ArrayList, use a similar procedure to the array only with the **get** method to read a value and the **set** method to change a value at a given index. (Or look at the API for **ArrayList** to see if there are any methods that can do it for you - "*find an object, call a method*").

## Testing

In **src/test/java/(default package)** right-click on the appropriate test class and choose **Run As...&rarr;JUnit Test**. This will run the JUnit tests for the corresponding class. If you have correctly implemented the class, you will see a green bar, indicating that all tests have succeeded.

## Running

A **main** method is provided which you **should not** change. 

Run the program by right-clicking on the file **ArrayAndArrayList.java** in the **src/main/java/(default package)** package, and then choosing

> **Run As&rarr;Java Application**

When you run the **main** method, you should see output looking something like this (user input in **bold**):

<pre>
Select:
1 Array
2 ArrayList
0 Quit
<b>1</b>
How many values? 
<b>5</b>
Please enter 5 values:
<b>9 0 1 2 5</b>
You entered the following values:
9 0 1 2 5 
Now I am going to reverse the array for you...
Here are the reversed array values:
5 2 1 0 9 

Select:
1 Array
2 ArrayList
0 Quit
<b>2</b>
How many values? 
<b>4</b>
Please enter 5 values:
<b>8 6 7 5</b>
You entered the following values:
8 6 7 5
Now I am going to reverse the ArrayList for you...
Here are the reversed ArrayList values:
5 7 6 8 

Select:
1 Array
2 ArrayList
0 Quit
<b>0</b>
Goodbye
</pre>

## Submitting

When you are done, submit the lab to the Marmoset server using either of the methods below.

### From Eclipse

If you have the [Simple Marmoset Uploader Plugin](../resources/index.html) installed, then right click on the project (**CS201\_Lab04\_Gradle**) and choose **Submit project...**. Enter your Marmoset username and password when prompted.

### From a web browser

Save the project (**CS201\_Lab04\_Gradle**) to a zip file by right-clicking it and choosing

> **Export...&rarr;Archive File**

Upload the saved zip file to the Marmoset server as **lab04**. The server URL is

> [https://cs.ycp.edu/marmoset/](https://cs.ycp.edu/marmoset/)
