<script setup lang="ts">
import CustomButton from '../ui/CustomButton.vue';

useHead({
    title: 'Login - Seu Site',
    meta: [
        { name: 'description', content: 'Faça login na sua conta para acessar recursos exclusivos.' },
        { name: 'keywords', content: 'login, autenticação, conta' },
        { name: 'robots', content: 'index, follow' }
    ]
});
</script>

<template>
    <section class="relative flex items-center justify-center min-h-screen py-12 px-4">
        <div class="w-full max-w-lg bg-white dark:bg-neutral-9 p-8 rounded-2xl shadow-lg">
            <h2 class="text-3xl font-bold text-center text-neutral-8 dark:text-white mb-8"
                aria-label="Bem-vindo de volta">
                Bem-vindo de volta
            </h2>

            <div class="space-y-4">
                <button aria-label="Continuar com Google"
                    class="w-full py-3 px-4 flex items-center justify-center gap-2 bg-white text-neutral-8 rounded-full border border-neutral-2 hover:bg-neutral-1 transition-colors">
                    <span class="i-carbon-logo-google text-xl" aria-hidden="true"></span>
                    Continuar com Google
                </button>

                <button aria-label="Continuar com LinkedIn"
                    class="w-full py-3 px-4 flex items-center justify-center gap-2 bg-white text-neutral-8 rounded-full border border-neutral-2 hover:bg-neutral-1 transition-colors">
                    <span class="i-carbon-logo-linkedin text-xl" aria-hidden="true"></span>
                    Continuar com LinkedIn
                </button>

                <div class="flex items-center">
                    <div class="flex-grow border-t border-neutral-3"></div>
                    <span class="px-4 text-neutral-5">ou</span>
                    <div class="flex-grow border-t border-neutral-3"></div>
                </div>

                <form class="space-y-4">
                    <div>
                        <input type="email" placeholder="Email"
                            class="w-full py-3 px-4 rounded-full bg-neutral-1 dark:bg-neutral-8 text-neutral-8 dark:text-white border border-neutral-2 dark:border-neutral-7 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600 focus:outline-none transition-colors" />
                    </div>
                    <div>
                        <input type="password" placeholder="Senha"
                            class="w-full py-3 px-4 rounded-full bg-neutral-1 dark:bg-neutral-8 text-neutral-8 dark:text-white border border-neutral-2 dark:border-neutral-7 focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600 focus:outline-none transition-colors" />
                    </div>
                    <CustomButton label="Entrar" class="w-full" isFullWidth></CustomButton>
                </form>

                <div class="text-center">
                    <a href="#" class="text-emerald-600 hover:underline">Esqueceu sua senha?</a>
                </div>

                <div class="text-center text-neutral-6 dark:text-neutral-4">
                    Ainda não tem conta? <a href="#" class="text-emerald-600 hover:underline">Faça seu cadastro!</a>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.min-h-screen {
    min-height: 100vh;
}
</style>
