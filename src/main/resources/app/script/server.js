import React from 'react'
import ReactDOMServer from 'react-dom/server'
import App from './components/App'

window.render = (template, model) => {
	var html = ReactDOMServer.renderToString(<App/>);
    return template.replace('SERVER_RENDERED_HTML', html)
    	.replace('SERVER_RENDERED_STATE', model);
};

