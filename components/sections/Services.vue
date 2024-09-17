<template>
    <section py-20 id="servicos">
        <div px="5 sm:10 md:12 lg:5" class="max-w-7xl mx-auto flex flex-col items-start gap-10 xl-gap-14">
            <div class="text-center max-w-3xl mx-auto space-y-4">
                <h1 text="4xl neutral-9 dark:white" class="font-semibold">
                    Nossos serviços
                </h1>
                <p text="neutral-7 dark:neutral-3">
                    Facilitamos o agendamento de consultas e a conexão entre pacientes e profissionais de saúde.
                </p>
            </div>
            <div class="grid sm-grid-cols-2 lg-grid-cols-3 gap-6 lg-gap-8">
                <div p="5 sm:6 lg:8" border="~ neutral-2 dark:neutral-8" bg="neutral-1 dark:neutral-9"
                    class="rd-3xl relative overflow-hidden">
                    <div bg="neutral-2 dark:neutral-8" text="neutral-9 dark:white" class="rd-xl p3 w-max relative">
                        <span i-carbon-calendar flex text-2xl></span>
                    </div>
                    <div class="mt6 space-y-4 relative">
                        <h2 text="lg md:xl neutral-9 dark:neutral-1" class="font-semibold">
                            Agendamento de consultas
                        </h2>
                        <p text="neutral-7 dark:neutral-3">
                            Agende consultas com facilidade, escolhendo o profissional, data e horário que melhor se
                            adequam à sua agenda.
                        </p>
                    </div>
                    <span class="absolute w32 aspect-square -bottom-16 -right-16 bg-emerald-6/10 rd-full"></span>
                </div>
                <div p="5 sm:6 lg:8" border="~ neutral-2 dark:neutral-8" bg="neutral-1 dark:neutral-9"
                    class="rd-3xl relative overflow-hidden">
                    <div bg="neutral-2 dark:neutral-8" text="neutral-9 dark:white" class="rd-xl p3 w-max relative">
                        <span i-carbon-search flex text-2xl></span>
                    </div>
                    <div class="mt6 space-y-4 relative">
                        <h2 text="lg md:xl neutral-9 dark:neutral-1" class="font-semibold">
                            Busca avançada de profissionais
                        </h2>
                        <p text="neutral-7 dark:neutral-3">
                            Encontre o profissional ideal com nossa busca avançada, filtrando por especialidade,
                            localização, gênero e disponibilidade.
                        </p>
                    </div>
                    <span class="absolute w32 aspect-square -bottom-16 -right-16 bg-emerald-6/10 rd-full"></span>
                </div>
                <div p="5 sm:6 lg:8" border="~ neutral-2 dark:neutral-8" bg="neutral-1 dark:neutral-9"
                    class="rd-3xl relative overflow-hidden">
                    <div bg="neutral-2 dark:neutral-8" text="neutral-9 dark:white" class="rd-xl p3 w-max relative">
                        <span i-carbon-user-profile flex text-2xl></span>
                    </div>
                    <div class="mt6 space-y-4 relative">
                        <h2 text="lg md:xl neutral-9 dark:neutral-1" class="font-semibold">
                            Gerenciamento de perfil
                        </h2>
                        <p text="neutral-7 dark:neutral-3">
                            Mantenha seu perfil atualizado, seja você paciente ou profissional, para uma experiência
                            personalizada.
                        </p>
                    </div>
                    <span class="absolute w32 aspect-square -bottom-16 -right-16 bg-emerald-6/10 rd-full"></span>
                </div>
                <div p="5 sm:6 lg:8" border="~ neutral-2 dark:neutral-8" bg="neutral-1 dark:neutral-9"
                    class="rd-3xl relative overflow-hidden">
                    <div bg="neutral-2 dark:neutral-8" text="neutral-9 dark:white" class="rd-xl p3 w-max relative">
                        <span i-carbon-star flex text-2xl></span>
                    </div>
                    <div class="mt6 space-y-4 relative">
                        <h2 text="lg md:xl neutral-9 dark:neutral-1" class="font-semibold">
                            Sistema de avaliações
                        </h2>
                        <p text="neutral-7 dark:neutral-3">
                            Avalie e veja avaliações de outros pacientes para tomar decisões informadas sobre os
                            profissionais.
                        </p>
                    </div>
                    <span class="absolute w32 aspect-square -bottom-16 -right-16 bg-emerald-6/10 rd-full"></span>
                </div>
                <div p="5 sm:6 lg:8" border="~ neutral-2 dark:neutral-8" bg="neutral-1 dark:neutral-9"
                    class="rd-3xl relative overflow-hidden">
                    <div bg="neutral-2 dark:neutral-8" text="neutral-9 dark:white" class="rd-xl p3 w-max relative">
                        <span i-carbon-notification flex text-2xl></span>
                    </div>
                    <div class="mt6 space-y-4 relative">
                        <h2 text="lg md:xl neutral-9 dark:neutral-1" class="font-semibold">
                            Lembretes automáticos
                        </h2>
                        <p text="neutral-7 dark:neutral-3">
                            Receba lembretes por e-mail e SMS para nunca perder uma consulta agendada.
                        </p>
                    </div>
                    <span class="absolute w32 aspect-square -bottom-16 -right-16 bg-emerald-6/10 rd-full"></span>
                </div>
                <div p="5 sm:6 lg:8" border="~ neutral-2 dark:neutral-8" bg="neutral-1 dark:neutral-9"
                    class="rd-3xl relative overflow-hidden">
                    <div bg="neutral-2 dark:neutral-8" text="neutral-9 dark:white" class="rd-xl p3 w-max relative">
                        <span i-carbon-video flex text-2xl></span>
                    </div>
                    <div class="mt6 space-y-4 relative">
                        <h2 text="lg md:xl neutral-9 dark:neutral-1" class="font-semibold">
                            Telemedicina
                        </h2>
                        <p text="neutral-7 dark:neutral-3">
                            Realize consultas online com profissionais de saúde através de nossa plataforma segura de
                            videochamadas.
                        </p>
                    </div>
                    <span class="absolute w32 aspect-square -bottom-16 -right-16 bg-emerald-6/10 rd-full"></span>
                </div>
            </div>
        </div>
    </section>
</template>