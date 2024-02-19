# Laying-The-Foundation-
Namaste JavaScript Episode 3 Laying The Foundation 


change the app.js to <b>App.js</b>

Laying the Foundation 


** So what does npx parcel index.html means
>we are executing npm package parcel and giving source file as index.hmtl
> to get rid of this command then we have to create script so that
  we dont have to write this again and again 
> so it is an npm script we have to create that in package.json 
> so like below we create script
 
   "scripts": {
    "start": "parcel index.html",     // for dev
    "build":"parcel build index.html",  // for production    
  },   
> after this we have to write in the terminal npm run start
> Basically we have give npm run and name of the script
> this is how we crate script and in any project we have to check the script from package.json to start the project 
> it will do the same thing it will call index.parcel 
> you can also give npm start as a short cut
>it run only for start npm for build

>>React.Element  => at the end of day is object => when we render this element onto the DOM it becomes a html element 

>>How React is build 
const heading = React.createElement(
  "h1", 
  { id: "heading" }, 
  "Namaste React ðŸš€"
  );
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


> this how you create React Element using React
> So this was developed first then the react developer realised that this is not going to work
> it wasn't developer friendly
> to over come this problem they have come with JSX

** JSX
> So JSX is a JavaScript syntax which is easier to create React ELement 
> JSX is separate and react is separate
> So JSX is a convention in which HTML & JS is merged together
> JSX is not HTML  in JS
> JSX is HTML like syntax more close to XML 
> React Element is an Object while JSX is just syntax

const jsxHeading = <h1 id="heading">This will be JSX Heading :rocket: </h1> 

>This is how you crate react element using JSX

**IS it JSX is valid JavaScript?
> this is not pure JS
> JS engine/ Browser does not understand JSX 
> JS ENgine understand ECMA Script

How JSX work
const jsxHeading = <h1 id="heading">This will be JSX Heading :rocket: </h1> 
> The browser does not understand this but
> The code is transpiled  before it goes to the JS Engine 
> And then JS Engine received the code which understand by browser
> transpiled means this code is converted to the code That browser can understand
> transpiling is done by parcel and with the help of babel.

>IF we have to give attribute in JSX it should be in camal case className tabIndex like wise

**Babel
>babel is a JS compiler or transpiler 
>it take JSX and convert into the code that JS engine understand. 
>Babel is not created by FB


>>JSX => React.createElement => ReactElement-JS Object => HTML ELement(render) 
> JSX code is transpiled to React.createElement
> React.createElement is then converted into JS object
> and then it is render onto HTML ELement
> So Babel is converting the code into React.createElement

HomeWOrk
Various Attribute tags in React
 
 
**Single Line and Multiple Line thing
>if JSX is in Single line it is perfectly fine
>if there will be multiple line then it should be warped with()
 so that babel understand
>if there will be multiple line it is mandatory to use ()


**React Component
>> Everything in react is component like header footer body navbar 
> SO there are two ways to create component
  i> Class Based Component -- Old way of writing Code 
 ii> Functional Based Component -- New Way Of Writing Code
 
> Class Based Component uses JS classes to write the code
> Functional Based Component uses the Functions of JS to write the code


*React Functional Component
> it is just a normal JS function 
> functional Based component start with capital Latter 
> functional Based component is a function that return some pieces of JSX code
  is a functional Based component 
> A JS function which returns a react Element 
  
  
Syntax 1 :
  const HeadingCom = () => {
  return <h1>Namste React Functional Component </h1>
};

Syntax 2 :
const HeadingCom1 = () => <h1 className="head1">Namste React Functional Component </h1>;

> So both are same just removing the return and warping in single line 

** what is different between ReactElement and React component

>>HOw to render React Component inside Root
 >All the component are render like <HeadingCom1/> this only 
 >this is how babel understand this is a react component



>> WHat is component Composition 
> calling a component inside a component is component Composition

const Title = () => (
<h1 className="Head" id="heading">
This will be JSX Heading  </h1> 
 );

const HeadingCom1 = () => ( 
<div className="container">
 <Title/>
<h1 className="head1">Namste React Functional Component </h1>
</div>
);

>you can inject any JS code inside {} and it will be return in html
> Writing JS inside of JSX is big thing it can do anything with the help of {}

**How to put react element inside react Functional component.

Cross Side Scripting 
const data = api.getData();

const heading = () => (
{data}
<h1>hello</h1>
)


    <Title />
    {Title()}
    <Title></Title>
	
> these are the way of calling function in JSX	