import {Component} from "react"
class Music extends Component { 
    constructor(props) {
        super()
        // this.state = {
        //     food: props.food
        // }
        console.log(props.food);
        console.log(props.weight);
    }
    render() {
        return <h1>Music</h1>
    }
}
export default Music