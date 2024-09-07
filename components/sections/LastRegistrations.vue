<template>
    <section class="py-24">
        <div class="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
            <h2 class="text-3xl font-semibold text-neutral-9 dark:text-white mb-8 text-center">
                Profissionais Recém-Cadastrados
            </h2>
            <div class="relative">
                <div class="overflow-hidden">
                    <div class="flex transition-transform duration-300 ease-in-out"
                        :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
                        <div v-for="professional in recentProfessionals" :key="professional.id"
                            class="w-full md:w-1/3 flex-shrink-0 px-4">
                            <div
                                class="bg-neutral-1 dark:bg-neutral-9 border border-neutral-2 dark:border-neutral-8 rounded-xl p-6 space-y-4 flex flex-col h-full">
                                <div class="w-24 h-24 mx-auto overflow-hidden rounded-full">
                                    <img :src="professional.avatar" :alt="professional.name"
                                        class="w-full h-full object-cover">
                                </div>
                                <h3 class="text-xl font-semibold text-neutral-9 dark:text-white text-center">{{
                                    professional.name }}</h3>
                                <p class="text-neutral-7 dark:text-neutral-3 text-center">{{ professional.specialty }}
                                </p>
                                <div class="mt-auto flex justify-center">
                                    <button @click="goToProfile(professional.id)"
                                        class="px-6 py-2 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors duration-300">
                                        Ver perfil
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <button @click="prevSlide"
                    class="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md flex items-center justify-center">
                    <span class="i-carbon-chevron-left text-2xl"></span>
                </button>
                <button @click="nextSlide"
                    class="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md flex items-center justify-center">
                    <span class="i-carbon-chevron-right text-2xl"></span>
                </button>
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue';

const recentProfessionals = [
    {
        id: 1,
        name: "Dra. Ana Silva",
        specialty: "Psicóloga",
        avatar: "https://img.freepik.com/fotos-gratis/tabuinha-sorridente-com-medica-medica_23-2147648693.jpg?w=1380",
    },
    {
        id: 2,
        name: "Dr. Carlos Oliveira",
        specialty: "Psiquiatra",
        avatar: "https://img.freepik.com/fotos-gratis/medico-se-preparando-para-consultar_23-2149309940.jpg?w=1380",
    },
    {
        id: 3,
        name: "Dra. Mariana Costa",
        specialty: "Terapeuta Ocupacional",
        avatar: "https://img.freepik.com/fotos-gratis/mulher-de-tiro-medio-trabalhando-com-tablet_23-2148925523.jpg?w=1380",
    },
    {
        id: 4,
        name: "Dr. Ricardo Santos",
        specialty: "Nutricionista",
        avatar: "https://img.freepik.com/fotos-gratis/retrato-de-um-medico-sorridente-com-os-bracos-cruzados-no-consultorio-medico_637285-7214.jpg?w=1380",
    },
    {
        id: 5,
        name: "Dra. Fernanda Lima",
        specialty: "Fisioterapeuta",
        avatar: "https://img.freepik.com/fotos-gratis/retrato-de-uma-medica-sorridente-no-hospital_329181-14230.jpg?w=1380",
    },
    {
        id: 6,
        name: "Dr. Rafael Mendes",
        specialty: "Psicólogo",
        avatar: "https://img.freepik.com/fotos-gratis/retrato-de-um-medico-sorridente-com-os-bracos-cruzados_107420-84793.jpg?w=1380",
    },
    {
        id: 7,
        name: "Dra. Camila Rodrigues",
        specialty: "Fonoaudióloga",
        avatar: "https://img.freepik.com/fotos-gratis/retrato-de-uma-medica-sorridente-com-prancheta_107420-75552.jpg?w=1380",
    },
    {
        id: 8,
        name: "Dr. André Almeida",
        specialty: "Psiquiatra",
        avatar: "https://img.freepik.com/fotos-gratis/retrato-de-um-medico-sorridente-com-estetoscopio_107420-84774.jpg?w=1380",
    },
    {
        id: 9,
        name: "Dra. Beatriz Ferreira",
        specialty: "Terapeuta Ocupacional",
        avatar: "https://img.freepik.com/fotos-gratis/retrato-de-uma-medica-sorridente-com-prancheta_107420-75548.jpg?w=1380",
    },
    {
        id: 10,
        name: "Dr. Gustavo Santos",
        specialty: "Nutricionista",
        avatar: "https://img.freepik.com/fotos-gratis/retrato-de-um-medico-sorridente-com-os-bracos-cruzados_107420-84791.jpg?w=1380",
    },
];

const currentSlide = ref(0);
const totalSlides = Math.ceil(recentProfessionals.length / 3);

function nextSlide() {
    currentSlide.value = (currentSlide.value + 1) % totalSlides;
}

function prevSlide() {
    currentSlide.value = (currentSlide.value - 1 + totalSlides) % totalSlides;
}

function goToProfile(id) {
    console.log(`Navigating to profile of professional with id: ${id}`);
    // Implement navigation logic here
}
</script>