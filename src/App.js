import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


class  App extends Component {
    constructor(){
        super()
        this.state = {
            likes: 0,
            likes2: 0,
            likes3: 0
        }
    }

    clickLike = () => {
        this.setState({
            likes: this.state.likes + 1
        })
    }
    clickLike2 = () => {
        this.setState({
            likes2: this.state.likes2 + 1
        })
    }
    clickLike3 = () => {
        this.setState({
            likes3: this.state.likes3 + 1
        })
    }

    render() { 
        return (
            <div>
                
                <nav className="navbar navbar-light bg-light">
                    <a className="navbar-brand">
                        <h3>Instagram</h3>
                    </a>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    </form>
                </nav>
                
                <div className='container'>
                    <div className='row'>
                        <div className='col-4'>
                            <div className="card" style={{width: "18rem;"}}>
                                <img src="https://res.cloudinary.com/azinohub/image/upload/v1593519400/samples/bike.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">We do not want to resume school yet.</p>
                                </div>
                                <button onClick={this.clickLike} className="btn-info m-1" style={{width: "20%", borderRadius: "5px"}}>Like</button>
                                <small className="ml-2">{this.state.likes}</small>
                            </div>  
                        </div>

                        <div className='col-4'>
                            <div className="card" style={{width: "18rem;"}}>
                                <img src="https://res.cloudinary.com/azinohub/image/upload/v1593519403/samples/ecommerce/leather-bag-gray.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Be spoke.</p>
                                </div>
                                <button onClick={this.clickLike2} className="btn-info m-1" style={{width: "20%", borderRadius: "5px"}}>Like</button>
                                <small className="ml-2">{this.state.likes2}</small>
                            </div>  
                        </div>

                        <div className='col-4'>
                            <div className="card" style={{width: "18rem;"}}>
                                <img src="https://res.cloudinary.com/azinohub/image/upload/v1593519400/samples/people/jazz.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <p className="card-text">Africa my continent</p>
                                </div>
                                <button onClick={this.clickLike3} className="btn-info m-1" style={{width: "20%", borderRadius: "5px"}}>Like</button>
                                <small className="ml-2">{this.state.likes3}</small>
                            </div>  
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
 
export default App;