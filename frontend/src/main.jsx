import { render } from 'preact'
import { App } from './app.jsx'
import './index.css'

render(<div className='dark:bg-slate-900 dark:text-white '><App /></div>, document.getElementById('app'))
