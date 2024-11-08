<script setup>
const footerLinks = [
    {
        id: 1,
        title: "Para Pacientes",
        items: [
            { id: 1, label: 'Criar Perfil', link: '/' },
            { id: 2, label: 'Agendar Consulta', link: '/' },
            { id: 3, label: 'Encontrar Profissionais', link: '/' },
            { id: 4, label: 'Meus Agendamentos', link: '/' },
            { id: 5, label: 'Avaliações', link: '/' },
        ]
    },
    {
        id: 2,
        title: "Para Profissionais",
        items: [
            { id: 1, label: 'Criar Perfil', link: '/' },
            { id: 2, label: 'Gerenciar Agenda', link: '/' },
            { id: 3, label: 'Consultas Agendadas', link: '/' },
            { id: 4, label: 'Pagamentos', link: '/' },
        ]
    },
    {
        id: 3,
        title: "Sobre Nós",
        items: [
            { id: 1, label: 'Quem Somos', link: '/' },
            { id: 2, label: 'Como Funciona', link: '/' },
            { id: 3, label: 'Termos de Uso', link: '/' },
            { id: 4, label: 'Política de Privacidade', link: '/' },
        ]
    }
]
</script>
<template>
    <footer pt="16 md:20" bg="neutral-1 dark:neutral-9">
        <div px="5 sm:10 md:12 lg:5" class="max-w-7xl mx-auto">
            <nav text="neutral-7 dark:neutral-3"
                class="grid grid-cols-2 md-grid-cols-3 lg-grid-cols-4 gap-y-10 gap-8 py-10">
                <div v-for="footerItem in footerLinks" :key="footerItem.id" class="space-y-5">
                    <h2 text="lg neutral-9 dark:neutral-1" class="font-semibold">
                        {{ footerItem.title }}
                    </h2>
                    <ul class="space-y-3">
                        <li v-for="item in footerItem.items" :key="item.id">
                            <nuxt-link :to="item.link"
                                class="hover-text-emerald-6 dark-hover-text-emerald-5 duration-200"
                                title="Link para {{ item.label }}">
                                {{ item.label }}
                            </nuxt-link>
                        </li>
                    </ul>
                </div>

                <div class="space-y-5 col-span-2 md-col-span-3 lg-col-span-1">
                    <h2 text="lg neutral-9 dark:neutral-1" class="font-semibold">
                        Receba nossas novidades
                    </h2>
                    <p class="max-w-xl">
                        Fique por dentro das últimas atualizações e dicas para melhorar sua experiência no ConsultMatch.
                    </p>
                    <form action="" class="grid w-full relative max-w-xl">
                        <div class="flex flex-col gap-3 w-full relative">
                            <label for="email" class="sr-only">Email para inscrição</label>
                            <input id="email" type="email" bg="neutral-2 dark:neutral-8"
                                un-border="~ neutral-3 dark:neutral-7" class="w-full outline-none px3 py3 rd-full"
                                placeholder="email@gmail.com" required>
                            <button border="~ transparent hover:emerald-7"
                                un-after="absolute content-empty inset-x-0 aspect-square scale-0 op-70 origin-center duration-300 ease-linear rd-full top-0 left-0 bg-emerald-7 hover:op-100 hover:scale-[2.5]"
                                class="w-full py3 sm-py0 sm-w-max sm-absolute sm-right-1 sm-inset-y-1 px4 text-sm flex sm-items-center justify-center outline-none bg-emerald-6 text-white rd-3xl relative overflow-hidden">
                                <span relative z10>
                                    Inscrever-se
                                </span>
                            </button>
                        </div>
                    </form>
                </div>
            </nav>

            <div border-t="~ neutral-2 dark:neutral-8" un-text="neutral-7 dark:neutral-3"
                class="w-full flex flex-col md-flex-row gap-4 items-center sm-justify-between py3">
                <div text="center sm:left" class="flex sm-min-w-max">
                    <p> &copy; 2024 ConsultMatch. Todos os direitos reservados. </p>
                </div>
                <div class="flex justify-center sm-justify-end w-full gap-3">
                    <nuxt-link to="/" aria-label="social link" title="Facebook">
                        <span i-carbon-logo-facebook text-2xl flex></span>
                    </nuxt-link>
                    <nuxt-link to="/" aria-label="social link" title="LinkedIn">
                        <span i-carbon-logo-linkedin text-2xl flex></span>
                    </nuxt-link>
                    <nuxt-link to="/" aria-label="social link" title="Twitter">
                        <span i-carbon-logo-twitter text-2xl flex></span>
                    </nuxt-link>
                    <nuxt-link to="/" aria-label="social link" title="Instagram">
                        <span i-carbon-logo-instagram text-2xl flex></span>
                    </nuxt-link>
                </div>
            </div>
        </div>
    </footer>
</template>