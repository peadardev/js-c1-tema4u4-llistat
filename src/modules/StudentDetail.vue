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
        <p class="mb-0 text-secondary">ID: {{ props.id }}</p>
        <p class="mb-0 text-secondary">Email: {{ getStudent(props.id)?.email }}</p>
        <p class="mb-0 text-secondary">Curs: {{ getStudent(props.id)?.course }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { students } from '@/assets/llista.ts';
import type { Student } from '@/models/student.interface';

const props = defineProps<{ id: string }>();

function getStudent(id: string): Student {
  return students.find((s) => parseInt(id) === s.id)?.name;
  //console.log('STUD: ' + id + ' - ' + JSON, stringify(student, null, 2));
  //return student;
}

onMounted(() => {
  console.log('[TaskDetail] id (prop):', props.id);
  // TODO: aquí haríamos la petición a la API:
  // con fetch(`/api/tasks/${props.id}`).then(...).catch(...) con axios ...
});
</script>
