<template>
  <b-card border-variant="light" class="shadow-sm mb-2">
    <b-card-sub-title class="mb-4">
      Сводная таблица
    </b-card-sub-title>
    <b-table :items="items" :fields="fields" head-variant="light" responsive>
      <template #cell(date)="data">
        {{ data.value | formatDate }}
      </template>
      <template #cell(start)="data">
        {{ data.value | formatDate }}
      </template>
      <template #cell(idle)="data">
        <p :class="{ 'text-danger' : data.value == true }">
          {{ data.value === true ? 'Да' : 'Нет' }}
        </p>
    </template>
    </b-table>
  </b-card>
</template>

<script>
export default {
  name: 'DataTable',
  props: {
    items: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      fields: [
        { key: 'unit', label: 'Агрегат', tdClass: 'align-middle' },
        { key: 'date', label: 'Дата', tdClass: 'align-middle'},
        { key: 'start', label: 'Начало', tdClass: 'align-middle' },
        { key: 'length', label: 'Длительность, мин.', tdClass: 'align-middle' },
        { key: 'idle', label: 'Простой', tdClass: 'align-middle' },
        { key: 'type', label: 'Тип', tdClass: 'align-middle' },
      ]
    }
  },
}
</script>
