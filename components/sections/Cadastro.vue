<template>
    <section class="relative flex items-center justify-center min-h-screen py-12 px-4">
        <div class="w-full max-w-lg bg-white dark:bg-neutral-9 p-8 rounded-2xl shadow-lg">
            <h1 class="text-4xl font-bold text-center text-neutral-8 dark:text-white mb-8"
                aria-label="Cadastro de Conta">
                Cadastro de Conta
            </h1>
            <h2 class="text-3xl font-bold text-center text-neutral-8 dark:text-white mb-8" aria-label="Crie sua conta">
                Crie sua conta
            </h2>
            <form @submit.prevent="handleSubmit" aria-labelledby="form-title">
                <div class="mb-4">
                    <label for="firstName"
                        class="block mb-2 text-sm font-medium text-neutral-7 dark:text-neutral-3">Nome</label>
                    <input type="text" id="firstName" v-model="firstName" required aria-required="true"
                        class="w-full px-3 py-2 border border-neutral-3 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-6">
                </div>
                <div class="mb-4">
                    <label for="lastName"
                        class="block mb-2 text-sm font-medium text-neutral-7 dark:text-neutral-3">Sobrenome</label>
                    <input type="text" id="lastName" v-model="lastName" required
                        class="w-full px-3 py-2 border border-neutral-3 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-6">
                </div>
                <div class="mb-4">
                    <label for="birthDate"
                        class="block mb-2 text-sm font-medium text-neutral-7 dark:text-neutral-3">Data de
                        Nascimento</label>
                    <input type="date" id="birthDate" v-model="birthDate" required
                        class="w-full px-3 py-2 border border-neutral-3 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-6">
                </div>
                <div class="mb-4">
                    <label for="email"
                        class="block mb-2 text-sm font-medium text-neutral-7 dark:text-neutral-3">Email</label>
                    <input type="email" id="email" v-model="email" required
                        class="w-full px-3 py-2 border border-neutral-3 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-6">
                </div>
                <div class="mb-6">
                    <label for="password"
                        class="block mb-2 text-sm font-medium text-neutral-7 dark:text-neutral-3">Senha</label>
                    <input type="password" id="password" v-model="password" required
                        class="w-full px-3 py-2 border border-neutral-3 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-6">
                </div>
                <CustomButton label="Cadastrar" :hideTextOnMobile="true"></CustomButton>
            </form>
        </div>
    </section>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const firstName = ref('');
const lastName = ref('');
const birthDate = ref('');
const email = ref('');
const password = ref('');

useHead({
    title: 'Cadastro de Conta - MediConsulta Online',
    meta: [
        {
            name: 'description',
            content: 'Crie sua conta na MediConsulta Online para consultas médicas virtuais com profissionais qualificados. Cadastre-se agora e tenha acesso a um atendimento seguro e conveniente.',
        },
        {
            name: 'keywords',
            content: 'cadastro, consulta online, telemedicina, atendimento virtual, médicos online, saúde digital',
        },
        {
            name: 'robots',
            content: 'index, follow',
        },
    ],
    link: [
        {
            href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap",
            rel: "stylesheet"
        }
    ],
});

const handleSubmit = () => {
    const userData = {
        firstName: firstName.value,
        lastName: lastName.value,
        birthDate: birthDate.value,
        email: email.value,
        password: password.value,
    };
    console.log(userData);
};
</script>

<style scoped>
.min-h-screen {
    min-height: 100vh;
}

:focus {
    outline: 2px solid #059669;
    outline-offset: 2px;
}
</style>
