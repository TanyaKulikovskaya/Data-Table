<template>
  <b-container class="p-3">
    <b-card border-variant="light" class="mb-2 shadow-sm">
      <div class="d-flex justify-content-between align-items-center">
        <b-card-title class="mb-0 font-weight-light">
          Плавка: {{ currentTask.id }}
        </b-card-title>
        <div class="d-flex justify-content-center">
          <b-button squared variant="info" size="sm" :disabled="isFirstTask" @click.prevent="prevHandler">
             <b-icon icon="arrow-left" variant="light"></b-icon>
          </b-button>
          <b-button squared variant="info" size="sm" :disabled="isLastTask" @click.prevent="nextHandler">
            <b-icon icon="arrow-right" variant="light"></b-icon>
          </b-button>
        </div>
      </div>
    </b-card>
    <b-row cols="1" cols-sm="2" cols-md="2" cols-lg="4" class="mb-2">
      <b-col class="py-2">
        <b-card border-variant="light" class="shadow-sm">
          <b-card-sub-title class="mb-4">
            Дата
          </b-card-sub-title>
          <b-card-title class="mb-0">
            {{currentTask.date | formatDate }}
          </b-card-title>
        </b-card>
      </b-col>
      <b-col class="py-2">
        <b-card border-variant="light" class="shadow-sm">
         <b-card-sub-title class="mb-4">
            Размер
          </b-card-sub-title>
          <b-card-title class="mb-0">
            {{ currentTask.size }} мм.
          </b-card-title>
        </b-card>
      </b-col>
      <b-col class="py-2">
        <b-card border-variant="light" class="shadow-sm">
          <b-card-sub-title class="mb-4">
            Выдержка
          </b-card-sub-title>
          <b-card-title class="mb-0" :class="{ 'text-danger' : currentTask.exposure > 100, 'text-success' : currentTask.exposure <= 100 }">
            <b>{{ currentTask.exposure }}</b> мин.
          </b-card-title>
        </b-card>
      </b-col>
      <b-col class="py-2">
        <b-card border-variant="light" class="shadow-sm">
          <b-card-sub-title class="mb-4">
            Оборот
          </b-card-sub-title>
          <b-card-title class="mb-0" :class="{ 'text-danger' : currentTask.turn > 100, 'text-success' : currentTask.turn <= 100 }">
            <b>{{ currentTask.turn }}</b> мин.
          </b-card-title>
        </b-card>
      </b-col>
    </b-row>
    <data-table :items="currentTask.details"/>
    <data-chart :graph="currentTask.graph" />
  </b-container>
</template>

<script>
import tasks from '~/data/tasks'

export default {
  name: 'HomePage',
  data() {
    return {
      tasks,
      currentIndex: 0
    }
  },
  computed: {
    currentTask() {
      return this.tasks[this.currentIndex]
    },
    isFirstTask() {
      return this.currentIndex === 0
    },
    isLastTask() {
      return this.currentIndex === this.tasks.length - 1
    },
  },
  methods: {
    prevHandler() {
      this.currentIndex--
    },
    nextHandler() {
      this.currentIndex++
    },
  }
}
</script>
