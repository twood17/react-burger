import React, { Component } from 'react';
import Person from './components/Person/Person';
import './App.css';



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
		const style = {
			backgroundColor: 'green',
			color: 'white',
			font: 'inherit',
			border: '1px solid blue',
			padding: '8px',
			cursor: 'pointer',
			borderRadius: '5px 5px 5px 5px'
			// ':hover': {
			// 	backgroundColor: 'lightgreen',
			// 	color: 'black'
			// }
		};

		let persons = null;

		if (this.state.showPersons) {
			persons = (
				<div>
					{this.state.persons.map((person, index) => {
						return (
							<Person
								click={() => this.deletePersonHandler(index)}
								name={person.name}
								age={person.age}
								key={person.id}
								changed={(event) => this.nameChangedHandler(event, person.id)}
							/>
						);
					})}
				</div>
			);
			// style.backgroundColor = 'red';
			// style[':hover'] = {
			// 	backgroundColor: 'purple',
			// 	color: 'white'
			// }
		}

		let classes = [];
		if (this.state.persons.length <= 2) {
			classes.push('red');
		}
		if (this.state.persons.length <= 1) {
			classes.push('bold');
		}

		return (
			<div className="App">
				<h1>Hi, I'm a React App!</h1>
				<p className={classes.join(' ')}>This is really working!</p>
				<button className="button" onClick={this.togglePersonsHandler}>
					Toggle Person
				</button>
				{persons}
			</div>
		);
	}
}

export default App;
