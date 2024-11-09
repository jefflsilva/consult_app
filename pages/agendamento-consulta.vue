<script setup lang="ts">
useHead({
    title: 'Agende sua Consulta - Especialistas Disponíveis',
    meta: [
        { name: 'description', content: 'Agende sua consulta com especialistas disponíveis. Escolha o melhor horário para você.' },
        { name: 'keywords', content: 'consulta, agendamento, especialistas, saúde' },
        { name: 'description', content: 'Agende sua consulta com especialistas disponíveis.' }
    ]
})
</script>

<template>
    <section relative pt-32 lg-pt-36>
        <div px="5 sm:10 md:12 lg:5" mx-auto max-w-7xl w-full flex flex-col lg-flex-row gap-10 lg-gap-12>
            <div
                class="lg-w-1/2 flex flex-col items-center text-center lg-text-left lg-py-7 xl-py-8 lg-items-start lg-max-w-none max-w-3xl mx-auto lg-mx-0">
                <h1 text="3xl/tight sm:4xl/tight md:5xl/tight xl:6xl/tight neutral-8 dark:white" font-bold>
                    Agende sua Consulta Agora
                </h1>
                <p mt-8 text="neutral-7 dark:neutral-3">
                    Escolha um especialista e um horário que melhor se adapte a você.
                </p>
                <div mt-10 w-full flex justify-center lg-justify-start>
                    <button aria-label="Agendar Consulta" border="~ transparent hover:emerald7" class="outline-none flex justify-center items-center w-max px6 h12 bg-emerald-6 rd-full relative
                                overflow-hidden duration-300 ease-linear">
                        <span class="relative z20 text-white">
                            Iniciar Agendamento
                        </span>
                    </button>
                </div>
            </div>

            <div class="lg-w-1/2">
                <img src="/consult_app/_nuxt/images/consult.jpg"
                    alt="Imagem de agendamento de consulta com especialista" width="2350" height="2359"
                    srcset="/consult_app/_nuxt/images/consult.jpg 2350w"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 2350px" rd-3xl object-cover
                    loading="lazy" class="lg-max-h-none max-h-96" />
            </div>
        </div>
    </section>
</template>
