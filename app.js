var app = angular.module('quizApp', []);

app.directive('quiz', function(quizFactory) {
	return {
		restrict: 'AE',
		scope: {},
		templateUrl: 'template.html',
		link: function(scope, elem, attrs) {
			scope.start = function() {
				scope.id = 0;
				scope.quizOver = false;
				scope.inProgress = true;
				scope.getQuestion();
			};

			scope.reset = function() {
				scope.inProgress = false;
				scope.score = 0;
			}

			scope.getQuestion = function() {
				var q = quizFactory.getQuestion(scope.id);
				if(q) {
					scope.question = q.question;
					scope.options = q.options;
					scope.answer = q.answer;
					scope.answerMode = true;
				} else {
					scope.quizOver = true;
				}
			};

			scope.checkAnswer = function() {
				if(!$('input[name=answer]:checked').length) return;

				var ans = $('input[name=answer]:checked').val();

				if(ans == scope.options[scope.answer]) {
					scope.score++;
					scope.correctAns = true;
				} else {
					scope.correctAns = false;
				}

				scope.answerMode = false;
			};

			scope.nextQuestion = function() {
				scope.id++;
				scope.getQuestion();
			}

			scope.reset();
		}
	}
});

app.factory('quizFactory', function() {
	var questions = [
		{
						question: "1/10 What two things do you need to create webpages & view them?",
						options: ["A text editor & a compiler", "A text editor & a web browser","A compiler & a web browser", "None of the above"],
						answer: 1
		},
		{
						question: "2/10 Which tag is the root tag in HTML??",
						options: ["< title >", "< body >", "< head >", "< html >"],
						answer: 3
		},
		{
						question: "3/10 What MVC stands for?",
						options: ["Multi-Video-Controller", "Model-View-Controllers", "Model-Views-Control", "Multi-Visual-Control"],
						answer: 1
		},
		{
						question: "4/10 What is MVVM pattern?",
						options: ["Model-View View-Model", "Model-Views View-Model", "Model-View Views-Model", "Model-View View-Media"],
						answer: 0
		},
		{
						question: "5/10 AngularJS is?",
						options: ["a structural framework for dynamic web apps", "a general-purpose scripting language", "a scripting language for ArcGIS, and for Quantum GIS", "a Python based full stack web development framework"],
						answer: 0
		},
		{
						question: "6/10 What is the newest version of HTML being developed?",
						options: ["HTML5", "HTML3", "HTML2", "None"],
						answer: 0
		},
		{
						question: "7/10 What does CSS stand for?",
						options: ["Cascading Super Sheet", "Cascading Sheet Style", "Complete Super Sound", "Cascading Style Sheet"],
						answer: 3
		},
		{
						question: "8/10 jQuery Motto is?",
						options: ["Do less, write more", "Write less, do more", "Write less, do less", "None from above"],
						answer: 1
		},
		{
						question: "9/10 What D3 stand for?",
						options: ["Data-Driven Documents", "Documents-Data Driven", "Data-Data Data", "Driven-Data Documents"],
						answer: 0
		},
		{
						question: "10/10 PyCharm is an IDE which means?",
						options: ["International Development Enterprises", "Internet Dedicated Environment", "Integrated Development Environment", "International Dedicated Environment"],
						answer: 2
		}
];
return {
		getQuestion: function(id) {
			if(id < questions.length) {
				return questions[id];
			} else {
				return false;
			}
		}
	};
});














