<template>
  <div class="chart-wrapper">
    <canvas ref="chart" width="100%" height="100%"></canvas>
  </div>
</template>

<script>
// eslint-disable-next-line import/default
import Chart from 'chart.js'

export default {
    name: 'DataChart',
    props: {
        graph: {
            type: Array,
            default() {
            return []
            }
        }
    },
    computed: {
        labels() {
            return this.graph.map((item) => item[0])
        },
        chartData() {
            return this.graph.map((item) => {
                return {
                    x: item[0],
                    y: item[1]
                }
            })
        }
    },
    watch: {
        chartData: {
            handler() {
                this.fillData()
            }
        }
    },
    mounted() {
        this.fillData()
    },
    methods: {
        fillData() {
            // eslint-disable-next-line no-new
            new Chart(this.$refs.chart, {
                type: 'line',
                data: {
                    labels: this.labels,
                    datasets: [
                        {
                            label: 'График',
                            data: this.chartData,
                            backgroundColor: 'rgba(20, 205, 183,.2)',
                            borderColor: 'rgb(20, 205, 183)',
                            borderWidth: 3
                        }
                    ],
                },
            })
        }
    }
}
</script>
<style lang="scss">
    .chart-wrapper {
        width: 80%;
        height: 80%;
        margin: 0 auto;
    }
</style>
