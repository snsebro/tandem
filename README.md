# Tandem Trvia
Tandem Code Challenge

## Overview

**Tandem Trivia** is trivia application built using React.js to render client facing components and Sass for styling. Users on the frontend are able to view a set of 10 randomized trivia questions, submit answers, and see their total score at the end of each round.

<br>

## Acceptance Criteria

- [x] A user can view questions.
- [x] Questions with their multiple choice options must be displayed one at a time.
- [x] Questions should not repeat in a round.
- [x] A user can select only 1 answer out of the 4 possible answers.
- [x] The correct answer must be revealed after a user has submitted their answer
- [x] A user can see the score they received at the end of the round

<br>

## Goals

- [x] Create a well designed easy to navigate frontend application
- [x] Utilize context to avoid props drilling and ensure global access to questions in state
- [x] Create well abstracted file structure to seperate concerns

<br>

## Libraries and Dependencies


|    Library    | Description                                    |
| :-----------: | :--------------------------------------------- |
|     React     | Frontend client side rendering                 |
| React Router  | Rendering specific components given URL params |
|     Sass      | Frontend styling           |

<br>

## Wireframes

[Adobe XD Link](https://xd.adobe.com/view/0392f607-a8be-4818-5344-9ae67a3355bb-75a3/)

## Component Hierarchy

``` structure

src
|__ components/
      |__ ProgressBar
        |__ ProgressBar.jsx
      |__ Score  
        |__ Score.jsx
        |__ Score.css
      |__ Trivia
        |__ Trivia.jsx
        |__ Trivia.css
      |__ Welcome
        |__Welcome.jsx
        |__Welcome.css
      |__ context
        |__ QuestionContext
|__ random.js

```
