<script setup lang="ts">
import CustomButton from '../ui/CustomButton.vue';


</script>

<template>
    <section relative pt-32 lg-pt-36>
        <div px="5 sm:10 md:12 lg:5" mx-auto max-w-7xl w-full flex flex-col lg-flex-row gap-10 lg-gap-12>
            <div class="absolute w-full lg-w-1/2 inset-y-0 lg-right-0 hidden lg-block">
                <span absolute un--left-6 md-left-4 top-24 lg-top-28 w24 h24 rotate-90 skew-x-12 rd-3xl bg-green-4
                    blur-xl op-60 lg-op-95 lg-block hidden></span>
                <span absolute right-4 bottom-12 w24 h24 rd-3xl bg-emerald-6 blur-xl op-80></span>
            </div>
            <span
                class="w-4/12 lg-w-2/12 aspect-square bg-gradient-to-tr from-emerald-6 to-green-4 absolute -top-5 lg-left-0 rd-full skew-y-12 blur-2xl op-40 skew-x-12 rotate-90"></span>
            <div relative flex flex-col items-center text-center lg-text-left lg-py-7 xl-py-8 lg-items-start
                lg-max-w-none max-w-3xl mx-auto lg-mx-0 lg-flex-1 class="lg-w-1/2">

                <h1 text="3xl/tight sm:4xl/tight md:5xl/tight xl:6xl/tight neutral-8 dark:white" font-bold>
                    Agende agora sua Consulta <span
                        class="text-transparent bg-clip-text bg-gradient-to-br from-teal-6 from-20% via-emerald-600 via-30% to-green-6">Online!</span>
                </h1>
                <p mt-8 text="neutral-7 dark:neutral-3">
                    Vários especialistas no Brasil estão prontos para te ajudar.
                </p>
                <div mt-10 w-full flex justify-center lg-justify-start>
                    <button aria-label="Agendar Consulta" border="~ transparent hover:emerald7"
                        un-after="absolute content-empty inset-x-0 aspect-square scale-0 op-70 origin-center duration-300 ease-linear rd-full top-0 left-0 bg-emerald7 hover:op-100 hover:scale-[2.5]"
                        class="outline-none flex justify-center items-center w-max px6 h12 bg-emerald-6 rd-full relative
                                overflow-hidden duration-300 ease-linear">
                        <span class="relative z20 text-white">
                            Agendar Consulta
                        </span>
                    </button>
                </div>

            </div>

            <div flex flex-1 lg-h-auto relative lg-max-w-none mx-auto max-w-3xl class="lg-w-1/2">
                <img src="/images/consulta_online.jpg" alt="Hero image" width="2350" height="2359" rd-3xl object-cover
                    lg="absolute w-full lg-h-full" class="lg-max-h-none max-h-96">
            </div>
        </div>
    </section>
</template>