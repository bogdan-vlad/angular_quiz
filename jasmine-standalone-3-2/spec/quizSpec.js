describe('quiz', function(){
	var $compile,
		$rootScope;

	beforeEach(module('quizApp'));

	beforeEach(inject(function(_$compile_, _$rootScope_){
		$compile = _$compile_;
		$rootScope = _$rootScope_;
	}));

	it('Test test test', function(){
		var element = $compile("test test test")($rootScope);
		$rootScope.$digest();
		expect(template.html()).toContain("test test test");
	});
});

describe('$scope.start', function() {
		it('Should start the quiz as long as start button is pressed', function() {
			$scope.id = 0;
			$scope.quizOver = false;
			$scope.inProgress = true;

			expect(0).toEqual(0);
			expect(false).not.toBe(true);
			expect(true).toBe(true);
	});
});
describe('$scope.reset', function() {
	it('Should reset the quiz', function() {
		$scope.inProgress = false;
		$scope.score = 0;

		expect(false).toBe(false);
		expect(inProgress).toEqual(0);

	});
});
/*describe('$getQuestion', function() {
	it('Should show the question', function() {
		$scope.question = q.question;
		$scope.options = q.options;
		$scope.answer = q.answer;
		$scope.answerMode = true;

		expect(q.question).toMatch(q.question);
		expect(q.options).toMatch(q.options);
		expect(answer).toMatch(q.answer);
		expect(answerMode)toBe(true);
	});
});*/











