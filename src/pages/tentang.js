import React, {Component} from 'react';
import '../App.css';
import {Grid, Segment} from 'semantic-ui-react'
import Footer from '../components/small/footer'
import Navbar from '../components/small/navbar'

class Tentang extends Component {
  render() {
    return (<div>

      <Grid columns={1}>

        <Grid.Column>
          <Navbar/>
        </Grid.Column>


      <div className='segment-about'>

        <Segment.Group >
          <Segment>
            <h3>Apa itu Mulai Belajar?</h3>
          </Segment>
            <Segment.Group>
              <Segment>
                Lorem ipsum dolor sit amet, at wisi quaerendum mediocritatem sit, quo putant salutatus conceptam eu. Dicit ancillae per et, te vel lorem bonorum moderatius. Has ne luptatum forensibus, in quidam dictas postulant vim, id velit graeci nam. Ne duo dicit mandamus signiferumque, ut sed iudico sapientem gubergren. Mel eu cetero conclusionemque, mel ei dicant gubergren intellegam. Vidisse evertitur neglegentur eu vim, aeque fierent insolens no qui. Vel debet iudico et.

  Percipitur persequeris theophrastus est eu, docendi interesset eos no. Cu eum labores appareat. Eam vitae consequat an, et eros posse per. Vim essent putant ex, per zril consulatu id. Ei commune electram iudicabit vis, pro congue euismod mentitum ea. In errem regione pro.

  Usu no putent probatus abhorreant, dolores invenire ad has. Eu ipsum definiebas vituperata duo, amet philosophia an quo, minim soleat tacimates pro ad. Tota splendide ut cum, minim tollit te per. Novum dicam ut vim, quo equidem delenit neglegentur ei. Cu luptatum senserit conceptam sea, ei quo novum veritus.

  Cum eu decore phaedrum, mea augue viris evertitur ea. Lorem inani ei ius, pri commodo comprehensam te. Eos quidam principes at. No vis augue viris reprehendunt. Possit complectitur no mea, denique consequat te cum. Vix in labore complectitur definitionem.

  Ut ius iriure similique. Eius eripuit instructior ne eam. Et eros admodum inimicus nec. Aeterno eruditi inimicus usu in, vix at sonet simul affert, per in debitis volumus. In omnesque ponderum pericula qui, vitae postea ei eos, cu nam dictas docendi dissentiet.
              </Segment>
            </Segment.Group>
        </Segment.Group>

        <Segment.Group >
          <Segment>Top</Segment>
            <Segment.Group>
              <Segment>
                Lorem ipsum dolor sit amet, at wisi quaerendum mediocritatem sit, quo putant salutatus conceptam eu. Dicit ancillae per et, te vel lorem bonorum moderatius. Has ne luptatum forensibus, in quidam dictas postulant vim, id velit graeci nam. Ne duo dicit mandamus signiferumque, ut sed iudico sapientem gubergren. Mel eu cetero conclusionemque, mel ei dicant gubergren intellegam. Vidisse evertitur neglegentur eu vim, aeque fierent insolens no qui. Vel debet iudico et.

        Percipitur persequeris theophrastus est eu, docendi interesset eos no. Cu eum labores appareat. Eam vitae consequat an, et eros posse per. Vim essent putant ex, per zril consulatu id. Ei commune electram iudicabit vis, pro congue euismod mentitum ea. In errem regione pro.

        Usu no putent probatus abhorreant, dolores invenire ad has. Eu ipsum definiebas vituperata duo, amet philosophia an quo, minim soleat tacimates pro ad. Tota splendide ut cum, minim tollit te per. Novum dicam ut vim, quo equidem delenit neglegentur ei. Cu luptatum senserit conceptam sea, ei quo novum veritus.

        Cum eu decore phaedrum, mea augue viris evertitur ea. Lorem inani ei ius, pri commodo comprehensam te. Eos quidam principes at. No vis augue viris reprehendunt. Possit complectitur no mea, denique consequat te cum. Vix in labore complectitur definitionem.

        Ut ius iriure similique. Eius eripuit instructior ne eam. Et eros admodum inimicus nec. Aeterno eruditi inimicus usu in, vix at sonet simul affert, per in debitis volumus. In omnesque ponderum pericula qui, vitae postea ei eos, cu nam dictas docendi dissentiet.
              </Segment>
            </Segment.Group>
        </Segment.Group>

      </div>


        <Grid.Row>
          <Grid.Column>
            <Footer/>
          </Grid.Column>
        </Grid.Row>

      </Grid>

    </div>);
  }
}

export default Tentang
