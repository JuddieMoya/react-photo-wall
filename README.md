# Assessment: Photo Wall

For this assessment, you'll be creating a photo wall:

<img src="https://s3.us-east-2.amazonaws.com/files.kenzie.academy/frontend-q2/photo_wall.gif" alt="example output" height="400px" />

Note that the above gif also demonstrates bonus features that are not part of the initial acceptance criteria.

In doing so, you'll be demonstrating a basic understanding of the following:

- maintaining state in components
- making API calls from within a React component
- Choosing the correct life cycle method for asynchronous method call
- iterating over state to dynamically generate DOM elements

## Getting Started

Fork and clone this repository: [https://gitlab.com/kenzie-academy/se/fe/react/assessment---react-photo-wall](https://gitlab.com/kenzie-academy/se/fe/react/assessment---react-photo-wall)

Next, you'll need to install dependencies.

Before coding, you should ensure that this scaffold works by running the application:
```console
npm start
```

## Acceptance Criteria
The acceptance criteria are all
laid out in [src/App.jsx](src/App.jsx) in comments. We've also reproduced them
below:

### Step 1: Declare state  
The state object should include an array of photos, which will be iterated over later and displayed to the user in a grid.

### Step 2: Declare a life cycle method 

This life cycle method should:
- be called after the component is initially rendered
- fetch an array of photos
- add that array of photos to state once received


### Step 3: Ensure valid images are rendered 
The generated images should include:
- a photo's filename 
- a photo's id
- a photo's URL

Where "photo" is the current photo in the array of `photos` being iterated over.

### Step 4: Styling 
Modify [src/App.css](src/App.css) to include styling that accomplishes the following:

   - cause the header and .collage div to be centered on the page
   - ensure that no more than 4 photos appear in a row 

## Bonus 

If you find yourself with extra time (e.g., don't have other assessments to
catch up on), you may consider improving the quality in a number of ways:

- You may have noticed that in the gif, the header remains at the top of the page while
  photos are being scrolled. Add styles to accomplish this in your version.
- See if you can find a way to limit the number of photos that get appended to say, 10
- Having done the above, see if you can add a button that, when clicked, will
  append the next 10 photos (that is, increases the limit from 10 to 20, 30,
  40, etc). You'll need to look ahead to the documentation on event handlers
  and add another piece of state to your component in order to accomplish
  this.

## Submission

Once you finish the assessment please submit only your Gitlab repository URL.

## Source code citing
- https://reactjs.org/docs/faq-ajax.html
- study group Peers,Kamela Williamson,Reginald Jefferson,Kyle hill
