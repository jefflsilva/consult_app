<template>
    <header :class="navIsOpen ? 'bg-neutral-9/80' : 'bg-white dark:bg-neutral-950'" fixed inset-x-0 top-0 z50 py4>
        <div w-full px="5 sm:10 md:12 lg:5" mx-auto max-w-7xl>
            <nav w-full flex justify-between gap-6 relative>
                <div min-w-max inline-flex relative>
                    <nuxt-link to="/" relative flex items-center gap-3 aria-label="Home">
                        <svg class="w-6 h-6 text-emerald-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor" viewBox="0 0 20 20" role="img" aria-label="Logo">
                            <path
                                d="M0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm14-7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm-5-4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm0 4a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4Z" />
                        </svg>
                        <div inline-flex text="lg neutral-8 dark:white" font-semibold>
                            Consult Match
                        </div>
                    </nuxt-link>
                </div>

                <div aria-hidden="true" fixed bg="border-neutral-7/50" inset-0 backdrop-filter backdrop-blur-xl
                    class="bg-neutral-8/40" :class="navIsOpen ? 'flex lg-hidden' : 'hidden lg:!hidden'">
                </div>
                <div absolute lg-relative w-full flex overflow-hidden duration-300 ease-linear lg="full lg:0"
                    top="full lg:0" border="~ neutral-2 dark:neutral-7 lg:0" flex-col lg-flex-row gap-y-6 gap-x-4
                    lg-justify-between lg-items-center bg="white dark:neutral-950 lg:!transparent"
                    :class="navIsOpen ? 'translate-y-0 visible op-100' : 'translate-y-10 invisible op-0 lg-op-100 lg-visible lg-translate-y-0'">
                    <ul px="6 lg:0" pt="6 lg:0" flex flex-col lg-flex-row gap-y-4 gap-x-3
                        text="lg neutral-7 dark:neutral-3" w-full lg-justify-center lg-items-center>
                        <li v-for="navItem in navItems" :key="navItem.id">
                            <nuxt-link :to="navItem.href" @click.prevent="closeNavBar(); smoothScroll(navItem.href)"
                                duration-300 font-medium ease-linear hover-text-emerald-6 py3>
                                {{ navItem.text }}
                            </nuxt-link>
                        </li>
                    </ul>

                    <div lg-min-w-max flex items-center sm-w-max w-full pb="6 lg:0" px="6 lg:0">
                        <nuxt-link @click="closeNavBar();" to="/cadastro" flex justify-center items-center w-full
                            sm-w-max px6 h12 bg-emerald-600 rd-full relative overflow-hidden
                            border="~ transparent hover:[emerald7]" duration-300 ease-linear
                            un-after="absolute content-empty inset-x-0 aspect-square scale-0 op-70 origin-center duration-300 ease-linear rd-full top-0 left-0 bg-[emerald7]">
                            <span relative z-10 text-white>
                                Cadastrar
                            </span>
                        </nuxt-link>

                        <nuxt-link @click="closeNavBar();" to="/login" flex justify-center items-center w-full sm-w-max
                            px6 h12 ml-3 rd-full relative overflow-hidden border="~ emerald-600 hover:[emerald7]"
                            duration-300 ease-linear
                            un-after="absolute content-empty inset-x-0 aspect-square scale-0 op-70 origin-center duration-300 ease-linear rd-full top-0 left-0 bg-[emerald7]">
                            <span relative z-10 text-emerald-600 hover:text-emerald-700>
                                Entrar
                            </span>
                        </nuxt-link>
                    </div>
                </div>

                <div min-w-max flex items-center gap-x-3>
                    <ui-toggle-theme />
                    <button aria-label="toggle navbar" @click="toggleNavBar()" lg-hidden lg-invisible outline-none w7
                        hauto flex flex-col relative bg-transparent>
                        <span bg="neutral-7 dark:neutral-300" w6 h0.5 rd-full transition-all duration-300 ease-linear
                            :class="navIsOpen ? 'translate-y-1.5 rotate-40' : ''"></span>
                        <span bg="neutral-7 dark:neutral-3" w6 origin-center mt1 h0.5 rd-ful transition-all duration-300
                            ease-linear :class="navIsOpen ? 'op-0 scale-x-0' : ''"></span>
                        <span bg="neutral-7 dark:neutral-3" w6 mt1 h0.5 rd-ful transition-all duration-300 ease-linear
                            :class="navIsOpen ? '-translate-y-1.5 -rotate-40' : ''"></span>
                    </button>
                </div>
            </nav>
        </div>
    </header>
</template>
<script setup>
import CustomButton from '../ui/CustomButton.vue';
const navIsOpen = useState('navIsOpen', () => false)
const navItems = [
    {
        id: 1,
        text: "Início",
        href: "/",
    },
    {
        id: 2,
        text: "Serviços",
        href: "#servicos",
    },
    {
        id: 3,
        text: "Sobre nós",
        href: "#about",
    },
    {
        id: 4,
        text: "Contato",
        href: "/",
    }
]

function toggleNavBar() {
    navIsOpen.value = !navIsOpen.value
    document.body.classList.toggle("overflow-y-auto")
}
function closeNavBar() {
    navIsOpen.value = false
    document.body.classList.add("overflow-y-auto")
}

function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
}
</script>
