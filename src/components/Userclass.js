import react from "react"

class Userclass extends react.Component{
    constructor(props){
        super(props);
        this.state={
            useerdata: {
                login:"Fuck u"
            },
        }
        
    
    }
    async componentDidMount(){
       
        try{
           const data=await fetch("https://api.github.com/users/farhankhan0511")
            const jsondata=await data.json();
            this.setState({
                userdata:jsondata
            })
           

        }
        catch(err){
            console.log(err)
        }
    }
 
    
    render(){
       
        return (
            <div className="usercard">
        <img src={this.state.userdata?.avatar_url}/>    
        <h2>{this.state.userdata?.login}</h2>
        <h3>Bhiwandi</h3>
        <h3>farhankhan0511</h3>
            </div>
          ) 
    } 
}










export default Userclass;