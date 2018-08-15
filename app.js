// TODO
const GroceryList = (props) => (
  <ul>
    {props.groceries.map((grocery, index) =>
      <GroceryListItem grocery={grocery} key={index}/>
    )}
  </ul>
);

class GroceryListItem extends React.Component{
  // sets up props on initialization
  constructor(props){
    super(props);
    this.state = {hover: false};
    this.handleMouseOver = this.handleMouseOver.bind(this);
    this.handleMouseOut = this.handleMouseOut.bind(this);
  }

  handleMouseOver(){
    this.setState({hover: true});
  }

  handleMouseOut(){
    this.setState({hover: false});
  }

  // render method to render to DOM
  render(){
    let style = {fontWeight: this.state.hover ? 'bold' : 'normal'};  
    return(
      <li style={style} onMouseOut={this.handleMouseOut} onMouseOver={this.handleMouseOver}>{this.props.grocery}</li>
    );
  }
}
  

ReactDOM.render(
  <GroceryList groceries={["Beef", "Chicken"]}/>,
  document.getElementById("app")
);
