import React from 'react'
// TODO - add proptypes

const Header = props => {
    let Greeting
    console.log(props)
	if (props.user === null) {
		Greeting = <h2>Hello Guest</h2>
	// } else if (props.user.firstName) {
	// 	Greeting = (
	// 		<p>
	// 			Welcome back, <strong>{props.user.firstName}</strong>
	// 		</p>
	// 	)
	} else if (props.user.local.username) {
		Greeting = (
			<h4>
				Welcome back, <strong>{props.user.local.username} </strong>
			</h4>
		)
	}
	return (
		<div className="Header">
			{Greeting}
		</div>
	)
}

export default Header
