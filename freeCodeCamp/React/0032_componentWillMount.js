// Use the Lifecycle Method componentWillMount
/*
React components have several special methods that provide opportunities to perform actions at specific points in the lifecycle of a component. These are called lifecycle methods, or lifecycle hooks, and allow you to catch components at certain points in time. This can be before they are rendered, before they update, before they receive props, before they unmount, and so on. Here is a list of some of the main lifecycle methods: 
- componentWillMount() 
- componentDidMount() 
- shouldComponentUpdate() 
- componentDidUpdate() 
- componentWillUnmount() 
The next several lessons will cover some of the basic use cases for these lifecycle methods.

Note: The componentWillMount Lifecycle method will be deprecated in a future version of 16.X and removed in version 17. Learn more in this article https://www.freecodecamp.org/news/how-to-safely-use-reacts-life-cycles-with-fiber-s-async-rendering-fd4469ebbd8f/


The componentWillMount() method is called before the render() method when a component is being mounted to the DOM. Log something to the console within componentWillMount() - you may want to have your browser console open to see the output.
*/

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // Change code below this line
    console.log('componentWillMount proceed')
    // Change code above this line
  }
  render() {
    return <div />
  }
};