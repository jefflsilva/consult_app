<template>
    <button :ariaLabel="label" border="~ transparent hover:emerald7"
        un-after="absolute content-empty inset-x-0 aspect-square scale-0 op-70 origin-center duration-300 ease-linear rd-full top-0 left-0 bg-emerald7 hover:op-100 hover:scale-[2.5]"
        class="outline-none flex justify-center items-center sm-w-max min-w-max px6 h12 bg-emerald-6 rd-full relative
                                overflow-hidden duration-300 ease-linear">
        <span class="hidden sm-flex relative z20 text-white">
            {{ label }}
        </span>
        <span flex sm-hidden relative z20>
            <span i-carbon-send flex text-xl bg-white></span>
        </span>
    </button>
</template>

<script lang="ts" setup>
const props = defineProps({
    label: {
        type: String,
        required: true
    }
})

</script>