import React from 'react'

/**
 * 
 * @param { children } 
 * there is always as props.children property
 * available to us that enables to work in a more 
 * natural html way <div> children</div> 
 */
export  const Base = ({children})=>
	<div>
		{`hello ${children}`}
	</div>

