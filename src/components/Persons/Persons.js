import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
	// static getDerivedStateFromProps(props, state) {
	// 	console.log('[Person.js] getDerivedStateFromProps')
	// 	return state
	// }

	shouldComponentUpdate(nextProps,nextState) {
		console.log('[Persons.js] shouldComponentUpdate')
		return true
	}
	getSnapshotBeforeUpdate(prevProps, prevState) {
		console.log('[Persons.js] getSnapshotBeforreUpdate')

	}

	componentDidUpdate() {
		console.log('[Persons.js] componentDidUpdate')
	}

	render() {
		console.log('[Persons.js] rendering...');
		return this.props.persons.map((person, index) => {
			return (
				// <ErrorBoundary key={person.id}>
				<Person
					click={() => this.props.clicked(index)}
					name={person.name}
					age={person.age}
					key={person.id}
					changed={(event) => this.props.changed(event, person.id)}
				/>
				// </ErrorBoundary>
			);
		});
	}
}

export default Persons;
