
import ReactDOM from 'react-dom'
import { makeMainRoutes } from './routes/routes'
import 'semantic-ui-css/semantic.min.css'
import './index.css'

const routes = makeMainRoutes()

ReactDOM.render(routes, document.getElementById('root'))
