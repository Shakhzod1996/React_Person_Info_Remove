import './App.css';
import Person from './Person';
import React, { Component } from 'react'
import img1 from './images/1.jpg'
import img2 from './images/2.jpg'
import img3 from './images/3.jpg'
import img4 from './images/4.jfif'
import img5 from './images/5.jpg'
import img6 from './images/6.jpg'
import img7 from './images/7.jpg'
import img8 from './images/8.jpg'
import img9 from './images/9.jpg'
import img10 from './images/10.jpg'
import img11 from './images/11.jpg'
import img12 from './images/12.jpg'

export default class App extends Component {
  state = {
    name: '',
    surname: '',
    company: '',
    email: '',
    phone: '',
    website: '',
    id: '',
    img1: img1,
    img2: img2,
    img3: img3,
    img4: img4,
    img5: img5,
    img6: img6,
    img7: img7,
    img8: img8,
    img9: img9,
    img10: img10,
    img11: img11,
    img12: img12,
  }


  render() {
    return (
      <div className='App'>
        <Person
          name={this.state.name = 'BRET'}
          surname={this.state.surname = 'Leanna Graham'}
          company={this.state.company = 'Romaguerra-Crona'}
          email={this.state.email = 'Sinser@April.biz'}
          phone={this.state.phone = '1-3433-421444-32'}
          website={this.state.website = 'hildegard.org'}
          key={this.state.id = '1'}
          hidePerson={this.hidePerson}
          img1={this.state.img1}
        />

        <Person
          name={this.state.name = 'ANTONETTE'}
          surname={this.state.surname = 'Leanna Graham'}
          company={this.state.company = 'Romaguerra-Crona'}
          email={this.state.email = 'Sinser@April.biz'}
          phone={this.state.phone = '1-3433-421444-32'}
          website={this.state.website = 'hildegard.org'}
          key={this.state.id = '2'}
          img1={this.state.img2}
        />

        <Person
          name={this.state.name = 'LAURA'}
          surname={this.state.surname = 'Leanna Graham'}
          company={this.state.company = 'Romaguerra-Crona'}
          email={this.state.email = 'Sinser@April.biz'}
          phone={this.state.phone = '1-3433-421444-32'}
          website={this.state.website = 'hildegard.org'}
          key={this.state.id = '3'}
          img1={this.state.img3}
        />

        <Person
          name={this.state.name = 'JECSON'}
          surname={this.state.surname = 'Leanna Graham'}
          company={this.state.company = 'Romaguerra-Crona'}
          email={this.state.email = 'Sinser@April.biz'}
          phone={this.state.phone = '1-3433-421444-32'}
          website={this.state.website = 'hildegard.org'}
          key={this.state.id = '4'}
          img1={this.state.img4}
        />

        <Person
          name={this.state.name = 'MAYCL'}
          surname={this.state.surname = 'Leanna Graham'}
          company={this.state.company = 'Romaguerra-Crona'}
          email={this.state.email = 'Sinser@April.biz'}
          phone={this.state.phone = '1-3433-421444-32'}
          website={this.state.website = 'hildegard.org'}
          key={this.state.id = '5'}
          img1={this.state.img5}
        />

        <Person
          name={this.state.name = 'ROBERT'}
          surname={this.state.surname = 'Leanna Graham'}
          company={this.state.company = 'Romaguerra-Crona'}
          email={this.state.email = 'Sinser@April.biz'}
          phone={this.state.phone = '1-3433-421444-32'}
          website={this.state.website = 'hildegard.org'}
          key={this.state.id = '6'}
          img1={this.state.img6}
        />

        <Person
          name={this.state.name = 'RICK'}
          surname={this.state.surname = 'Leanna Graham'}
          company={this.state.company = 'Romaguerra-Crona'}
          email={this.state.email = 'Sinser@April.biz'}
          phone={this.state.phone = '1-3433-421444-32'}
          website={this.state.website = 'hildegard.org'}
          key={this.state.id = '7'}
          img1={this.state.img7}
        />

        <Person
          name={this.state.name = 'JENIFER'}
          surname={this.state.surname = 'Leanna Graham'}
          company={this.state.company = 'Romaguerra-Crona'}
          email={this.state.email = 'Sinser@April.biz'}
          phone={this.state.phone = '1-3433-421444-32'}
          website={this.state.website = 'hildegard.org'}
          key={this.state.id = '8'}
          img1={this.state.img8}
        />

        <Person
          name={this.state.name = 'LOPEZ'}
          surname={this.state.surname = 'Leanna Graham'}
          company={this.state.company = 'Romaguerra-Crona'}
          email={this.state.email = 'Sinser@April.biz'}
          phone={this.state.phone = '1-3433-421444-32'}
          website={this.state.website = 'hildegard.org'}
          key={this.state.id = '9'}
          img1={this.state.img9}
        />

        <Person
          name={this.state.name = 'MUSTAFO'}
          surname={this.state.surname = 'Leanna Graham'}
          company={this.state.company = 'Romaguerra-Crona'}
          email={this.state.email = 'Sinser@April.biz'}
          phone={this.state.phone = '1-3433-421444-32'}
          website={this.state.website = 'hildegard.org'}
          key={this.state.id = '10'}
          img1={this.state.img10}
        />

        <Person
          name={this.state.name = 'KREED'}
          surname={this.state.surname = 'Leanna Graham'}
          company={this.state.company = 'Romaguerra-Crona'}
          email={this.state.email = 'Sinser@April.biz'}
          phone={this.state.phone = '1-3433-421444-32'}
          website={this.state.website = 'hildegard.org'}
          key={this.state.id = '11'}
          img1={this.state.img11}
        />

        <Person
          name={this.state.name = 'CONOR'}
          surname={this.state.surname = 'Leanna Graham'}
          company={this.state.company = 'Romaguerra-Crona'}
          email={this.state.email = 'Sinser@April.biz'}
          phone={this.state.phone = '1-3433-421444-32'}
          website={this.state.website = 'hildegard.org'}
          key={this.state.id = '12'}
          img1={this.state.img12}
        />


      </div>
    )
  }
}

