---
layout: default
title: "Lab 5: Drag and Drop GUI"
---

## Getting Started

Download [CS201\_Lab05\_Gradle.zip](CS201_Lab05_Gradle.zip). Extract the zip file and import it into Eclipse

> **File&rarr;Import...&rarr;Gradle&rarr;Existing Gradle Project**

You should see a project called **CS201\_Lab05\_Gradle** in the Package Explorer window.

## Your Task

Modify the program so that it allows the user to drag an outline of a circle around the screen with the mouse, place the circle when the left mouse button is clicked, and increasing its radius when the right button is clicked. You should also keep track of the number of circles that have been placed.

## Hints

-   A **Circle** class has been provided that defines a circle using its *center* coordinates and *radius*. Since this class has *no setters* it is *immutable*, i.e. once the object is created, it's fields cannot be changed. **DO NOT MODIFY THIS CLASS.**

-   Consider what information the model class should contain. You can use a **Circle** object for the placed circle.

-   The **CirclesPanel** class should contain a field for the model as well as fields for the outlined circle's center and radius. The initial radius can be set to **START_R**.

-   Use the **handleMouseMove** controller method for when the mouse is being moved. This method should update the outline center fields with the current mouse position coordinates. You can get the coordinates of the mouse pointer using the **e** parameter as follows:

    int x = e.getX();
    int y = e.getY();

-   Use the **handleMouseClick** controller method for when a mouse button is clicked. This method should make a new circle (consider the **addCircle** model method) when the left button is clicked as well as increment the counter and reset the outline radius. When the right button is clicked it should increment the radius of the outline by **START_R**. You can check to see which mouse button was clicked as follows:

    if (e.getButton() == MouseEvent.BUTTON1) {
        // left button
        ...
    } else if (e.getButton() == MouseEvent.BUTTON3) {
        // right button
        ...
    }

-   After the event handlers update the model, call **repaint()** to refresh the view.

-   Use the **drawOval** and **fillOval** methods to draw the circles. Note that to draw a circle using these methods, the parameters are the *upper-left* corner of a bounding rectangle/square, and the width and height of the rectangle. Consider how the center and radius relate to the drawing parameters. **DO NOT MODIFY THE MODEL FIELDS**.

## Submitting

When you are done, submit the lab to the Marmoset server using either of the methods below.

### From Eclipse

If you have the [Simple Marmoset Uploader Plugin](../resources/index.html) installed, then right click on the project (**CS201\_Lab05\_Gradle**) and choose **Submit project...**. Enter your Marmoset username and password when prompted.

### From a web browser

Save the project (**CS201\_Lab05\_Gradle**) to a zip file by right-clicking it and choosing

> **Export...&rarr;Archive File**

Upload the saved zip file to the Marmoset server as **lab05**. The server URL is

> [https://cs.ycp.edu/marmoset/](https://cs.ycp.edu/marmoset/)
