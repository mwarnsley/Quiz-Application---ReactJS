import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import QuestionList from './quiz/QuestionList.jsx';

class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			questions: [
				{
					id: 1,
					text: 'What is 2 + 2?',
					choices: [
						{
							id: 'a',
							text: '1'
						},
						{
							id: 'b',
							text: '4'
						},
						{
							id: 'c',
							text: '3'
						}
					],
					correct: 'b'
				},
				{
					id: 2,
					text: 'Is Javascript the same as Java?',
					choices: [
						{
							id: 'a',
							text: 'Yes'
						},
						{
							id: 'b',
							text: "I don't know"
						},
						{
							id: 'c',
							text: 'No'
						}
					],
					correct: 'c'
				},
				{
					id: 3,
					text: 'Does Javascript run on the client side?',
					choices: [
						{
							id: 'a',
							text: 'Yes'
						},
						{
							id: 'b',
							text: 'No'
						},
						{
							id: 'c',
							text: 'Not sure'
						}
					],
					correct: 'a'
				},
				{
					id: 4,
					text: 'Is Javascript a scripting or compiled language?',
					choices: [
						{
							id: 'a',
							text: "I don't know"
						},
						{
							id: 'b',
							text: 'Scripting'
						},
						{
							id: 'c',
							text: 'Compiled'
						}
					],
					correct: 'b'
				},
			],
			score: 0,
			current: 1
		}
	}

	setCurrent(current){
		this.setState({current});
	}

	setScore(score){
		this.setState({score});
	}

	render(){
		return(
			<div>
				<QuestionList {...this.state} setCurrent={this.setCurrent.bind(this)} setScore={this.setScore.bind(this)}/>
			</div>
		)
	}
}

export default App