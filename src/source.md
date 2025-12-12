Each JSX expression must have one parent element, which means if you try to return multiple elements, React will throw an error. 

Every JSX tag needs to be closed. You can use self-closing tags for elements that don't have children, like <img /> or <input />.

React dose not render `false`, `null`, `undefined`, or `NaN` in the DOM. These values, when used in JSX, will result in nothing being displayed.

However, `0` and empty string (`""`) are exceptions:

-**`0`** is rendered in the DOM because it is considered a valid React node. This means that if `0` is the result of an expression, it will appear as well.
-**Empty String** (`""`) are also consideres avlid outputs and rendered as well.

## ...Conditional Rendering...

1. Simple 
if (age < 18) {
    return(
      <div>
      <div>
        <img src="img1.jpg" alt="" height="300px" width="40%" />
      </div>

      <h2>Name : {name} </h2>
      <h4>Rating : {5 + 3.2} </h4>
      <p>Sumamry : {summary} </p>
      <p>Genre : {returnGenre()} </p>
      <button>Not Available</button> 
    </div>
    );
};
2. But this violates DRY
3. Sometimes you might have very complex if conditions, for that there are some solutions
4. Solution can be better as it prevents cluttering of variables outside and encapsulates such logic inside a function one another benefit is also that, you can also pass some dynamic values as function parameters


## ...DYNAMIC VALUES IN JSX...

1. variables :
You can embed any JavaScript expression in JSX by wrapping it in curly braces {}.The value of the variable 
will be inserted into thr DOM at the respective position.

2. Expressions :
JSX allows you to write JavaScript expressions inside curly braces {}. This includes operations, function calls, and
other JavaScript expressions that produce a value.

3. Function Calls :
Functions, especially those that return JSX, can be invoked directly within your JSX code. 

## ...ImportExport...

Default Export : A file can have only one default export.
Default Import : When importing a default export, you can name the import whatever you like.

Named Export :
A file can have multiple named export.
Each named export must be explicity exported.

Named Import :
When importing named exports, the import names must match the export name exactly.
Named import must be enclosed in curly braces.

## ...Looping in JSX...

We don't have for loop in JSX, so we have to use .map() method of array.

## ...INLINE CSS...

Inline style are applied directly to the HTML elements via the style attribute. This approach uses JavaScript objects to define the CSS properties and values.

# 1. JavaScript Object Syntax

Inline styles in React are specified using JavaScript objects. Proprty names are written in camelCase insgtead of the traditional CSS kabab-case.

const style = {
  backgroundColor = 'blue',
  fontSize = '16px',
};

# 2. Units

For most numeric values, you need to soecify units as a string (e.g., '16px'). Some properties, like zIndex, can take numeric values directly.

const style = {
  padding = '10px',
  zIndex = 1,
};

# 3. Performance Considerations

Defining inline styles directly within the JSX can lead to performance issues because a new object is created on every render. To avoid this, define styles outside of the render method or as constants. 

const buttonStyle = {
  backgroundColor: 'blue',
  color: 'white', 
};

function MyButton() {
  return <button style={buttonStyle}> Click Me </button>;
}

# CSS conditional styling in React JS

You can use ternary operators to add conditional styling to your CSS