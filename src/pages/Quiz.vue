<script setup>
import { ref, computed } from 'vue';
import { quizData } from '../datas2/quizData';

const selectedDifficulty = ref(null);
const currentQuestionIndex = ref(0);
const selectedAnswer = ref(null);
const showResult = ref(false);
const score = ref(0);

const difficulties = [
  { 
    key: 'easy', 
    label: 'Könnyű nehézség szint',
    icon: 'bi-droplet',
    description: 'Ideális kezdőknek és iskolásoknak'
  },
  { 
    key: 'medium', 
    label: 'Közepes nehézség szint',
    icon: 'bi-flower1',
    description: 'Kihívás azoknak, akik ismerik az esőerdőket'
  },
  { 
    key: 'hard', 
    label: 'Extrém nehézségi szint',
    icon: 'bi-tree',
    description: 'Csak igazi szakértőknek!'
  }
];

const currentQuiz = computed(() => {
  return selectedDifficulty.value ? quizData[selectedDifficulty.value] : [];
});

const currentQuestion = computed(() => {
  return currentQuiz.value[currentQuestionIndex.value];
});

const handleDifficultySelect = (difficulty) => {
  selectedDifficulty.value = difficulty;
  currentQuestionIndex.value = 0;
  selectedAnswer.value = null;
  showResult.value = false;
  score.value = 0;
};

const handleAnswerSelect = (answerIndex) => {
  selectedAnswer.value = answerIndex;
};

const handleSubmit = () => {
  if (selectedAnswer.value === currentQuestion.value.correctAnswer) {
    score.value++;
  }

  if (currentQuestionIndex.value < currentQuiz.value.length - 1) {
    setTimeout(() => {
      currentQuestionIndex.value++;
      selectedAnswer.value = null;
    }, 800);
  } else {
    setTimeout(() => {
      showResult.value = true;
    }, 800);
  }
};

const handleRestart = () => {
  selectedDifficulty.value = null;
  currentQuestionIndex.value = 0;
  selectedAnswer.value = null;
  showResult.value = false;
  score.value = 0;
};

const getDifficultyLabel = (key) => {
  const diff = difficulties.find(d => d.key === key);
  return diff ? diff.label : key;
};

const getResultMessage = () => {
  const percentage = score.value / currentQuiz.value.length;
  if (percentage === 1) return 'Tökéletes! Minden választ eltaláltál!';
  if (percentage >= 0.7) return 'Nagyszerű munka!';
  if (percentage >= 0.5) return 'Jó próbálkozás!';
  return 'Gyakorolj még egy kicsit!';
};

const getResultIcon = () => {
  const percentage = score.value / currentQuiz.value.length;
  if (percentage === 1) return 'bi-trophy-fill';
  if (percentage >= 0.7) return 'bi-star-fill';
  if (percentage >= 0.5) return 'bi-hand-thumbs-up-fill';
  return 'bi-lightning-charge-fill';
};
</script>

<template>
  <div class="quiz-page">
    <div class="hero-section">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1 class="quiz-title">Rainforest Quiz</h1>
        <p class="quiz-subtitle">Teszteld esőerdő tudásodat! Válaszd ki a nehézségi szintet és indulhat a kaland.</p>
      </div>
    </div>

    <div class="container">
      <div v-if="!selectedDifficulty && !showResult" class="difficulty-section">
        <div class="difficulty-grid">
          <div
            v-for="(diff, index) in difficulties"
            :key="diff.key"
            class="difficulty-card"
            @click="handleDifficultySelect(diff.key)"
          >
            <i :class="diff.icon" class="difficulty-icon"></i>
            <div class="difficulty-number">{{ index + 1 }}.</div>
            <h3 class="difficulty-label">{{ diff.label }}</h3>
            <p class="difficulty-description">{{ diff.description }}</p>
          </div>
        </div>
      </div>

      <div v-if="selectedDifficulty && !showResult && currentQuestion" class="quiz-card">
        <div class="quiz-header">
          <span class="difficulty-badge">
            {{ getDifficultyLabel(selectedDifficulty) }}
          </span>
          <span class="question-counter">
            Kérdés {{ currentQuestionIndex + 1 }} / {{ currentQuiz.length }}
          </span>
        </div>

        <div class="question-box">
          <h3 class="question-text">{{ currentQuestion.question }}</h3>
        </div>

        <div class="options-grid">
          <button
            v-for="(option, index) in currentQuestion.options"
            :key="index"
            class="option-button"
            :class="{
              'option-selected': selectedAnswer === index,
              'option-correct': selectedAnswer !== null && index === currentQuestion.correctAnswer,
              'option-incorrect': selectedAnswer === index && index !== currentQuestion.correctAnswer,
              'option-disabled': selectedAnswer !== null && selectedAnswer !== index
            }"
            :disabled="selectedAnswer !== null"
            @click="handleAnswerSelect(index)"
          >
            {{ option }}
          </button>
        </div>

        <button
          class="submit-button"
          :class="{ 'submit-disabled': selectedAnswer === null }"
          :disabled="selectedAnswer === null"
          @click="handleSubmit"
        >
          {{ currentQuestionIndex < currentQuiz.length - 1 ? 'Következő' : 'Befejezés' }}
        </button>
      </div>

      <div v-if="showResult" class="result-card">
        <i :class="getResultIcon()" class="result-icon"></i>
        <h2 class="result-title">Kvíz befejezve!</h2>
        <div class="result-score">{{ score }} / {{ currentQuiz.length }}</div>
        <p class="result-message">{{ getResultMessage() }}</p>
        <div class="result-stats">
          <div class="stat-item">
            <div class="stat-label">Helyes válaszok</div>
            <div class="stat-value">{{ score }}</div>
          </div>
          <div class="stat-item">
            <div class="stat-label">Pontosság</div>
            <div class="stat-value">{{ Math.round((score / currentQuiz.length) * 100) }}%</div>
          </div>
        </div>
        <button class="restart-button" @click="handleRestart">
          Új kvíz indítása
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.quiz-page {
  min-height: 100vh;
  background: linear-gradient(180deg, #1a251a 0%, #243524 100%);
}

.hero-section {
  position: relative;
  min-height: 35vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-overlay {
  display: none;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  padding: 32px;
  max-width: 800px;
}

.quiz-title {
  font-size: clamp(40px, 6vw, 72px);
  font-weight: 800;
  margin-top: 100px;
  margin-bottom: 16px;
  background: linear-gradient(135deg, #ffffff 0%, #90ba92 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.quiz-subtitle {
  font-size: clamp(18px, 2vw, 21px);
  color: rgba(255, 255, 255, 0.85);
  line-height: 1.7;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 48px 16px;
}

.difficulty-section {
  margin-top: -50px;
}

.difficulty-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 32px;
}

.difficulty-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 48px 32px;
  text-align: center;
  cursor: pointer;
  border: 1px solid rgba(144, 186, 146, 0.2);
  transition: all 0.3s ease;
}

.difficulty-card:hover {
  transform: translateY(-10px);
  border-color: rgba(144, 186, 146, 0.4);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

.difficulty-icon {
  font-size: 64px;
  margin-bottom: 16px;
  color: #90ba92;
}

.difficulty-number {
  font-size: 32px;
  font-weight: 800;
  color: #90ba92;
  margin-bottom: 16px;
}

.difficulty-label {
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 12px;
  line-height: 1.4;
}

.difficulty-description {
  font-size: 15px;
  color: rgba(255, 255, 255, 0.65);
  line-height: 1.5;
}

.quiz-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 48px;
  border: 1px solid rgba(144, 186, 146, 0.2);
  margin: 0 auto;
  max-width: 700px;
}

.quiz-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
  flex-wrap: wrap;
  gap: 16px;
}

.difficulty-badge {
  color: #90ba92;
  font-size: 16px;
  font-weight: 600;
}

.question-counter {
  color: rgba(255, 255, 255, 0.7);
  font-size: 15px;
}

.question-box {
  background: rgba(255, 255, 255, 0.08);
  padding: 32px;
  border-radius: 16px;
  margin-bottom: 32px;
  border: 1px solid rgba(144, 186, 146, 0.15);
}

.question-text {
  color: #ffffff;
  font-size: 22px;
  font-weight: 600;
  line-height: 1.6;
}

.options-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;
  margin-bottom: 32px;
}

.option-button {
  background: rgba(255, 255, 255, 0.08);
  color: #ffffff;
  border: 1px solid rgba(144, 186, 146, 0.2);
  padding: 20px 24px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
}

.option-button:not(:disabled):hover {
  background: rgba(144, 186, 146, 0.15);
  border-color: rgba(144, 186, 146, 0.4);
}

.option-correct {
  background: rgba(144, 186, 146, 0.25) !important;
  border: 2px solid #90ba92 !important;
}

.option-incorrect {
  background: rgba(186, 90, 90, 0.25) !important;
  border: 2px solid #ba5a5a !important;
}

.option-disabled {
  opacity: 0.5;
  cursor: default;
}

.submit-button {
  width: 100%;
  background: linear-gradient(135deg, #90ba92 0%, #6a9a6d 100%);
  color: #ffffff;
  border: none;
  padding: 20px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.submit-button:not(:disabled):hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(144, 186, 146, 0.3);
}

.submit-disabled {
  background: rgba(144, 186, 146, 0.3);
  cursor: not-allowed;
  opacity: 0.5;
}

.result-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 64px 48px;
  border: 1px solid rgba(144, 186, 146, 0.2);
  margin: 0 auto;
  max-width: 600px;
  text-align: center;
}

.result-icon {
  font-size: 80px;
  margin-bottom: 16px;
  color: #90ba92;
}

.result-title {
  font-size: 40px;
  font-weight: 800;
  color: #90ba92;
  margin-bottom: 24px;
}

.result-score {
  font-size: 80px;
  font-weight: 800;
  color: #ffffff;
  margin-bottom: 16px;
}

.result-message {
  font-size: 19px;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 32px;
}

.result-stats {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 48px;
  padding: 32px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
}

.stat-item {
  text-align: center;
}

.stat-label {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 8px;
}

.stat-value {
  font-size: 32px;
  font-weight: 700;
  color: #90ba92;
}

.restart-button {
  background: linear-gradient(135deg, #90ba92 0%, #6a9a6d 100%);
  color: #ffffff;
  border: none;
  padding: 20px 48px;
  border-radius: 12px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: all 0.3s ease;
}

.restart-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(144, 186, 146, 0.3);
}

@media (max-width: 768px) {
  .hero-section {
    min-height: 35vh;
  }
  .container {
    padding: 32px 16px;
  }
  .difficulty-section {
    margin-top: -30px;
  }
  .difficulty-grid {
    grid-template-columns: 1fr;
    gap: 24px;
  }
  .quiz-card, .result-card {
    padding: 32px 24px;
  }
  .result-score {
    font-size: 56px;
  }
  .result-icon {
    font-size: 56px;
  }
  .options-grid {
    grid-template-columns: 1fr;
  }
}
</style>