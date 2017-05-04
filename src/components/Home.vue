<template>
  <div id="home">
    <h1 class="page-header">Current Data</h1>
    <div class="row">
      <div class="col-md-4 current-data">
        <h2>{{ players_num }} <small>players</small></h2>
      </div>
      <div class="col-md-4 current-data">
        <h2>{{ activities_num }} <small>activities</small></h2>
      </div>
    </div>
    <h1 class="page-header">Current Ranking</h1>
    <div class="row">
      <div class="col-md-4 current-ranking">
        <table class="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Player</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="r in ranking">
              <td>{{ r.rank }}</td>
              <td>{{ r.name }}</td>
              <td>{{ r.points }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      players_num: '500',
      activities_num: '1000',
      ranking: [
        {
          rank: 1,
          name: "Andy Murry",
          points: 5000
        },
        {
          rank: 2,
          name: "Andy Murry",
          points: 5000
        },
        {
          rank: 3,
          name: "Andy Murry",
          points: 5000
        },
      ]
    }
  }
}
</script>

<style scoped>
</style>
