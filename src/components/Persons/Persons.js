import React from 'react';
import Person from './Person/Person';

const Persons = (props) => {
	console.log('[Person.js] rendering...');
	return props.persons.map((person, index) => {
		return (
			// <ErrorBoundary key={person.id}>
			<Person
				click={() => props.clicked(index)}
				name={person.name}
				age={person.age}
				key={person.id}
				changed={(event) => props.changed(event, person.id)}
			/>
			// </ErrorBoundary>
		);
	});
};

export default Persons;
