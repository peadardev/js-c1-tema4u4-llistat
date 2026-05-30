<template>
  <section class="container py-4">
    <header class="d-flex align-items-center justify-content-between mb-3">
      <RouterLink to="/" class="btn btn-outline-secondary btn-sm"> ← Torna al listat </RouterLink>
    </header>

    <!-- Detall -->
    <div class="card mt-3">
      <div class="card-header bg-primary text-white">
        <h2 class="h5 mb-2">Detall de l'alumne: {{ getStudent(props.id)?.name }}</h2>
      </div>
      <div class="card-body">
        <p class="mb-0 text-secondary"><strong>ID: </strong>{{ props.id }}</p>
        <p class="mb-0 text-secondary"><strong>Email: </strong>{{ getStudent(props.id)?.email }}</p>
        <p class="mb-0 text-secondary"><strong>Curs: </strong>{{ getStudent(props.id)?.course }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { students } from '@/assets/llista.ts';

const props = defineProps<{ id: string }>();

function getStudent(id: string) {
  const student = students.find((s) => parseInt(id) === s.id);
  if (!student) return;
  return student;
}
</script>
