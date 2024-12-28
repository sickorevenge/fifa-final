document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('quizForm');
    const checkButton = document.getElementById('checkButton');
    const resetButton = document.getElementById('resetButton');
    const resultDiv = document.getElementById('result');

    checkButton.addEventListener('click', function() {
        let score = 0;
        let feedbackMessages = [];

        const question1Answers = document.querySelectorAll('input[name="question1"]:checked');
        const correctAnswer1 = "Разворот на 360 градусов, используя подошву стопы для защиты мяча.";
         const feedback1Div = document.getElementById('feedback1');
        if (question1Answers.length > 0) {
            const selectedAnswer1 = question1Answers[0].value;
            if (selectedAnswer1 === correctAnswer1) {
                score++;
                 feedback1Div.textContent = "Правильно!";
                 feedback1Div.className = 'feedback correct';
            } else {
                 feedback1Div.textContent = "Неправильно.";
                 feedback1Div.className = 'feedback incorrect';
            }
        } else {
            feedback1Div.textContent = "Не выбран ответ.";
            feedback1Div.className = 'feedback incorrect';
        }

        const answer2Input = document.getElementById('answer2');
        const correctAnswer2 = 11;
          const feedback2Div = document.getElementById('feedback2');
        if (answer2Input.value === String(correctAnswer2)) {
            score++;
              feedback2Div.textContent = "Правильно!";
            feedback2Div.className = 'feedback correct';
        } else {
              feedback2Div.textContent = "Неправильно.";
            feedback2Div.className = 'feedback incorrect';
        }

         const answer3Input = document.getElementById('answer3');
         const correctAnswer3 = "2018";
           const feedback3Div = document.getElementById('feedback3');
         if (answer3Input.value.toLowerCase() === correctAnswer3) {
             score++;
               feedback3Div.textContent = "Правильно!";
               feedback3Div.className = 'feedback correct';
         } else {
              feedback3Div.textContent = "Неправильно.";
            feedback3Div.className = 'feedback incorrect';
         }

         const answer4Input = document.getElementById('answer4');
         const correctAnswer4 = ["Неймар", "Мбаппе", "Мбаппе", "Месси"];
          const feedback4Div = document.getElementById('feedback4');
          const answer4 = answer4Input.value.trim();
        if (correctAnswer4.some(name => name.toLowerCase() === answer4.toLowerCase())) {
            score++;
             feedback4Div.textContent = "Правильно!";
              feedback4Div.className = 'feedback correct';
        } else {
             feedback4Div.textContent = "Неправильно.";
              feedback4Div.className = 'feedback incorrect';
        }
       const question5Answers = document.querySelectorAll('input[name="question5"]:checked');
        const correctAnswer5 = "1000";
        const feedback5Div = document.getElementById('feedback5');
        if (question5Answers.length > 0) {
           const selectedAnswer5 = question5Answers[0].value;
            if (selectedAnswer5 === correctAnswer5) {
               score++;
              feedback5Div.textContent = "Правильно!";
                 feedback5Div.className = 'feedback correct';
            } else {
               feedback5Div.textContent = "Неправильно.";
                 feedback5Div.className = 'feedback incorrect';
            }
        }  else {
            feedback5Div.textContent = "Не выбран ответ.";
            feedback5Div.className = 'feedback incorrect';
        }
         const question6Answers = document.querySelectorAll('input[name="question6"]:checked');
         const correctAnswer6 = "Роналду";
          const feedback6Div = document.getElementById('feedback6');
         if (question6Answers.length > 0) {
             const selectedAnswer6 = question6Answers[0].value;
             if (selectedAnswer6 === correctAnswer6) {
                 score++;
                  feedback6Div.textContent = "Правильно!";
                     feedback6Div.className = 'feedback correct';
             } else {
                  feedback6Div.textContent = "Неправильно.";
                   feedback6Div.className = 'feedback incorrect';
             }
         }  else {
             feedback6Div.textContent = "Не выбран ответ.";
            feedback6Div.className = 'feedback incorrect';
         }
         const answer7Input = document.getElementById('answer7');
         const correctAnswer7 = 7;
          const feedback7Div = document.getElementById('feedback7');
         if (answer7Input.value === String(correctAnswer7)) {
            score++;
              feedback7Div.textContent = "Правильно!";
              feedback7Div.className = 'feedback correct';
         } else {
             feedback7Div.textContent = "Неправильно.";
               feedback7Div.className = 'feedback incorrect';
         }

        resultDiv.textContent = `Ваш результат: ${score} из 7`;
        localStorage.setItem('testScore', String(score));
    });

    resetButton.addEventListener('click', function() {
        quizForm.reset();
         resultDiv.textContent = "";
       const feedbackDivs = document.querySelectorAll('.feedback');
        feedbackDivs.forEach(div => {
            div.textContent = "";
           div.className = "feedback";
        });
    });
});