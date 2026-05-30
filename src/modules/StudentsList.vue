<template>
  <section class="container py-4">
    <header class="d-flex align-items-center justify-content-between mb-3">
      <h1 class="h4 mb-0">Llista d'estudiants</h1>
    </header>

    <div class="list-group">
      <RouterLink
        v-for="student in students"
        :key="student.id"
        :to="{ name: 'student-detail', params: { id: student.id } }"
        class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
      >
        <span>
          <div>
            <strong>
              {{ student.name }}
            </strong>
          </div>
          <div>
            {{ student.email }}
          </div>
        </span>
        <span class="text-muted small">ID: {{ student.id }}</span>
      </RouterLink>
    </div>
  </section>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { students } from '@/assets/llista.ts';
</script>
