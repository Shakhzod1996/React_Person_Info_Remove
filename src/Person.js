import React, { Component } from 'react'
import './App.css'

export default class Person extends Component {

    state = {
        showPerson: true,
    }

    hidePerson = () => {
        this.setState({ showPerson: false })
    }
    render() {
        return (
            <div className={this.state.showPerson ? 'person' : 'hide-person'}>
                <div className='name-photo'>
                    <img src={this.props.img1} className='img1' alt='img1' />
                    <div className='h-p'>
                    <h3>{this.props.name}</h3>
                    <p>{this.props.surname}</p>
                    </div>
                </div>

                <div className='rest-inform'>
                    <span className='inform-inside'>
                        <p>COMPANY</p>
                        <p>{this.props.company}</p>
                    </span>

                    <span className='inform-inside'>
                        <p>EMAIL</p>
                        <p>{this.props.email}</p>
                    </span>

                    <span className='inform-inside'>
                        <p>PHONE</p>
                        <p>{this.props.phone}</p>
                    </span>

                    <span className='inform-inside'>
                        <p>WEBSITE</p>
                        <p>{this.props.website}</p>
                    </span>
                </div>

                <button
                    onClick={this.hidePerson}
                    className='remove btn btn-danger'>
                    Remove User
                </button>
            </div>
        )
    }
}
