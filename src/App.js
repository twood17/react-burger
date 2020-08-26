import React, { Component } from 'react';
import Person from './components/Person/Person';
import classes from './App.css';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';

class App extends Component {
	//testing 2345
	state = {
		persons: [
			{ id: 'd14312', name: 'Ty', age: 31 },
			{ id: 'asdf12', name: 'Bob', age: 28 },
			{ id: 'a3151615', name: 'Tom', age: 25 }
		],
		otherState: 'some value',
		showPersons: false
	};

	nameChangedHandler = (event, id) => {
		const personIndex = this.state.persons.findIndex((p) => {
			return p.id === id;
		});

		const person = {
			...this.state.persons[personIndex]
		};

		person.name = event.target.value;

		const persons = [ ...this.state.persons ];
		persons[personIndex] = person;

		this.setState({ persons: persons });
	};

	deletePersonHandler = (personIndex) => {
		// const persons = this.state.persons.slice();
		const persons = [ ...this.state.persons ];
		persons.splice(personIndex, 1);
		this.setState({ persons: persons });
	};

	togglePersonsHandler = () => {
		const doesShow = this.state.showPersons;
		this.setState({ showPersons: !doesShow });
	};

	render() {
		let persons = null;
		let btnClass = [ classes.Button ];

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return (
							<ErrorBoundary key={person.id}>
								<Person
									click={() => this.deletePersonHandler(index)}
									name={person.name}
									age={person.age}									
									changed={(event) => this.nameChangedHandler(event, person.id)}
								/>
							</ErrorBoundary>
						);
					})}
				</div>
			);

			btnClass.push(classes.Red);
		}

		let assignedClasses = [];
		if (this.state.persons.length <= 2) {
			assignedClasses.push(classes.red);
		}
		if (this.state.persons.length <= 1) {
			assignedClasses.push(classes.bold);
		}

		return (
			<div className={classes.App}>
				<h1>Hi, I'm a React App!</h1>
				<p className={assignedClasses.join(' ')}>This is really working!</p>
				<button className={btnClass.join(' ')} onClick={this.togglePersonsHandler}>
					Toggle Person
				</button>
				{persons}
			</div>
		);
	}
}

export default App;
