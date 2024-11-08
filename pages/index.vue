<template>
  <main class="flex-1">
    <SectionsHeroSection />
    <SectionsSocialProuf />
    <!-- <SectionsLogoCloud /> -->
    <SectionsServices />
    <SectionsAboutContent />
    <LastRegistrations />
    <SectionsCta />
    <!-- <Carousel /> -->
  </main>
</template>

<script lang="ts" setup>
import LastRegistrations from '~/components/sections/LastRegistrations.vue';
useHead({
  title: 'MediConsulta Online - Atendimento Médico Virtual',
  meta: [
    {
      name: 'description',
      content: 'Consultas médicas online com profissionais de saúde qualificados. Atendimento virtual seguro e conveniente para pacientes.',
    },
    {
      name: 'keywords',
      content: 'consulta online, telemedicina, atendimento virtual, médicos online, saúde digital',
    },
  ],
  link: [
    {
      href: "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap",
      rel: "stylesheet"
    }
  ],
})
</script>