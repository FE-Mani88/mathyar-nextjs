export const quizStorage = {
    getCompletedQuizzes() {
      const completed = localStorage.getItem('completedQuizzes');
      return completed ? JSON.parse(completed) : [];
    },
  
    isQuizCompleted(quizId) {
      const completed = this.getCompletedQuizzes();
      return completed.includes(quizId);
    },
  
    markQuizCompleted(quizId) {
      const completed = this.getCompletedQuizzes();
      if (!completed.includes(quizId)) {
        completed.push(quizId);
        localStorage.setItem('completedQuizzes', JSON.stringify(completed));
      }
    }
  };