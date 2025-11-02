<script setup>
import { ref } from 'vue';

const formData = ref({
    name: '',
    email: '',
    message: ''
});

const formErrors = ref({
    name: '',
    email: '',
    message: ''
});

const formSubmitted = ref(false);

const validateForm = () => {
    let isValid = true;
    formErrors.value = { name: '', email: '', message: '' };

    if (!formData.value.name.trim()) {
        formErrors.value.name = 'A név megadása kötelező';
        isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.value.email.trim()) {
        formErrors.value.email = 'Az e-mail cím megadása kötelező';
        isValid = false;
    } else if (!emailRegex.test(formData.value.email)) {
        formErrors.value.email = 'Érvénytelen e-mail cím';
        isValid = false;
    }

    if (!formData.value.message.trim()) {
        formErrors.value.message = 'Az üzenet megadása kötelező';
        isValid = false;
    } else if (formData.value.message.trim().length < 10) {
        formErrors.value.message = 'Az üzenet legalább 10 karakter hosszú legyen';
        isValid = false;
    }

    return isValid;
};

const handleSubmit = () => {
    if (validateForm()) {
        formSubmitted.value = true;
        setTimeout(() => {
            formData.value = { name: '', email: '', message: '' };
            formSubmitted.value = false;
        }, 1000);
    }
};
</script>

<template>
    <section class="contact-section">
        <div class="contact-section_bg"></div>
        <div class="container">
            <div class="contact-content">
                <h2 class="contact-content_title">Lépj kapcsolatba velünk!</h2>

                <form @submit.prevent="handleSubmit" class="contact-form">
                    <div class="form-row">
                        <div class="form-group">
                            <input v-model="formData.name" type="text" placeholder="Név"
                                :class="{ 'error': formErrors.name }" />
                            <Transition name="error-fade">
                                <span v-if="formErrors.name" class="form-error">
                                    <i class="bi bi-exclamation-circle"></i>
                                    {{ formErrors.name }}
                                </span>
                            </Transition>
                        </div>

                        <div class="form-group">
                            <input v-model="formData.email" type="email" placeholder="E-mail"
                                :class="{ 'error': formErrors.email }" />
                            <Transition name="error-fade">
                                <span v-if="formErrors.email" class="form-error">
                                    <i class="bi bi-exclamation-circle"></i>
                                    {{ formErrors.email }}
                                </span>
                            </Transition>
                        </div>
                    </div>

                    <div class="form-group">
                        <textarea v-model="formData.message" placeholder="Üzenet" rows="6"
                            :class="{ 'error': formErrors.message }"></textarea>
                        <Transition name="error-fade">
                            <span v-if="formErrors.message" class="form-error">
                                <i class="bi bi-exclamation-circle"></i>
                                {{ formErrors.message }}
                            </span>
                        </Transition>
                    </div>

                    <button type="submit" class="form-submit">
                        <span v-if="!formSubmitted">Küldés</span>
                        <span v-else class="success-message">
                            <i class="bi bi-check-circle"></i>
                            Sikeresen elküldve!
                        </span>
                    </button>
                </form>
            </div>
        </div>
    </section>
</template>

<style scoped>
.contact-section {
    min-height: 100vh;
    background: linear-gradient(180deg, #25221a 0%, #1a251a 100%);
    padding: 128px 0;
    display: flex;
    align-items: center;
    position: relative;
    overflow: hidden;
    width: 100%;
}

.contact-section_bg {
    position: absolute;
    inset: 0;
    background: url(../assets/contact-bg.jpg) center/cover fixed;
    opacity: 0.1;
    filter: grayscale(80%);
}

.contact-section .container {
    position: relative;
    z-index: 1;
    width: 100%;
    max-width: 100%;
    padding: 0 16px;
}

.contact-content {
    max-width: 700px;
    margin: 0 auto;
    width: 100%;
}

.contact-content_title {
    font-size: clamp(32px, 5vw, 56px);
    font-weight: 800;
    color: #ffffff;
    text-align: center;
    margin-bottom: 48px;
    letter-spacing: -0.02em;
}

.contact-form {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(144, 186, 146, 0.15);
    border-radius: 24px;
    padding: 48px;
    width: 100%;
    box-sizing: border-box;
}

.form-row {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 24px;
    margin-bottom: 24px;
}

.form-group {
    position: relative;
    width: 100%;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 16px 20px;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(144, 186, 146, 0.2);
    border-radius: 12px;
    color: #ffffff;
    font-size: 16px;
    font-family: inherit;
    transition: all 0.3s ease;
    box-sizing: border-box;
}

.form-group input::placeholder,
.form-group textarea::placeholder {
    color: rgba(255, 255, 255, 0.4);
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: #90ba92;
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 3px rgba(144, 186, 146, 0.1);
}

.form-group input.error,
.form-group textarea.error {
    border-color: #e74c3c;
    animation: shake 0.4s ease;
}

@keyframes shake {
    0%, 100% {
        transform: translateX(0);
    }
    25% {
        transform: translateX(-8px);
    }
    75% {
        transform: translateX(8px);
    }
}

.form-error {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #e74c3c;
    font-size: 14px;
    margin-top: 8px;
}

.form-error i {
    font-size: 16px;
}

.error-fade-enter-active,
.error-fade-leave-active {
    transition: all 0.3s ease;
}

.error-fade-enter-from {
    opacity: 0;
    transform: translateY(-5px);
}

.error-fade-leave-to {
    opacity: 0;
    transform: translateY(5px);
}

.form-group textarea {
    resize: vertical;
    min-height: 120px;
}

.form-submit {
    width: 100%;
    padding: 18px;
    background: linear-gradient(135deg, #90ba92 0%, #6a9a6d 100%);
    color: #243524;
    border: none;
    border-radius: 12px;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
    margin-top: 16px;
}

.form-submit:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(144, 186, 146, 0.4);
}

.form-submit:active {
    transform: translateY(0);
}

.success-message {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    animation: successPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
}

@keyframes successPop {
    0% {
        transform: scale(0.8);
        opacity: 0;
    }
    50% {
        transform: scale(1.1);
    }
    100% {
        transform: scale(1);
        opacity: 1;
    }
}

@media (max-width: 768px) {
    .contact-section {
        padding: 80px 0;
    }

    .contact-form {
        padding: 32px 24px;
    }

    .form-row {
        grid-template-columns: 1fr;
        gap: 16px;
    }
}

@media (prefers-reduced-motion: reduce) {
    *, *::before, *::after {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
}
</style>